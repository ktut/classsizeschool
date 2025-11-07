import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchChicagoSchools } from './fetch-schools-chicago.js';
import { fetchLASchools } from './fetch-schools-la.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate the schools.js file with combined data
 */
function generateSchoolsFile(schools) {
  const outputPath = path.join(__dirname, '../src/data/schools.js');

  const content = `// School data fetched from multiple metro areas
// Generated on ${new Date().toISOString()}
// Sources: Chicago Public Schools Open Data + California Open Data Portal (Greater LA Area)
// Note: Student-teacher ratios are estimated and should be replaced with real data

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

// Helper function to extract area from school address
export function getAreaFromAddress(address) {
  const match = address.match(/,\\s*([a-z]+)\\s*\\d{5}/);
  return match ? match[1] : null;
}

// Get unique areas from all schools
export function getAvailableAreas() {
  const areas = new Set();
  schools.forEach(school => {
    const area = getAreaFromAddress(school.address);
    if (area) areas.add(area);
  });
  return Array.from(areas).sort();
}

// Metro area names and display labels
export const AREA_NAMES = {
  'chicago': 'Greater Chicagoland Area',
  'la': 'LA Area'
};

// Metro area configurations
export const METRO_AREAS = {
  'chicago': { name: 'Greater Chicagoland Area', center: [41.8781, -87.6298], zoom: 9 },
  'la': { name: 'LA Area', center: [34.0522, -118.2437], zoom: 9 }
};
`;

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`✅ Generated ${schools.length} schools to ${outputPath}`);
}

/**
 * Main function to fetch all schools from metro areas
 */
async function main() {
  try {
    console.log('🌎 Fetching school data from all metro areas...\n');

    // Fetch Chicago area schools
    console.log('========================================');
    console.log('📍 GREATER CHICAGOLAND AREA');
    console.log('========================================');
    const chicagoSchools = await fetchChicagoSchools();

    console.log('\n========================================');
    console.log('📍 LA AREA');
    console.log('========================================');
    // Fetch LA area schools with adjusted IDs
    const laSchools = await fetchLASchools();
    const nextId = Math.max(...chicagoSchools.map(s => s.id)) + 1;
    const adjustedLaSchools = laSchools.map((s, i) => ({
      ...s,
      id: nextId + i
    }));

    // Combine all schools
    const allSchools = [...chicagoSchools, ...adjustedLaSchools];

    console.log('\n========================================');
    console.log('📊 SUMMARY');
    console.log('========================================');
    console.log(`Greater Chicagoland Area schools: ${chicagoSchools.length}`);
    console.log(`LA Area schools: ${adjustedLaSchools.length}`);
    console.log(`Total schools: ${allSchools.length}`);

    console.log('\n💾 Generating combined schools.js file...');
    generateSchoolsFile(allSchools);

    console.log('\n✅ Done! All school data has been fetched and saved.');
    console.log('\n⚠️  Note: Student-teacher ratios are currently estimated.');
    console.log('   To get real ratios, contact the respective school districts or state departments of education.');

  } catch (error) {
    console.error('❌ Error fetching schools:', error.message);
    process.exit(1);
  }
}

main();
