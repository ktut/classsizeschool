// Mock school data for Chicagoland area
// Student-Teacher Ratio determines color:
// Green: < 15, Yellow: 15-22, Red: > 22

export const schools = [
  // Chicago - North Side
  {
    id: 1,
    name: "Lincoln Elementary School",
    address: "615 W Kemper Pl, Chicago, IL 60614",
    lat: 41.9242,
    lng: -87.6451,
    website: "https://www.cps.edu/schools/lincoln",
    studentTeacherRatio: 12.5
  },
  {
    id: 2,
    name: "Walter Payton College Prep",
    address: "1034 N Wells St, Chicago, IL 60610",
    lat: 41.9020,
    lng: -87.6342,
    website: "https://www.cps.edu/schools/payton",
    studentTeacherRatio: 17.3
  },
  {
    id: 3,
    name: "Lane Tech College Prep",
    address: "2501 W Addison St, Chicago, IL 60618",
    lat: 41.9470,
    lng: -87.6890,
    website: "https://www.cps.edu/schools/lane",
    studentTeacherRatio: 25.8
  },
  {
    id: 4,
    name: "Northside College Prep",
    address: "5501 N Kedzie Ave, Chicago, IL 60625",
    lat: 41.9805,
    lng: -87.7074,
    website: "https://www.cps.edu/schools/northside",
    studentTeacherRatio: 14.2
  },
  {
    id: 5,
    name: "Whitney M. Young Magnet High School",
    address: "211 S Laflin St, Chicago, IL 60607",
    lat: 41.8753,
    lng: -87.6617,
    website: "https://www.cps.edu/schools/young",
    studentTeacherRatio: 19.5
  },
  {
    id: 6,
    name: "Skinner North Elementary",
    address: "350 W Scott St, Chicago, IL 60610",
    lat: 41.9066,
    lng: -87.6380,
    website: "https://www.cps.edu/schools/skinner",
    studentTeacherRatio: 13.8
  },
  {
    id: 7,
    name: "Blaine Elementary School",
    address: "1420 W Grace St, Chicago, IL 60613",
    lat: 41.9505,
    lng: -87.6632,
    website: "https://www.cps.edu/schools/blaine",
    studentTeacherRatio: 14.7
  },
  {
    id: 8,
    name: "Nettlehorst Elementary School",
    address: "3252 N Broadway, Chicago, IL 60657",
    lat: 41.9409,
    lng: -87.6462,
    website: "https://www.cps.edu/schools/nettlehorst",
    studentTeacherRatio: 16.2
  },
  {
    id: 9,
    name: "Alcott High School for the Humanities",
    address: "2625 N Orchard St, Chicago, IL 60614",
    lat: 41.9297,
    lng: -87.6455,
    website: "https://www.cps.edu/schools/alcott",
    studentTeacherRatio: 18.4
  },
  {
    id: 10,
    name: "Bell Elementary School",
    address: "3730 N Oakley Ave, Chicago, IL 60618",
    lat: 41.9488,
    lng: -87.6862,
    website: "https://www.cps.edu/schools/bell",
    studentTeacherRatio: 21.3
  },

  // Chicago - South Side
  {
    id: 11,
    name: "Kenwood Academy",
    address: "5015 S Blackstone Ave, Chicago, IL 60615",
    lat: 41.8028,
    lng: -87.5906,
    website: "https://www.cps.edu/schools/kenwood",
    studentTeacherRatio: 23.7
  },
  {
    id: 12,
    name: "Jones College Prep",
    address: "700 S State St, Chicago, IL 60605",
    lat: 41.8716,
    lng: -87.6277,
    website: "https://www.cps.edu/schools/jones",
    studentTeacherRatio: 16.8
  },
  {
    id: 13,
    name: "South Shore International College Prep",
    address: "1955 E 75th St, Chicago, IL 60649",
    lat: 41.7582,
    lng: -87.5801,
    website: "https://www.cps.edu/schools/southshore",
    studentTeacherRatio: 24.5
  },
  {
    id: 14,
    name: "Hyde Park Academy High School",
    address: "6220 S Stony Island Ave, Chicago, IL 60637",
    lat: 41.7827,
    lng: -87.5864,
    website: "https://www.cps.edu/schools/hydepark",
    studentTeacherRatio: 22.1
  },
  {
    id: 15,
    name: "Ray Elementary School",
    address: "5631 S Kimbark Ave, Chicago, IL 60637",
    lat: 41.7914,
    lng: -87.5948,
    website: "https://www.cps.edu/schools/ray",
    studentTeacherRatio: 13.2
  },

  // Chicago - West Side
  {
    id: 16,
    name: "Fenger High School",
    address: "11220 S Wallace St, Chicago, IL 60628",
    lat: 41.6889,
    lng: -87.6398,
    website: "https://www.cps.edu/schools/fenger",
    studentTeacherRatio: 26.3
  },
  {
    id: 17,
    name: "Michele Clark Magnet High School",
    address: "5101 W Harrison St, Chicago, IL 60644",
    lat: 41.8735,
    lng: -87.7533,
    website: "https://www.cps.edu/schools/clark",
    studentTeacherRatio: 20.7
  },

  // North Suburbs
  {
    id: 18,
    name: "Evanston Township High School",
    address: "1600 Dodge Ave, Evanston, IL 60201",
    lat: 42.0501,
    lng: -87.6961,
    website: "https://www.eths.k12.il.us",
    studentTeacherRatio: 11.9
  },
  {
    id: 19,
    name: "New Trier High School",
    address: "385 Winnetka Ave, Winnetka, IL 60093",
    lat: 42.1089,
    lng: -87.7384,
    website: "https://www.newtrier.k12.il.us",
    studentTeacherRatio: 10.8
  },
  {
    id: 20,
    name: "Glenbrook South High School",
    address: "4000 W Lake Ave, Glenview, IL 60026",
    lat: 42.0845,
    lng: -87.8462,
    website: "https://www.glenbrook225.org/south",
    studentTeacherRatio: 13.1
  },
  {
    id: 21,
    name: "Glenbrook North High School",
    address: "2300 Shermer Rd, Northbrook, IL 60062",
    lat: 42.1278,
    lng: -87.8289,
    website: "https://www.glenbrook225.org/north",
    studentTeacherRatio: 12.8
  },
  {
    id: 22,
    name: "Lake Forest High School",
    address: "1285 N McKinley Rd, Lake Forest, IL 60045",
    lat: 42.2528,
    lng: -87.8567,
    website: "https://www.lfhs.org",
    studentTeacherRatio: 12.3
  },
  {
    id: 23,
    name: "Stevenson High School",
    address: "1 Stevenson Dr, Lincolnshire, IL 60069",
    lat: 42.2125,
    lng: -87.9264,
    website: "https://www.d125.org/shs",
    studentTeacherRatio: 18.9
  },
  {
    id: 24,
    name: "Highland Park High School",
    address: "433 Vine Ave, Highland Park, IL 60035",
    lat: 42.1853,
    lng: -87.8003,
    website: "https://www.hphs.deerfield.k12.il.us",
    studentTeacherRatio: 13.5
  },
  {
    id: 25,
    name: "Deerfield High School",
    address: "1959 N Waukegan Rd, Deerfield, IL 60015",
    lat: 42.1719,
    lng: -87.8447,
    website: "https://www.dist113.org/dhs",
    studentTeacherRatio: 14.1
  },
  {
    id: 26,
    name: "Niles North High School",
    address: "9800 Lawler Ave, Skokie, IL 60077",
    lat: 42.0339,
    lng: -87.7562,
    website: "https://www.niles-hs.k12.il.us/north",
    studentTeacherRatio: 16.5
  },
  {
    id: 27,
    name: "Niles West High School",
    address: "5701 Oakton St, Skokie, IL 60077",
    lat: 42.0269,
    lng: -87.7445,
    website: "https://www.niles-hs.k12.il.us/west",
    studentTeacherRatio: 17.2
  },

  // West Suburbs
  {
    id: 28,
    name: "Oak Park and River Forest High School",
    address: "201 N Scoville Ave, Oak Park, IL 60302",
    lat: 41.8893,
    lng: -87.7950,
    website: "https://www.oprfhs.org",
    studentTeacherRatio: 15.7
  },
  {
    id: 29,
    name: "Hinsdale Central High School",
    address: "5500 S Grant St, Hinsdale, IL 60521",
    lat: 41.7956,
    lng: -87.9331,
    website: "https://www.hinsdale86.org/central",
    studentTeacherRatio: 14.5
  },
  {
    id: 30,
    name: "Lyons Township High School",
    address: "100 S Brainard Ave, La Grange, IL 60525",
    lat: 41.8050,
    lng: -87.8692,
    website: "https://www.lths.net",
    studentTeacherRatio: 15.3
  },
  {
    id: 31,
    name: "Downers Grove North High School",
    address: "4436 Main St, Downers Grove, IL 60515",
    lat: 41.7961,
    lng: -88.0139,
    website: "https://north.csd99.org",
    studentTeacherRatio: 16.9
  },
  {
    id: 32,
    name: "Downers Grove South High School",
    address: "1436 Norfolk St, Downers Grove, IL 60516",
    lat: 41.7714,
    lng: -88.0203,
    website: "https://south.csd99.org",
    studentTeacherRatio: 17.4
  },
  {
    id: 33,
    name: "Glenbard West High School",
    address: "670 Crescent Blvd, Glen Ellyn, IL 60137",
    lat: 41.8642,
    lng: -88.0653,
    website: "https://www.glenbard.org/west",
    studentTeacherRatio: 18.1
  },
  {
    id: 34,
    name: "Wheaton Warrenville South High School",
    address: "1993 Tiger Trail, Wheaton, IL 60189",
    lat: 41.8358,
    lng: -88.1278,
    website: "https://www.cusd200.org/south",
    studentTeacherRatio: 15.8
  },
  {
    id: 35,
    name: "Naperville North High School",
    address: "899 N Mill St, Naperville, IL 60563",
    lat: 41.7895,
    lng: -88.1656,
    website: "https://www.naperville203.org/north",
    studentTeacherRatio: 16.2
  },
  {
    id: 36,
    name: "Naperville Central High School",
    address: "440 W Aurora Ave, Naperville, IL 60540",
    lat: 41.7542,
    lng: -88.1534,
    website: "https://www.naperville203.org/central",
    studentTeacherRatio: 15.9
  },
  {
    id: 37,
    name: "Neuqua Valley High School",
    address: "2360 95th St, Naperville, IL 60564",
    lat: 41.7231,
    lng: -88.1856,
    website: "https://www.ipsd.org/neuqua",
    studentTeacherRatio: 17.6
  },
  {
    id: 38,
    name: "Waubonsie Valley High School",
    address: "2590 Ogden Ave, Aurora, IL 60504",
    lat: 41.7289,
    lng: -88.2145,
    website: "https://www.ipsd.org/waubonsie",
    studentTeacherRatio: 18.3
  },

  // Northwest Suburbs
  {
    id: 39,
    name: "Barrington High School",
    address: "616 W Main St, Barrington, IL 60010",
    lat: 42.1539,
    lng: -88.1428,
    website: "https://www.barrington220.org/bhs",
    studentTeacherRatio: 14.8
  },
  {
    id: 40,
    name: "Palatine High School",
    address: "1111 N Rohlwing Rd, Palatine, IL 60074",
    lat: 42.1253,
    lng: -88.0467,
    website: "https://www.d211.org/palatine",
    studentTeacherRatio: 19.2
  },
  {
    id: 41,
    name: "Fremd High School",
    address: "1000 S Quentin Rd, Palatine, IL 60067",
    lat: 42.0978,
    lng: -88.0845,
    website: "https://www.d211.org/fremd",
    studentTeacherRatio: 18.7
  },
  {
    id: 42,
    name: "Schaumburg High School",
    address: "1100 W Schaumburg Rd, Schaumburg, IL 60194",
    lat: 42.0381,
    lng: -88.0856,
    website: "https://www.d211.org/schaumburg",
    studentTeacherRatio: 20.4
  },
  {
    id: 43,
    name: "Hoffman Estates High School",
    address: "1100 W Higgins Rd, Hoffman Estates, IL 60169",
    lat: 42.0461,
    lng: -88.1256,
    website: "https://www.d211.org/hoffman",
    studentTeacherRatio: 21.1
  },
  {
    id: 44,
    name: "Conant High School",
    address: "700 E Cougar Trail, Hoffman Estates, IL 60169",
    lat: 42.0628,
    lng: -88.0892,
    website: "https://www.d211.org/conant",
    studentTeacherRatio: 19.8
  },

  // Elementary and Middle Schools
  {
    id: 45,
    name: "Park View Elementary School",
    address: "1251 S Park View Ave, Morton Grove, IL 60053",
    lat: 42.0408,
    lng: -87.7845,
    website: "https://www.mortongrove70.org/parkview",
    studentTeacherRatio: 13.4
  },
  {
    id: 46,
    name: "Stevenson Elementary School",
    address: "4141 N Elston Ave, Chicago, IL 60618",
    lat: 41.9575,
    lng: -87.7023,
    website: "https://www.cps.edu/schools/stevenson",
    studentTeacherRatio: 24.2
  },
  {
    id: 47,
    name: "Edison Elementary School",
    address: "1414 W 104th Pl, Chicago, IL 60643",
    lat: 41.7067,
    lng: -87.6617,
    website: "https://www.cps.edu/schools/edison",
    studentTeacherRatio: 25.6
  },
  {
    id: 48,
    name: "LaSalle Language Academy",
    address: "1148 N Honore St, Chicago, IL 60622",
    lat: 41.9028,
    lng: -87.6728,
    website: "https://www.cps.edu/schools/lasalle",
    studentTeacherRatio: 15.4
  },
  {
    id: 49,
    name: "Burley Elementary School",
    address: "1630 W Barry Ave, Chicago, IL 60657",
    lat: 41.9375,
    lng: -87.6689,
    website: "https://www.cps.edu/schools/burley",
    studentTeacherRatio: 16.8
  },
  {
    id: 50,
    name: "Ogden International School",
    address: "24 W Walton St, Chicago, IL 60610",
    lat: 41.8994,
    lng: -87.6284,
    website: "https://www.cps.edu/schools/ogden",
    studentTeacherRatio: 14.9
  },
  {
    id: 51,
    name: "Coonley Elementary School",
    address: "4046 N Leavitt St, Chicago, IL 60618",
    lat: 41.9556,
    lng: -87.6826,
    website: "https://www.cps.edu/schools/coonley",
    studentTeacherRatio: 12.6
  },
  {
    id: 52,
    name: "Nettelhorst Elementary School",
    address: "3252 N Broadway, Chicago, IL 60657",
    lat: 41.9409,
    lng: -87.6462,
    website: "https://www.cps.edu/schools/nettelhorst",
    studentTeacherRatio: 15.1
  },
  {
    id: 53,
    name: "Clinton Elementary School",
    address: "311 S Sangamon St, Chicago, IL 60607",
    lat: 41.8773,
    lng: -87.6506,
    website: "https://www.cps.edu/schools/clinton",
    studentTeacherRatio: 17.9
  },
  {
    id: 54,
    name: "South Loop Elementary School",
    address: "1212 S Plymouth Ct, Chicago, IL 60605",
    lat: 41.8664,
    lng: -87.6313,
    website: "https://www.cps.edu/schools/southloop",
    studentTeacherRatio: 19.3
  },
  {
    id: 55,
    name: "Disney Magnet School",
    address: "4140 N Marine Dr, Chicago, IL 60613",
    lat: 41.9578,
    lng: -87.6489,
    website: "https://www.cps.edu/schools/disney",
    studentTeacherRatio: 13.7
  },
  {
    id: 56,
    name: "Northside Learning Center",
    address: "5415 N Kenmore Ave, Chicago, IL 60640",
    lat: 41.9789,
    lng: -87.6567,
    website: "https://www.cps.edu/schools/northsidelc",
    studentTeacherRatio: 11.4
  },
  {
    id: 57,
    name: "Wildwood Elementary School",
    address: "6950 N Hiawatha Ave, Chicago, IL 60646",
    lat: 42.0089,
    lng: -87.7823,
    website: "https://www.cps.edu/schools/wildwood",
    studentTeacherRatio: 22.8
  },
  {
    id: 58,
    name: "Roosevelt High School",
    address: "3436 W Wilson Ave, Chicago, IL 60625",
    lat: 41.9647,
    lng: -87.7128,
    website: "https://www.cps.edu/schools/roosevelt",
    studentTeacherRatio: 27.4
  },
  {
    id: 59,
    name: "Von Steuben Metropolitan Science Center",
    address: "5039 N Kimball Ave, Chicago, IL 60625",
    lat: 41.9736,
    lng: -87.7156,
    website: "https://www.cps.edu/schools/vonsteuben",
    studentTeacherRatio: 21.6
  },
  {
    id: 60,
    name: "Taft High School",
    address: "6530 W Bryn Mawr Ave, Chicago, IL 60631",
    lat: 41.9834,
    lng: -87.7989,
    website: "https://www.cps.edu/schools/taft",
    studentTeacherRatio: 23.9
  },

  // South Suburbs
  {
    id: 61,
    name: "Homewood-Flossmoor High School",
    address: "999 Kedzie Ave, Flossmoor, IL 60422",
    lat: 41.5417,
    lng: -87.6745,
    website: "https://www.hfhighschool.org",
    studentTeacherRatio: 16.7
  },
  {
    id: 62,
    name: "Sandburg High School",
    address: "13300 S Ridgeland Ave, Orland Park, IL 60462",
    lat: 41.6453,
    lng: -87.8389,
    website: "https://www.d230.org/sandburg",
    studentTeacherRatio: 18.5
  },
  {
    id: 63,
    name: "Stagg High School",
    address: "1621 Brookdale Rd, Palos Hills, IL 60465",
    lat: 41.6992,
    lng: -87.8239,
    website: "https://www.d230.org/stagg",
    studentTeacherRatio: 19.1
  },
  {
    id: 64,
    name: "Andrew High School",
    address: "5959 W 115th St, Chicago Ridge, IL 60415",
    lat: 41.6892,
    lng: -87.7678,
    website: "https://www.andrewhs.org",
    studentTeacherRatio: 20.3
  },
  {
    id: 65,
    name: "Lincoln-Way East High School",
    address: "201 Colorado Ave, Frankfort, IL 60423",
    lat: 41.5131,
    lng: -87.8342,
    website: "https://www.lw210.org/east",
    studentTeacherRatio: 21.7
  },
  {
    id: 66,
    name: "Oak Lawn Community High School",
    address: "9400 Southwest Hwy, Oak Lawn, IL 60453",
    lat: 41.7178,
    lng: -87.7542,
    website: "https://www.olchs.org",
    studentTeacherRatio: 19.6
  },
  {
    id: 67,
    name: "Argo Community High School",
    address: "7329 W 63rd St, Summit, IL 60501",
    lat: 41.7856,
    lng: -87.8067,
    website: "https://www.argohighschool.org",
    studentTeacherRatio: 22.5
  },
  {
    id: 68,
    name: "Reavis High School",
    address: "6034 W 77th St, Burbank, IL 60459",
    lat: 41.7442,
    lng: -87.7689,
    website: "https://www.reavis.org",
    studentTeacherRatio: 20.8
  },

  // Additional Chicago Schools
  {
    id: 69,
    name: "Northside Prep Elementary",
    address: "2252 W North Ave, Chicago, IL 60647",
    lat: 41.9103,
    lng: -87.6822,
    website: "https://www.cps.edu/schools/northsideprep",
    studentTeacherRatio: 14.3
  },
  {
    id: 70,
    name: "Wells Community Academy High School",
    address: "936 N Ashland Ave, Chicago, IL 60622",
    lat: 41.8978,
    lng: -87.6678,
    website: "https://www.cps.edu/schools/wells",
    studentTeacherRatio: 24.8
  }
];

