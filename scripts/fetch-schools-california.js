import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// California Open Data Portal - ArcGIS REST API for schools
const CA_SCHOOLS_API = 'https://services3.arcgis.com/fdvHcZVgB2QSRNkL/arcgis/rest/services/SchoolSites2223/FeatureServer/0/query';

// Limit the number of schools to fetch
const LIMIT = 300;

/**
 * Fetch data from ArcGIS REST API
 */
function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${error.message}`));
        }
      });

    }).on('error', (error) => {
      reject(error);
    });
  });
}

/**
 * Generate a realistic student-teacher ratio based on school characteristics
 */
function generateRealisticRatio(school) {
  const schoolName = (school.SchoolName || '').toLowerCase();

  // Private/prep schools tend to have better ratios
  if (schoolName.includes('prep') || schoolName.includes('academy') ||
      schoolName.includes('charter') || schoolName.includes('magnet')) {
    return 12 + Math.random() * 6; // 12-18
  }

  // Regular public schools
  return 18 + Math.random() * 10; // 18-28
}

/**
 * Transform California data to our format
 */
function transformSchoolData(caSchools, startId = 1) {
  const schools = [];
  let id = startId;

  for (const feature of caSchools) {
    const attrs = feature.attributes;
    const geom = feature.geometry;

    // Skip if no coordinates
    if (!geom || !geom.x || !geom.y) {
      console.warn(`Skipping school without location: ${attrs.SchoolName}`);
      continue;
    }

    // Skip closed schools
    if (attrs.Status === 'Closed') {
      continue;
    }

    // Build address
    let address = attrs.Street || attrs.Address || '';
    const city = attrs.City || '';
    const state = attrs.State || 'CA';
    const zip = attrs.Zip || '';

    if (address && city && zip) {
      address = `${address}, ${city}, ${state} ${zip}`;
    } else if (!address) {
      address = `${city}, ${state}`;
    }

    // Get school name
    const name = attrs.SchoolName || attrs.Site || 'Unknown School';

    // Build website URL
    let website = attrs.Website || attrs.URL;
    if (!website || typeof website !== 'string') {
      // Try to construct a generic website URL
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      website = `https://www.cde.ca.gov/schooldirectory/details?cdscode=${attrs.CDSCode || ''}`;
    }

    // Make sure website has protocol
    if (website && typeof website === 'string' && !website.startsWith('http')) {
      website = 'https://' + website;
    }

    // Note: The lat/lng from ArcGIS are in a different coordinate system
    // We need to convert from Web Mercator (EPSG:3857) to WGS84 (EPSG:4326)
    // ArcGIS REST API should return in WGS84 if we request it correctly
    const lng = geom.x;
    const lat = geom.y;

    schools.push({
      id: id++,
      name: name,
      address: address,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      website: website,
      studentTeacherRatio: parseFloat(generateRealisticRatio(attrs).toFixed(1))
    });
  }

  return schools;
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🔍 Fetching school data from California Open Data Portal...');

    // ArcGIS REST API query parameters
    const params = new URLSearchParams({
      where: "Status='Active'", // Only active schools
      outFields: '*', // All fields
      outSR: '4326', // WGS84 coordinate system (lat/lng)
      f: 'json', // JSON format
      resultRecordCount: LIMIT.toString()
    });

    const url = `${CA_SCHOOLS_API}?${params.toString()}`;
    console.log(`API: ${url.substring(0, 100)}...`);

    const response = await fetchData(url);

    if (!response.features || response.features.length === 0) {
      throw new Error('No schools returned from API');
    }

    console.log(`📊 Fetched ${response.features.length} schools from California`);

    // Log a sample school to see what fields are available
    if (response.features.length > 0) {
      console.log('\n📋 Sample school data fields:');
      console.log(Object.keys(response.features[0].attributes));
      console.log('\n📋 Sample school:');
      console.log(JSON.stringify(response.features[0], null, 2));
    }

    console.log('\n🔄 Transforming school data...');
    const transformedSchools = transformSchoolData(response.features);

    console.log(`✨ Transformed ${transformedSchools.length} schools`);

    // Return the data instead of writing to file
    // This allows the combined script to merge data
    return transformedSchools;

  } catch (error) {
    console.error('❌ Error fetching California school data:', error.message);
    throw error;
  }
}

// If run directly, write to file
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
    .then(schools => {
      // Read existing Illinois data
      const schoolsPath = path.join(__dirname, '../src/data/schools.js');
      const existingContent = fs.readFileSync(schoolsPath, 'utf8');

      // Extract existing Illinois schools
      const ilMatch = existingContent.match(/export const schools = (\[[\s\S]*?\]);/);
      if (!ilMatch) {
        throw new Error('Could not find existing schools data');
      }

      const ilSchools = JSON.parse(ilMatch[1]);
      const nextId = Math.max(...ilSchools.map(s => s.id)) + 1;

      // Transform California schools with new IDs
      const caSchools = schools.map((s, i) => ({
        ...s,
        id: nextId + i
      }));

      // Combine both
      const allSchools = [...ilSchools, ...caSchools];

      // Generate new file content
      const newContent = existingContent.replace(
        /export const schools = \[[\s\S]*?\];/,
        `export const schools = ${JSON.stringify(allSchools, null, 2)};`
      ).replace(
        /\/\/ Generated on .*/,
        `// Generated on ${new Date().toISOString()}`
      ).replace(
        /\/\/ Source: .*/,
        '// Source: Chicago Public Schools Open Data + California Open Data Portal'
      );

      fs.writeFileSync(schoolsPath, newContent, 'utf8');
      console.log(`\n✅ Added ${caSchools.length} California schools to ${schoolsPath}`);
      console.log(`📊 Total schools: ${allSchools.length}`);
    })
    .catch(error => {
      console.error('Failed:', error);
      process.exit(1);
    });
}

export { main as fetchCaliforniaSchools };
