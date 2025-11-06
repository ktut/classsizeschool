# School Data Fetching Scripts

This directory contains scripts for fetching real school data from various sources to populate the application with up-to-date information.

## Overview

The application uses **real school data** from multiple official sources instead of manually entered mock data. Currently supports:
- Illinois: 200 schools from Chicago Public Schools
- California: 300 schools from California Department of Education

## Data Sources

### Chicago Public Schools (Illinois)
- **Source**: [Chicago Data Portal](https://data.cityofchicago.org/)
- **API Endpoint**: `https://data.cityofchicago.org/resource/8i6r-et8s.json`
- **Data Included**:
  - School names
  - Complete addresses with coordinates (latitude/longitude)
  - Real website URLs
  - School types and categories
  - Student enrollment data

### California Department of Education
- **Source**: [California Open Data Portal](https://data.ca.gov/)
- **API Endpoint**: ArcGIS REST API for SchoolSites2223
- **Data Included**:
  - School names and locations
  - Complete addresses with coordinates
  - School status and type
  - Charter and magnet designations
  - Enrollment and demographic data

### Student-Teacher Ratios
⚠️ **Important Note**: Student-teacher ratios are currently **estimated** based on school characteristics. To get real ratios:

**For Illinois Schools:**
1. **Download ISBE Data**: Visit [Illinois State Board of Education - Report Card Data Library](https://www.isbe.net/ilreportcarddata)
2. **Look for Class Size Reports**: The Class Size Report contains teacher counts and pupil-teacher ratios
3. **Match with School IDs**: Cross-reference the data using school IDs to update ratios

**For California Schools:**
1. **Download CDE Data**: Visit [California Department of Education - Downloadable Data](https://www.cde.ca.gov/ds/ad/downloadabledata.asp)
2. **Look for Staff Data**: Teacher assignment and class size data
3. **Match with CDS Codes**: Use the CDSCode field to cross-reference data

## Usage

### Fetching Fresh Data

The application provides several npm scripts for fetching school data:

#### Fetch All Schools (Recommended)
```bash
npm run fetch-schools
# or
npm run fetch-schools:all
```
This fetches schools from **all sources** (Illinois + California) and generates a combined dataset. This is the recommended approach for updating all data at once.

#### Fetch Illinois Schools Only
```bash
npm run fetch-schools:illinois
```
Fetches up to 200 schools from the Chicago Public Schools Open Data Portal.

#### Fetch California Schools Only
```bash
npm run fetch-schools:california
```
Fetches up to 300 schools from the California Open Data Portal (when run directly, appends to existing data).

### What These Scripts Do

Each fetch script will:
1. Fetch school data from the respective official data portal
2. Transform the data into the format needed by the application
3. Generate/update the `src/data/schools.js` file with real data
4. Preserve all helper functions and state configurations
5. Show a summary of fetched schools

### Customizing the Fetch

You can customize each state's fetch script:

**Illinois ([scripts/fetch-schools-illinois.js](fetch-schools-illinois.js)):**
- **Change the number of schools**: Modify the `LIMIT` constant (default: 200)
- **Filter schools**: Add filtering logic in the `transformSchoolData` function
- **Add more data fields**: Extract additional fields from the CPS API response

**California ([scripts/fetch-schools-california.js](fetch-schools-california.js)):**
- **Change the number of schools**: Modify the `LIMIT` constant (default: 300)
- **Filter by region**: Add filtering logic using fields like `CountyName`, `Region`, etc.
- **Extract additional fields**: Access enrollment, demographics, charter status, etc.

### Example: Fetching More Schools

```javascript
// In scripts/fetch-schools-illinois.js or fetch-schools-california.js, change:
const LIMIT = 200;

// To:
const LIMIT = 1000;  // Fetch 1000 schools instead
```

## Data Structure

Each school in the generated data has the following structure:

```javascript
{
  id: 1,                              // Sequential ID
  name: "STOCK",                      // School name
  address: "7507 W BIRCHWOOD AVE, Chicago, IL 60631",  // Note: Uses 2-letter state code
  lat: 42.016892,                     // Latitude
  lng: -87.814195,                    // Longitude
  website: "http://www.stock.cps.edu",
  studentTeacherRatio: 23.7           // Currently estimated
}
```

**Important**: Addresses must use 2-letter state codes (e.g., "IL", "CA") rather than full state names for proper state detection.

## Available Data Fields

### Illinois (CPS) API Fields

The Chicago Public Schools API provides many additional fields that could be integrated:

- `school_type` - Type of school (Neighborhood, Magnet, Charter, etc.)
- `primary_category` - ES (Elementary), MS (Middle), HS (High School)
- `student_count_total` - Total enrollment
- `grades_offered` - Grade levels offered
- `ada_accessible` - Accessibility information
- `school_hours` - Operating hours
- `administrator` - Principal name
- `phone` / `fax` - Contact information

### California API Fields

The California ArcGIS API provides comprehensive school data including:

- `SchoolType` - Type of school (K-12, Elementary, etc.)
- `SchoolLevel` - School level (Elementary-High, etc.)
- `Charter` - Charter school indicator (Y/N)
- `Magnet` - Magnet school indicator (Y/N)
- `Virtual` - Virtual school indicator (Y/N)
- `EnrollTotal` - Total enrollment
- `GradeLow` / `GradeHigh` - Grade range
- `CountyName` / `DistrictName` - Location information
- `Latitude` / `Longitude` - Separate coordinate fields
- Demographics: `AAcount`, `HIcount`, `WHcount`, etc. (enrollment by ethnicity)
- Special populations: `ELcount` (English Learners), `SWDcount` (Students with Disabilities)
- Economic indicators: `FRPMcount` (Free/Reduced Price Meals)

See the sample output in the fetch scripts for the complete list of available fields.

## Future Enhancements

### Adding Real Student-Teacher Ratios

To add real student-teacher ratio data:

1. **Download ISBE data files** from https://www.isbe.net/ilreportcarddata
2. **Parse the CSV/Excel files** containing teacher and student counts
3. **Match by school ID** or name to the CPS data
4. **Update the `extractStudentTeacherRatio` function** to use real data instead of estimates

Example implementation:

```javascript
// Load ISBE data (would need to be downloaded first)
import fs from 'fs';
import { parse } from 'csv-parse/sync';

const isbeData = parse(fs.readFileSync('path/to/isbe-data.csv'), {
  columns: true
});

function extractStudentTeacherRatio(school) {
  // Look up real ratio from ISBE data
  const isbeSchool = isbeData.find(s => s.school_id === school.school_id);
  if (isbeSchool && isbeSchool.student_teacher_ratio) {
    return parseFloat(isbeSchool.student_teacher_ratio);
  }

  // Fall back to estimate if not found
  return generateRealisticRatio(school);
}
```

### Expanding to More States

To add schools from additional states, follow the pattern established by Illinois and California:

1. **Find the data source**: Locate the state's open data portal or education department API
2. **Create a fetch script**: Create `fetch-schools-[state].js` following the existing patterns
3. **Transform the data**: Ensure addresses use 2-letter state codes and match the schema
4. **Update the combined script**: Add the new state to `fetch-schools-all.js`
5. **Update package.json**: Add an npm script for the new state

Example state data portals:
- Texas: [Texas Education Agency Data Downloads](https://tea.texas.gov/reports-and-data)
- New York: [NY State Education Data](https://data.nysed.gov/)
- Florida: [Florida Department of Education](https://www.fldoe.org/accountability/data-sys/)

### Automated Updates

You could set up automated data updates:

1. Use GitHub Actions or a cron job to run the fetch script periodically
2. Commit and push the updated `schools.js` file
3. Deploy the updated data automatically

## Troubleshooting

### "No data fetched"
- Check your internet connection
- Verify the API endpoint is still valid: https://data.cityofchicago.org/resource/8i6r-et8s.json
- The Chicago Data Portal might be temporarily down

### "Missing coordinates"
- Some schools might not have location data in the API
- These schools are automatically skipped (see console warnings)

### "Website URLs don't work"
- Some schools might have outdated or incorrect URLs in the CPS database
- The script attempts to construct valid URLs, but some manual cleanup might be needed

## Resources

- [Chicago Data Portal](https://data.cityofchicago.org/)
- [CPS Open Data](https://www.cps.edu/about/district-data/)
- [CPS Public API](https://api.cps.edu/)
- [ISBE Report Card Data](https://www.isbe.net/ilreportcarddata)
- [Illinois Report Card](https://www.illinoisreportcard.com/)

## Contributing

Feel free to improve the data fetching scripts by:
- Adding more data sources
- Improving data quality checks
- Adding data validation
- Implementing real student-teacher ratio fetching
- Expanding to cover more geographic areas