// Helper function to get color based on student-teacher ratio
export function getColorByRatio(ratio) {
  if (ratio < 15) return 'green';
  if (ratio < 22) return 'yellow';
  return 'red';
}

// Helper function to get category label
export function getCategoryLabel(ratio) {
  if (ratio < 15) return 'Excellent (< 15:1)';
  if (ratio < 22) return 'Good (15-22:1)';
  return 'High (> 22:1)';
}

// Helper function to extract state from school address
export function getStateFromAddress(address) {
  const match = address.match(/,\s*([A-Z]{2})\s*\d{5}/);
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

// State names mapping
export const STATE_NAMES = {
  'IL': 'Illinois',
  'CA': 'California',
  'NY': 'New York',
  'TX': 'Texas',
  'FL': 'Florida',
  'PA': 'Pennsylvania',
  'OH': 'Ohio',
  'GA': 'Georgia',
  'NC': 'North Carolina',
  'MI': 'Michigan'
};

// Metro area configurations
export const METRO_AREAS = {
  'IL': {
    name: 'Chicago',
    center: [41.8781, -87.6298],
    zoom: 10
  },
  'CA': {
    name: 'Los Angeles',
    center: [34.0522, -118.2437],
    zoom: 10
  },
  'NY': {
    name: 'New York City',
    center: [40.7128, -74.0060],
    zoom: 10
  }
};
