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
  },

  // California - Los Angeles Area
  {
    id: 71,
    name: "Harvard-Westlake School",
    address: "3700 Coldwater Canyon Ave, Studio City, CA 91604",
    lat: 34.1436,
    lng: -118.4089,
    website: "https://www.hw.com",
    studentTeacherRatio: 8.5
  },
  {
    id: 72,
    name: "Palisades Charter High School",
    address: "15777 Bowdoin St, Pacific Palisades, CA 90272",
    lat: 34.0511,
    lng: -118.5265,
    website: "https://www.palihi.org",
    studentTeacherRatio: 21.3
  },
  {
    id: 73,
    name: "Granada Hills Charter High School",
    address: "10535 Zelzah Ave, Granada Hills, CA 91344",
    lat: 34.2637,
    lng: -118.5164,
    website: "https://www.ghchs.com",
    studentTeacherRatio: 24.7
  },
  {
    id: 74,
    name: "Birmingham Community Charter High School",
    address: "17000 Haynes St, Lake Balboa, CA 91406",
    lat: 34.1953,
    lng: -118.4981,
    website: "https://www.birminghamcharter.com",
    studentTeacherRatio: 23.1
  },
  {
    id: 75,
    name: "Eagle Rock High School",
    address: "1750 Yosemite Dr, Los Angeles, CA 90041",
    lat: 34.1392,
    lng: -118.2092,
    website: "https://www.eaglerockhs.org",
    studentTeacherRatio: 26.4
  },
  {
    id: 76,
    name: "Franklin High School",
    address: "820 N Avenue 54, Los Angeles, CA 90042",
    lat: 34.1144,
    lng: -118.1881,
    website: "https://www.franklinhs.org",
    studentTeacherRatio: 27.2
  },
  {
    id: 77,
    name: "Los Angeles Center for Enriched Studies",
    address: "5931 W 18th St, Los Angeles, CA 90036",
    lat: 34.0398,
    lng: -118.3533,
    website: "https://www.lacesmagnet.org",
    studentTeacherRatio: 19.8
  },
  {
    id: 78,
    name: "Loyola High School",
    address: "1901 Venice Blvd, Los Angeles, CA 90006",
    lat: 34.0426,
    lng: -118.3089,
    website: "https://www.loyolahs.edu",
    studentTeacherRatio: 11.2
  },
  {
    id: 79,
    name: "Marlborough School",
    address: "250 S Rossmore Ave, Los Angeles, CA 90004",
    lat: 34.0676,
    lng: -118.3228,
    website: "https://www.marlborough.org",
    studentTeacherRatio: 7.9
  },
  {
    id: 80,
    name: "Crossroads School",
    address: "1714 21st St, Santa Monica, CA 90404",
    lat: 34.0261,
    lng: -118.4789,
    website: "https://www.xrds.org",
    studentTeacherRatio: 9.3
  },
  {
    id: 81,
    name: "Santa Monica High School",
    address: "601 Pico Blvd, Santa Monica, CA 90405",
    lat: 34.0145,
    lng: -118.4867,
    website: "https://www.samohi.smmusd.org",
    studentTeacherRatio: 22.6
  },
  {
    id: 82,
    name: "Culver City High School",
    address: "4401 Elenda St, Culver City, CA 90230",
    lat: 34.0078,
    lng: -118.4053,
    website: "https://www.ccusd.org/cchs",
    studentTeacherRatio: 20.4
  },
  {
    id: 83,
    name: "El Segundo High School",
    address: "640 Main St, El Segundo, CA 90245",
    lat: 33.9192,
    lng: -118.4165,
    website: "https://eshs.esusd.org",
    studentTeacherRatio: 18.7
  },
  {
    id: 84,
    name: "Palos Verdes Peninsula High School",
    address: "27118 Silver Spur Rd, Rolling Hills Estates, CA 90274",
    lat: 33.7742,
    lng: -118.3636,
    website: "https://www.pvphs.com",
    studentTeacherRatio: 24.3
  },
  {
    id: 85,
    name: "Torrance High School",
    address: "2200 W Carson St, Torrance, CA 90501",
    lat: 33.8306,
    lng: -118.3167,
    website: "https://ths.tusd.org",
    studentTeacherRatio: 25.1
  },
  {
    id: 86,
    name: "Redondo Union High School",
    address: "1 Sea Hawk Way, Redondo Beach, CA 90277",
    lat: 33.8692,
    lng: -118.3736,
    website: "https://rhs.rbusd.org",
    studentTeacherRatio: 23.8
  },
  {
    id: 87,
    name: "Mira Costa High School",
    address: "1401 Artesia Blvd, Manhattan Beach, CA 90266",
    lat: 33.8972,
    lng: -118.3881,
    website: "https://www.miracostahigh.org",
    studentTeacherRatio: 22.4
  },
  {
    id: 88,
    name: "Hawthorne Math and Science Academy",
    address: "4366 W El Segundo Blvd, Hawthorne, CA 90250",
    lat: 33.9178,
    lng: -118.3478,
    website: "https://www.hmsa.org",
    studentTeacherRatio: 28.5
  },
  {
    id: 89,
    name: "Leuzinger High School",
    address: "4118 W Rosecrans Ave, Lawndale, CA 90260",
    lat: 33.8964,
    lng: -118.3414,
    website: "https://www.centinela.k12.ca.us/leuzinger",
    studentTeacherRatio: 26.9
  },
  {
    id: 90,
    name: "Pasadena High School",
    address: "2925 E Sierra Madre Blvd, Pasadena, CA 91107",
    lat: 34.1586,
    lng: -118.1067,
    website: "https://www.pusd.us/phs",
    studentTeacherRatio: 21.7
  },
  {
    id: 91,
    name: "South Pasadena High School",
    address: "1401 Fremont Ave, South Pasadena, CA 91030",
    lat: 34.1078,
    lng: -118.1514,
    website: "https://www.sphs.spusd.net",
    studentTeacherRatio: 17.3
  },
  {
    id: 92,
    name: "San Marino High School",
    address: "2701 Huntington Dr, San Marino, CA 91108",
    lat: 34.1253,
    lng: -118.1064,
    website: "https://www.smhs.org",
    studentTeacherRatio: 14.6
  },
  {
    id: 93,
    name: "Polytechnic School",
    address: "1030 E California Blvd, Pasadena, CA 91106",
    lat: 34.1381,
    lng: -118.1292,
    website: "https://www.polytechnic.org",
    studentTeacherRatio: 9.1
  },
  {
    id: 94,
    name: "La Cañada High School",
    address: "4463 Oak Grove Dr, La Cañada Flintridge, CA 91011",
    lat: 34.2028,
    lng: -118.1981,
    website: "https://www.lchs.org",
    studentTeacherRatio: 19.2
  },
  {
    id: 95,
    name: "Glendale High School",
    address: "1440 E Broadway, Glendale, CA 91205",
    lat: 34.1525,
    lng: -118.2394,
    website: "https://www.gusd.net/ghs",
    studentTeacherRatio: 24.8
  },
  {
    id: 96,
    name: "Burbank High School",
    address: "902 N 3rd St, Burbank, CA 91502",
    lat: 34.1883,
    lng: -118.3272,
    website: "https://bhs.burbankusd.org",
    studentTeacherRatio: 22.3
  },
  {
    id: 97,
    name: "Arcadia High School",
    address: "180 Campus Dr, Arcadia, CA 91007",
    lat: 34.1331,
    lng: -118.0539,
    website: "https://ahs.ausd.net",
    studentTeacherRatio: 21.5
  },
  {
    id: 98,
    name: "Temple City High School",
    address: "9501 Lemon Ave, Temple City, CA 91780",
    lat: 34.1050,
    lng: -118.0578,
    website: "https://www.tcusd.org/tchs",
    studentTeacherRatio: 23.1
  },

  // California - San Francisco Bay Area
  {
    id: 99,
    name: "Lowell High School",
    address: "1101 Eucalyptus Dr, San Francisco, CA 94132",
    lat: 37.7336,
    lng: -122.4822,
    website: "https://www.lowellhs.org",
    studentTeacherRatio: 20.8
  },
  {
    id: 100,
    name: "Mission High School",
    address: "3750 18th St, San Francisco, CA 94114",
    lat: 37.7617,
    lng: -122.4256,
    website: "https://www.missionhs.org",
    studentTeacherRatio: 24.3
  },
  {
    id: 101,
    name: "Galileo Academy of Science and Technology",
    address: "1150 Francisco St, San Francisco, CA 94109",
    lat: 37.8025,
    lng: -122.4197,
    website: "https://www.galileosf.org",
    studentTeacherRatio: 22.7
  },
  {
    id: 102,
    name: "Washington High School",
    address: "600 32nd Ave, San Francisco, CA 94121",
    lat: 37.7761,
    lng: -122.4933,
    website: "https://www.washingtonhs.org",
    studentTeacherRatio: 21.9
  },
  {
    id: 103,
    name: "Lincoln High School",
    address: "2162 24th Ave, San Francisco, CA 94116",
    lat: 37.7475,
    lng: -122.4814,
    website: "https://www.lincolnhs.org",
    studentTeacherRatio: 23.4
  },
  {
    id: 104,
    name: "San Francisco University High School",
    address: "3065 Jackson St, San Francisco, CA 94115",
    lat: 37.7928,
    lng: -122.4450,
    website: "https://www.sfuhs.org",
    studentTeacherRatio: 8.2
  },
  {
    id: 105,
    name: "The Urban School of San Francisco",
    address: "1563 Page St, San Francisco, CA 94117",
    lat: 37.7725,
    lng: -122.4433,
    website: "https://www.urbanschool.org",
    studentTeacherRatio: 7.5
  },
  {
    id: 106,
    name: "Palo Alto High School",
    address: "50 Embarcadero Rd, Palo Alto, CA 94301",
    lat: 37.4447,
    lng: -122.1628,
    website: "https://www.paly.net",
    studentTeacherRatio: 16.8
  },
  {
    id: 107,
    name: "Gunn High School",
    address: "780 Arastradero Rd, Palo Alto, CA 94306",
    lat: 37.4014,
    lng: -122.1247,
    website: "https://www.gunn.pausd.org",
    studentTeacherRatio: 17.4
  },
  {
    id: 108,
    name: "Mountain View High School",
    address: "3535 Truman Ave, Mountain View, CA 94040",
    lat: 37.4056,
    lng: -122.0650,
    website: "https://www.mvhs.mvla.net",
    studentTeacherRatio: 19.6
  },
  {
    id: 109,
    name: "Los Altos High School",
    address: "201 Almond Ave, Los Altos, CA 94022",
    lat: 37.3761,
    lng: -122.0997,
    website: "https://www.lahs.losaltoshs.org",
    studentTeacherRatio: 15.3
  },
  {
    id: 110,
    name: "Menlo-Atherton High School",
    address: "555 Middlefield Rd, Atherton, CA 94027",
    lat: 37.4506,
    lng: -122.1978,
    website: "https://www.ma.seqsd.org",
    studentTeacherRatio: 18.9
  },
  {
    id: 111,
    name: "Woodside High School",
    address: "199 Churchill Ave, Woodside, CA 94062",
    lat: 37.4258,
    lng: -122.2536,
    website: "https://www.whs.seqsd.org",
    studentTeacherRatio: 20.2
  },
  {
    id: 112,
    name: "Harker School",
    address: "500 Saratoga Ave, San Jose, CA 95129",
    lat: 37.3108,
    lng: -121.9889,
    website: "https://www.harker.org",
    studentTeacherRatio: 8.7
  },
  {
    id: 113,
    name: "Lynbrook High School",
    address: "1280 Johnson Ave, San Jose, CA 95129",
    lat: 37.3128,
    lng: -121.9997,
    website: "https://www.lynbrook.fuhsd.org",
    studentTeacherRatio: 21.3
  },
  {
    id: 114,
    name: "Monta Vista High School",
    address: "21840 McClellan Rd, Cupertino, CA 95014",
    lat: 37.3203,
    lng: -122.0592,
    website: "https://www.mvhs.fuhsd.org",
    studentTeacherRatio: 22.8
  },
  {
    id: 115,
    name: "Homestead High School",
    address: "21370 Homestead Rd, Cupertino, CA 95014",
    lat: 37.3383,
    lng: -122.0522,
    website: "https://www.hhs.fuhsd.org",
    studentTeacherRatio: 20.7
  },
  {
    id: 116,
    name: "Saratoga High School",
    address: "20300 Herriman Ave, Saratoga, CA 95070",
    lat: 37.2636,
    lng: -122.0364,
    website: "https://www.saratogahigh.org",
    studentTeacherRatio: 18.4
  },
  {
    id: 117,
    name: "Piedmont High School",
    address: "800 Magnolia Ave, Piedmont, CA 94611",
    lat: 37.8244,
    lng: -122.2314,
    website: "https://www.piedmont.k12.ca.us/phs",
    studentTeacherRatio: 13.9
  },
  {
    id: 118,
    name: "Oakland Technical High School",
    address: "4351 Broadway, Oakland, CA 94611",
    lat: 37.8289,
    lng: -122.2511,
    website: "https://www.oaklandtech.com",
    studentTeacherRatio: 25.6
  },
  {
    id: 119,
    name: "Berkeley High School",
    address: "1980 Allston Way, Berkeley, CA 94704",
    lat: 37.8697,
    lng: -122.2672,
    website: "https://www.berkeleyschools.net/bhs",
    studentTeacherRatio: 19.7
  },
  {
    id: 120,
    name: "Albany High School",
    address: "603 Key Route Blvd, Albany, CA 94706",
    lat: 37.8897,
    lng: -122.2975,
    website: "https://www.albany.k12.ca.us/ahs",
    studentTeacherRatio: 17.8
  },
  {
    id: 121,
    name: "Redwood High School",
    address: "395 Doherty Dr, Larkspur, CA 94939",
    lat: 37.9439,
    lng: -122.5256,
    website: "https://www.tamdistrict.org/redwood",
    studentTeacherRatio: 16.2
  },
  {
    id: 122,
    name: "Tam High School",
    address: "700 Miller Ave, Mill Valley, CA 94941",
    lat: 37.9039,
    lng: -122.5431,
    website: "https://www.tamdistrict.org/tam",
    studentTeacherRatio: 15.7
  },
  {
    id: 123,
    name: "San Rafael High School",
    address: "185 Mission Ave, San Rafael, CA 94901",
    lat: 37.9728,
    lng: -122.5147,
    website: "https://www.srhs.org",
    studentTeacherRatio: 21.4
  },

  // California - San Diego Area
  {
    id: 124,
    name: "La Jolla High School",
    address: "750 Nautilus St, La Jolla, CA 92037",
    lat: 32.8464,
    lng: -117.2536,
    website: "https://www.ljhs.org",
    studentTeacherRatio: 22.1
  },
  {
    id: 125,
    name: "Torrey Pines High School",
    address: "3710 Del Mar Heights Rd, San Diego, CA 92130",
    lat: 32.9428,
    lng: -117.2189,
    website: "https://www.tphs.sduhsd.net",
    studentTeacherRatio: 23.7
  },
  {
    id: 126,
    name: "Canyon Crest Academy",
    address: "5951 Village Center Loop Rd, San Diego, CA 92130",
    lat: 32.9608,
    lng: -117.2219,
    website: "https://www.canyoncrest.sduhsd.net",
    studentTeacherRatio: 21.8
  },
  {
    id: 127,
    name: "The Bishop's School",
    address: "7607 La Jolla Blvd, La Jolla, CA 92037",
    lat: 32.8356,
    lng: -117.2742,
    website: "https://www.bishops.com",
    studentTeacherRatio: 8.9
  },
  {
    id: 128,
    name: "Point Loma High School",
    address: "2335 Chatsworth Blvd, San Diego, CA 92106",
    lat: 32.7306,
    lng: -117.2194,
    website: "https://www.pointlomahs.org",
    studentTeacherRatio: 24.5
  },
  {
    id: 129,
    name: "Mission Bay High School",
    address: "2475 Grand Ave, San Diego, CA 92109",
    lat: 32.7953,
    lng: -117.2383,
    website: "https://www.missionbayhs.org",
    studentTeacherRatio: 26.3
  },
  {
    id: 130,
    name: "Patrick Henry High School",
    address: "6702 Wandermere Dr, San Diego, CA 92120",
    lat: 32.8014,
    lng: -117.0589,
    website: "https://www.patrickhenryhs.com",
    studentTeacherRatio: 25.8
  },
  {
    id: 131,
    name: "Scripps Ranch High School",
    address: "10410 Treena St, San Diego, CA 92131",
    lat: 32.9222,
    lng: -117.1194,
    website: "https://www.scrippsranchhs.org",
    studentTeacherRatio: 22.9
  },
  {
    id: 132,
    name: "Poway High School",
    address: "15500 Espola Rd, Poway, CA 92064",
    lat: 32.9628,
    lng: -117.0364,
    website: "https://www.powayusd.com/phs",
    studentTeacherRatio: 21.6
  },
  {
    id: 133,
    name: "Rancho Bernardo High School",
    address: "13010 Paseo Lucido, San Diego, CA 92128",
    lat: 33.0253,
    lng: -117.0697,
    website: "https://www.rbhs.powayusd.com",
    studentTeacherRatio: 23.4
  },
  {
    id: 134,
    name: "Westview High School",
    address: "13500 Camino Del Sur, San Diego, CA 92129",
    lat: 32.9847,
    lng: -117.1042,
    website: "https://www.westviewhigh.com",
    studentTeacherRatio: 24.1
  },
  {
    id: 135,
    name: "Mt. Carmel High School",
    address: "9550 Carmel Mountain Rd, San Diego, CA 92129",
    lat: 32.9594,
    lng: -117.1342,
    website: "https://www.mtcarmelhs.com",
    studentTeacherRatio: 22.7
  },
  {
    id: 136,
    name: "Del Norte High School",
    address: "16601 Nighthawk Ln, San Diego, CA 92127",
    lat: 33.0236,
    lng: -117.1131,
    website: "https://www.delnorte.powayusd.com",
    studentTeacherRatio: 25.2
  },
  {
    id: 137,
    name: "Cathedral Catholic High School",
    address: "5555 Del Mar Heights Rd, San Diego, CA 92130",
    lat: 32.9417,
    lng: -117.2306,
    website: "https://www.cathedralcatholic.org",
    studentTeacherRatio: 12.3
  },
  {
    id: 138,
    name: "Coronado High School",
    address: "650 D Ave, Coronado, CA 92118",
    lat: 32.6886,
    lng: -117.1714,
    website: "https://www.coronadousd.net/chs",
    studentTeacherRatio: 18.6
  },
  {
    id: 139,
    name: "Carlsbad High School",
    address: "3557 Monroe St, Carlsbad, CA 92008",
    lat: 33.1453,
    lng: -117.3244,
    website: "https://www.chs-cusd.org",
    studentTeacherRatio: 20.8
  },
  {
    id: 140,
    name: "Sage Creek High School",
    address: "3900 Cannon Rd, Carlsbad, CA 92008",
    lat: 33.0864,
    lng: -117.2783,
    website: "https://www.schs-cusd.org",
    studentTeacherRatio: 24.6
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
