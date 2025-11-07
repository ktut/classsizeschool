import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chicago Data Portal - School Locations endpoint
// Using the most recent dataset available
const CHICAGO_SCHOOLS_API = 'https://data.cityofchicago.org/resource/8i6r-et8s.json';

// Limit the number of schools to fetch (increase as needed)
const LIMIT = 200;

/**
 * Fetch data from a URL
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
 * Extract student-teacher ratio from CPS data if available
 * This is a placeholder - we'll need to find the actual field name
 */
function extractStudentTeacherRatio(school) {
  // Try to find ratio in various possible field names
  const possibleFields = [
    'student_teacher_ratio',
    'studentteacherratio',
    'str',
    'ratio'
  ];

  for (const field of possibleFields) {
    if (school[field]) {
      const ratio = parseFloat(school[field]);
      if (!isNaN(ratio) && ratio > 0) {
        return ratio;
      }
    }
  }

  // If not found, generate a realistic ratio based on school type
  // This will be replaced with real data when available
  return generateRealisticRatio(school);
}

/**
 * Generate a realistic student-teacher ratio based on school characteristics
 * This is temporary until we get real ratio data
 */
function generateRealisticRatio(school) {
  const schoolName = (school.school_nm || school.long_name || '').toLowerCase();

  // Private schools tend to have better ratios
  if (schoolName.includes('prep') || schoolName.includes('academy') ||
      schoolName.includes('magnet')) {
    return 12 + Math.random() * 6; // 12-18
  }

  // Regular public schools
  return 18 + Math.random() * 10; // 18-28
}

/**
 * Transform Chicago Data Portal school data to our format
 */
function transformSchoolData(cpsSchools) {
  const schools = [];
  let id = 1;

  for (const school of cpsSchools) {
    // Extract location data
    const lat = school.school_latitude || school.lat || school.latitude || school.location?.latitude;
    const lng = school.school_longitude || school.lon || school.longitude || school.location?.longitude;

    if (!lat || !lng) {
      console.warn(`Skipping school without location: ${school.school_nm || school.long_name}`);
      continue;
    }

    // Build address
    let address = school.address;
    if (address && school.city && school.zip) {
      // Build full address with metro area code
      address = `${address}, ${school.city}, chicago ${school.zip}`;
    } else if (!address && school.street_address) {
      address = `${school.street_address}, Chicago, chicago ${school.zip || '60601'}`;
    } else if (!address) {
      address = 'Chicago, chicago';
    }

    // Get school name
    const name = school.short_name || school.school_nm || school.long_name || 'Unknown School';

    // Build website URL - handle both object and string formats
    let website = school.website?.url || school.school_website?.url ||
                 school.website || school.school_website;

    if (!website || typeof website !== 'string') {
      // Try to construct a CPS website URL
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '');
      website = `https://www.cps.edu/schools/${slug}`;
    }

    // Make sure website has protocol
    if (website && typeof website === 'string' && !website.startsWith('http')) {
      website = 'https://' + website;
    }

    schools.push({
      id: id++,
      name: name,
      address: address,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      website: website,
      studentTeacherRatio: parseFloat(extractStudentTeacherRatio(school).toFixed(1))
    });
  }

  return schools;
}

/**
 * Generate the schools.js file
 */
