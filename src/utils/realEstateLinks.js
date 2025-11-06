// Utility functions for generating real estate search URLs

/**
 * Calculate bounding box from array of schools
 * @param {Array} schools - Array of school objects with lat/lng properties
 * @returns {Object} Bounding box with minLat, maxLat, minLng, maxLng
 */
export function calculateBounds(schools) {
  if (!schools || schools.length === 0) {
    return null;
  }

  let minLat = schools[0].lat;
  let maxLat = schools[0].lat;
  let minLng = schools[0].lng;
  let maxLng = schools[0].lng;

  schools.forEach(school => {
    if (school.lat < minLat) minLat = school.lat;
    if (school.lat > maxLat) maxLat = school.lat;
    if (school.lng < minLng) minLng = school.lng;
    if (school.lng > maxLng) maxLng = school.lng;
  });

  // Add a small padding (about 0.05 degrees ~= 3-5 miles)
  const padding = 0.05;

  return {
    minLat: minLat - padding,
    maxLat: maxLat + padding,
    minLng: minLng - padding,
    maxLng: maxLng + padding
  };
}

/**
 * Generate Redfin search URL for given bounds
 * @param {Object} bounds - Bounding box object
 * @returns {string} Redfin search URL
 */
export function generateRedfinUrl(bounds) {
  if (!bounds) return null;

  // Redfin uses a simple map bounds format
  // The viewport parameter format is: north,east,south,west
  const viewport = `${bounds.maxLat},${bounds.maxLng},${bounds.minLat},${bounds.minLng}`;

  // Use a general Chicago area search with custom viewport
  return `https://www.redfin.com/city/29470/IL/Chicago?viewport=${viewport}&max_price=2000000&min_price=0`;
}

/**
 * Generate Zillow search URL for given bounds
 * @param {Object} bounds - Bounding box object
 * @returns {string} Zillow search URL
 */
export function generateZillowUrl(bounds) {
  if (!bounds) return null;

  // Zillow uses a searchQueryState JSON object
  const searchQuery = {
    mapBounds: {
      west: bounds.minLng,
      east: bounds.maxLng,
      south: bounds.minLat,
      north: bounds.maxLat
    },
    isMapVisible: true,
    filterState: {
      sortSelection: {
        value: "days"
      }
    },
    isListVisible: true
  };

  const encodedQuery = encodeURIComponent(JSON.stringify(searchQuery));
  return `https://www.zillow.com/homes/for_sale/?searchQueryState=${encodedQuery}`;
}

/**
 * Generate Compass search URL for given bounds
 * @param {Object} bounds - Bounding box object
 * @returns {string} Compass search URL
 */
export function generateCompassUrl(bounds) {
  if (!bounds) return null;

  // Compass uses a bounding box with ne_lat, ne_lng, sw_lat, sw_lng parameters
  const centerLat = (bounds.minLat + bounds.maxLat) / 2;
  const centerLng = (bounds.minLng + bounds.maxLng) / 2;

  const searchParams = new URLSearchParams({
    'ne_lat': bounds.maxLat.toString(),
    'ne_lng': bounds.maxLng.toString(),
    'sw_lat': bounds.minLat.toString(),
    'sw_lng': bounds.minLng.toString(),
    'center_lat': centerLat.toString(),
    'center_lng': centerLng.toString()
  });

  return `https://www.compass.com/for-sale/chicago-il/?${searchParams.toString()}`;
}

/**
 * Generate all real estate URLs
 * @param {Array} schools - Array of selected schools
 * @returns {Object} Object with redfin, zillow, and compass URLs
 */
export function generateAllRealEstateUrls(schools) {
  const bounds = calculateBounds(schools);

  if (!bounds) {
    return {
      redfin: null,
      zillow: null,
      compass: null
    };
  }

  return {
    redfin: generateRedfinUrl(bounds),
    zillow: generateZillowUrl(bounds),
    compass: generateCompassUrl(bounds)
  };
}
