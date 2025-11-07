# School Search by Class Size

A Vue 3 web application for finding and comparing K-12 schools based on student-teacher class size ratios. Search schools in Greater Chicagoland Area and LA Area and generate real estate searches around your selected schools.

## Features

- **Area Selector**: Browse schools in Greater Chicagoland Area and LA Area with automatic geolocation detection
- **Real School Data**: Pre-loaded data from official sources (700 total schools)
  - No external API dependencies during runtime - all data is fetched and cached locally
  - Greater Chicagoland Area: 200 real schools from Chicago Public Schools Open Data Portal
  - LA Area: 500 real schools from California Department of Education (LA, Orange, Riverside, San Bernardino counties)
  - Data includes real addresses, coordinates, and website URLs
  - Student-teacher ratios are currently estimated (see [Data Fetching Guide](scripts/README.md) for getting real ratios)
- **Interactive Map**: Pan and zoom to explore school locations with automatic centering based on selected metro area
- **Color-Coded Markers**: Schools are color-coded based on student-teacher ratios:
  - 🟢 Dark Green: Excellent (< 15:1 ratio) with animated pulsing border
  - 🟢 Green: Good (15-22:1 ratio)
  - 🟡 Yellow: High (22-30:1 ratio)
  - 🔴 Red: Very High (> 30:1 ratio)
- **Visual Selection Indicators**: Selected schools display green checkmarks instead of colored circles
- **School Information**: Click any marker to view:
  - School name and address
  - Student-teacher ratio with category label
  - Website link
  - Add/remove from list checkbox
- **Build Your List**: Add schools to your personal list via checkbox in the popup
- **Auto-Save**: Your school list automatically saves to browser localStorage
- **Clear All**: Quickly clear your entire school list with one click
- **Area Change Protection**: Confirmation dialog prevents accidental loss of your list when changing metro areas
- **Real Estate Search**: Generate search links for Redfin, Zillow, or Compass covering the area around your selected schools
- **Mobile Optimized**: Responsive design with compact view for mobile devices

## Tech Stack

- **Vue 3** (Options API)
- **SASS** for styling
- **LeafletJS** for interactive maps
- **Vite** for development and build tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
classsizeschool/
├── index.html                    # Entry HTML file with LeafletJS CDN links
├── package.json                  # Project dependencies
├── vite.config.js                # Vite configuration
├── scripts/
│   ├── fetch-schools-chicago.js  # Fetch Greater Chicagoland Area schools
│   ├── fetch-schools-la.js       # Fetch LA Area schools (Greater LA counties)
│   ├── fetch-schools-all.js      # Fetch and combine all metro areas
│   └── README.md                 # Data fetching documentation and guide
├── src/
│   ├── main.js             # Vue app entry point
│   ├── App.vue             # Main app container with area management
│   ├── components/
│   │   ├── MapView.vue     # Map component with LeafletJS markers and popups
│   │   └── SchoolList.vue  # Sidebar school list component
│   ├── data/
│   │   └── schools.js      # Real school data, helper functions, metro area configs
│   ├── styles/
│   │   ├── main.scss       # Main styles with responsive design
│   │   ├── _variables.scss # SASS variables
│   │   └── _map.scss       # Map-specific styles and popups
│   └── utils/
│       └── realEstateLinks.js  # Real estate URL generator for multiple platforms
```

## Usage

1. **Select Area**: Choose between Greater Chicagoland Area or LA Area from the dropdown selector (auto-detects your area on first visit)
2. **Browse Schools**: Pan and zoom the map to explore schools in the selected metro area
3. **View Details**: Click any school marker to see detailed information in a popup
4. **Add to List**: Check the box in the school popup to add it to your list
   - Selected schools display green checkmarks on the map
   - Your list auto-saves to browser storage
5. **Manage List**: View selected schools in the left sidebar
   - Click the × button to remove individual schools
   - Click "Clear All" to empty your entire list
6. **Real Estate Search**: Click "Generate Real Estate Search" to get links to property listings near your selected schools
   - Links open for Redfin, Zillow, and Compass
7. **Change Areas**: Select a different metro area from the dropdown
   - You'll be prompted to confirm if you have schools in your list

## Data Architecture

The application uses **real school data** that is fetched from official sources and cached locally in `src/data/schools.js`. Data is fetched at build time rather than runtime, providing:

- **Reliability**: No dependency on external APIs during app usage
- **Performance**: Instant loading with no network requests required
- **Authenticity**: Real school information from official government sources
- **Up-to-date**: Can be refreshed anytime by re-running the fetch script

### Current Data Coverage

- **Greater Chicagoland Area**: 200 real schools from Chicago Public Schools
  - Source: [Chicago Data Portal](https://data.cityofchicago.org/)
  - Includes: Real names, addresses, coordinates, and website URLs
  - Student-teacher ratios: Currently estimated

- **LA Area**: 500 real schools from Greater LA (LA, Orange, Riverside, San Bernardino counties)
  - Source: [California Open Data Portal](https://data.ca.gov/)
  - Includes: School names, locations, charter/magnet status, enrollment data
  - Student-teacher ratios: Currently estimated

### Fetching Fresh Data

To update the school data with the latest information:

```bash
# Fetch from all metro areas (Chicago + LA)
npm run fetch-schools

# Or fetch from specific metro areas
npm run fetch-schools:chicago
npm run fetch-schools:la
```

This fetches the latest data from official open data portals and updates `src/data/schools.js`.

For detailed information about data sources and customization, see the [Data Fetching Guide](scripts/README.md).

## Key Technical Decisions

### Why Build-Time Fetching Instead of Runtime APIs?

This application fetches school data at build time and caches it locally rather than querying external APIs at runtime for several important reasons:

1. **Reliability**: No dependency on external API availability during app usage
2. **Performance**: No network latency - schools load instantly
3. **Offline Capability**: Works without internet connection (after initial load)
4. **Data Quality**: Data is fetched from official government sources (Chicago Data Portal)
5. **Privacy**: No external data tracking or API calls beyond optional geolocation
6. **Flexibility**: Data can be refreshed anytime by running `npm run fetch-schools`

### Area Persistence

- Selected metro area is stored in localStorage and persists across sessions
- School selections are auto-saved to localStorage on every change
- Area changes with populated lists trigger confirmation dialogs to prevent accidental data loss

### Mobile-First Design

The application uses responsive CSS with a mobile breakpoint at 768px:
- Desktop: Side-by-side map and school list
- Mobile: Stacked layout with map on top, compact school list below

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- LocalStorage required for auto-save functionality
- Optional: IP-based geolocation for automatic metro area detection (uses ipapi.co)

## License

MIT

## Acknowledgments

- Maps powered by [LeafletJS](https://leafletjs.com/)
- Map data © [OpenStreetMap](https://www.openstreetmap.org/) contributors
- School data sourced from:
  - [Chicago Public Schools Open Data Portal](https://data.cityofchicago.org/)
  - [California Open Data Portal](https://data.ca.gov/)