function generateSchoolsFile(schools) {
  const outputPath = path.join(__dirname, '../src/data/schools.js');

  const content = `// School data fetched from Chicago Data Portal
// Generated on ${new Date().toISOString()}
// Source: Chicago Public Schools Open Data
// Note: Student-teacher ratios are estimated and should be replaced with real data from ISBE

export const schools = ${JSON.stringify(schools, null, 2)};

// Helper function to get color based on student-teacher ratio
export function getColorByRatio(ratio) {
  if (ratio < 15) return 'darkgreen';
  if (ratio < 22) return 'green';
  if (ratio < 30) return 'yellow';
  return 'red';
}

// Helper function to get category label
export function getCategoryLabel(ratio) {
  if (ratio < 15) return 'Excellent (< 15:1)';
  if (ratio < 22) return 'Good (15-22:1)';
  if (ratio < 30) return 'High (22-30:1)';
  return 'Very High (> 30:1)';
}

// Helper function to extract state from school address
export function getStateFromAddress(address) {
  const match = address.match(/,\\s*([A-Z]{2})\\s*\\d{5}/);
  return match ? match[1] : null;
}

// Get unique states from all schools
export function getAvailableStates() {
  const states = new Set();
  schools.forEach(school => {
    const state = getStateFromAddress(school.address);
    if (state) states.add(state);
  });
  return Array.from(states).sort();
}

// State names mapping (all US states)
export const STATE_NAMES = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming'
};

// Get all state codes sorted alphabetically
export function getAllStates() {
  return Object.keys(STATE_NAMES).sort();
}

// Metro area configurations (major metro for each state)
export const METRO_AREAS = {
  'AL': { name: 'Birmingham', center: [33.5186, -86.8104], zoom: 10 },
  'AK': { name: 'Anchorage', center: [61.2181, -149.9003], zoom: 9 },
  'AZ': { name: 'Phoenix', center: [33.4484, -112.0740], zoom: 10 },
  'AR': { name: 'Little Rock', center: [34.7465, -92.2896], zoom: 10 },
  'CA': { name: 'Los Angeles', center: [34.0522, -118.2437], zoom: 10 },
  'CO': { name: 'Denver', center: [39.7392, -104.9903], zoom: 10 },
  'CT': { name: 'Hartford', center: [41.7658, -72.6734], zoom: 10 },
  'DE': { name: 'Wilmington', center: [39.7391, -75.5398], zoom: 11 },
  'FL': { name: 'Miami', center: [25.7617, -80.1918], zoom: 10 },
  'GA': { name: 'Atlanta', center: [33.7490, -84.3880], zoom: 10 },
  'HI': { name: 'Honolulu', center: [21.3099, -157.8581], zoom: 11 },
  'ID': { name: 'Boise', center: [43.6150, -116.2023], zoom: 10 },
  'IL': { name: 'Chicago', center: [41.8781, -87.6298], zoom: 10 },
  'IN': { name: 'Indianapolis', center: [39.7684, -86.1581], zoom: 10 },
  'IA': { name: 'Des Moines', center: [41.5868, -93.6250], zoom: 10 },
  'KS': { name: 'Wichita', center: [37.6872, -97.3301], zoom: 10 },
  'KY': { name: 'Louisville', center: [38.2527, -85.7585], zoom: 10 },
  'LA': { name: 'New Orleans', center: [29.9511, -90.0715], zoom: 10 },
  'ME': { name: 'Portland', center: [43.6591, -70.2568], zoom: 10 },
  'MD': { name: 'Baltimore', center: [39.2904, -76.6122], zoom: 10 },
  'MA': { name: 'Boston', center: [42.3601, -71.0589], zoom: 10 },
  'MI': { name: 'Detroit', center: [42.3314, -83.0458], zoom: 10 },
  'MN': { name: 'Minneapolis', center: [44.9778, -93.2650], zoom: 10 },
  'MS': { name: 'Jackson', center: [32.2988, -90.1848], zoom: 10 },
  'MO': { name: 'Kansas City', center: [39.0997, -94.5786], zoom: 10 },
  'MT': { name: 'Billings', center: [45.7833, -108.5007], zoom: 10 },
  'NE': { name: 'Omaha', center: [41.2565, -95.9345], zoom: 10 },
  'NV': { name: 'Las Vegas', center: [36.1699, -115.1398], zoom: 10 },
  'NH': { name: 'Manchester', center: [42.9956, -71.4548], zoom: 10 },
  'NJ': { name: 'Newark', center: [40.7357, -74.1724], zoom: 10 },
  'NM': { name: 'Albuquerque', center: [35.0844, -106.6504], zoom: 10 },
  'NY': { name: 'New York City', center: [40.7128, -74.0060], zoom: 10 },
  'NC': { name: 'Charlotte', center: [35.2271, -80.8431], zoom: 10 },
  'ND': { name: 'Fargo', center: [46.8772, -96.7898], zoom: 10 },
  'OH': { name: 'Columbus', center: [39.9612, -82.9988], zoom: 10 },
  'OK': { name: 'Oklahoma City', center: [35.4676, -97.5164], zoom: 10 },
  'OR': { name: 'Portland', center: [45.5152, -122.6784], zoom: 10 },
  'PA': { name: 'Philadelphia', center: [39.9526, -75.1652], zoom: 10 },
  'RI': { name: 'Providence', center: [41.8240, -71.4128], zoom: 11 },
  'SC': { name: 'Charleston', center: [32.7765, -79.9311], zoom: 10 },
  'SD': { name: 'Sioux Falls', center: [43.5460, -96.7313], zoom: 10 },
  'TN': { name: 'Nashville', center: [36.1627, -86.7816], zoom: 10 },
  'TX': { name: 'Houston', center: [29.7604, -95.3698], zoom: 10 },
  'UT': { name: 'Salt Lake City', center: [40.7608, -111.8910], zoom: 10 },
  'VT': { name: 'Burlington', center: [44.4759, -73.2121], zoom: 10 },
  'VA': { name: 'Richmond', center: [37.5407, -77.4360], zoom: 10 },
  'WA': { name: 'Seattle', center: [47.6062, -122.3321], zoom: 10 },
  'WV': { name: 'Charleston', center: [38.3498, -81.6326], zoom: 10 },
  'WI': { name: 'Milwaukee', center: [43.0389, -87.9065], zoom: 10 },
  'WY': { name: 'Cheyenne', center: [41.1400, -104.8202], zoom: 10 }
};
`;

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`✅ Generated ${schools.length} schools to ${outputPath}`);
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🔍 Fetching school data for Greater Chicagoland Area from Chicago Data Portal...');
    console.log(`API: ${CHICAGO_SCHOOLS_API}?$limit=${LIMIT}`);

    const url = `${CHICAGO_SCHOOLS_API}?$limit=${LIMIT}`;
    const cpsSchools = await fetchData(url);

    console.log(`📊 Fetched ${cpsSchools.length} schools from Greater Chicagoland Area`);

    // Log a sample school to see what fields are available
    if (cpsSchools.length > 0) {
      console.log('\n📋 Sample school data fields:');
      console.log(Object.keys(cpsSchools[0]));
      console.log('\n📋 Sample school:');
      console.log(JSON.stringify(cpsSchools[0], null, 2));
    }

    console.log('\n🔄 Transforming school data...');
    const transformedSchools = transformSchoolData(cpsSchools);

    console.log(`✨ Transformed ${transformedSchools.length} schools`);

    // Return the data instead of writing to file
    // This allows the combined script to merge data
    return transformedSchools;

  } catch (error) {
    console.error('❌ Error fetching Greater Chicagoland Area school data:', error.message);
    throw error;
  }
}

// If run directly, write to file
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
    .then(schools => {
      console.log('\n💾 Generating schools.js file...');
      generateSchoolsFile(schools);
      console.log('\n✅ Done! Real school data has been fetched and saved.');
      console.log('\n⚠️  Note: Student-teacher ratios are currently estimated.');
      console.log('   To get real ratios, you need to:');
      console.log('   1. Download data from ISBE: https://www.isbe.net/ilreportcarddata');
      console.log('   2. Or use CPS API if ratio data becomes available');
    })
    .catch(error => {
      console.error('Failed:', error);
      process.exit(1);
    });
}

export { main as fetchChicagoSchools };
