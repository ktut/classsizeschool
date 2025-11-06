import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchIllinoisSchools } from './fetch-schools-illinois.js';
import { fetchCaliforniaSchools } from './fetch-schools-california.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate the schools.js file with combined data
 */
function generateSchoolsFile(schools) {
  const outputPath = path.join(__dirname, '../src/data/schools.js');

  const content = `// School data fetched from multiple sources
// Generated on ${new Date().toISOString()}
// Sources: Chicago Public Schools Open Data + California Open Data Portal
// Note: Student-teacher ratios are estimated and should be replaced with real data from ISBE/CDE

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
 * Main function to fetch all schools
 */
async function main() {
  try {
    console.log('🌎 Fetching school data from all sources...\n');

    // Fetch Illinois schools
    console.log('========================================');
    console.log('📍 ILLINOIS');
    console.log('========================================');
    const ilSchools = await fetchIllinoisSchools();

    console.log('\n========================================');
    console.log('📍 CALIFORNIA');
    console.log('========================================');
    // Fetch California schools with adjusted IDs
    const caSchools = await fetchCaliforniaSchools();
    const nextId = Math.max(...ilSchools.map(s => s.id)) + 1;
    const adjustedCaSchools = caSchools.map((s, i) => ({
      ...s,
      id: nextId + i
    }));

    // Combine all schools
    const allSchools = [...ilSchools, ...adjustedCaSchools];

    console.log('\n========================================');
    console.log('📊 SUMMARY');
    console.log('========================================');
    console.log(`Illinois schools: ${ilSchools.length}`);
    console.log(`California schools: ${adjustedCaSchools.length}`);
    console.log(`Total schools: ${allSchools.length}`);

    console.log('\n💾 Generating combined schools.js file...');
    generateSchoolsFile(allSchools);

    console.log('\n✅ Done! All school data has been fetched and saved.');
    console.log('\n⚠️  Note: Student-teacher ratios are currently estimated.');
    console.log('   To get real ratios:');
    console.log('   - Illinois: Download from ISBE https://www.isbe.net/ilreportcarddata');
    console.log('   - California: Download from CDE https://www.cde.ca.gov/ds/ad/downloadabledata.asp');

  } catch (error) {
    console.error('❌ Error fetching schools:', error.message);
    process.exit(1);
  }
}

main();
