# School List by Class Size Search

A Vue 3 web application for finding and comparing K-12 schools in the Chicagoland area based on student-teacher class size ratios.

## Features

- **Interactive Map**: Minimalist map of Chicagoland showing K-12 school locations
- **Color-Coded Markers**: Schools are color-coded based on student-teacher ratios:
  - 🟢 Green: Excellent (< 15:1 ratio)
  - 🟡 Yellow: Good (15-22:1 ratio)
  - 🔴 Red: High (> 22:1 ratio)
- **School Information**: Click any marker to view:
  - School name
  - Address
  - Student-teacher ratio
  - Website link
- **Build Your List**: Add schools to your personal list via checkbox in the tooltip
- **Save Functionality**: Save your school list to browser localStorage
- **Real Estate Search**: Generate search links for Redfin, Zillow, or Compass covering the area around your selected schools

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
class-size-map/
├── index.html              # Entry HTML file with LeafletJS CDN links
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.js             # Vue app entry point
│   ├── App.vue             # Main app container
│   ├── components/
│   │   ├── MapView.vue     # Map component with LeafletJS
│   │   └── SchoolList.vue  # Sidebar school list component
│   ├── data/
│   │   └── schools.js      # Mock school data for Chicagoland
│   ├── styles/
│   │   ├── main.scss       # Main styles
│   │   ├── _variables.scss # SASS variables
│   │   └── _map.scss       # Map-specific styles
│   └── utils/
│       └── realEstateLinks.js  # Real estate URL generator
```

## Usage

1. **Browse Schools**: Pan and zoom the map to explore schools across Chicagoland
2. **View Details**: Click any school marker to see detailed information
3. **Add to List**: Check the box in the school tooltip to add it to your list
4. **Manage List**: View selected schools in the left sidebar
5. **Save List**: Click "Save List" to store your selections in browser storage
6. **Real Estate Search**: Click "Generate Real Estate Search" to get links to property listings near your selected schools

## Data

The app currently uses mock data for 15 schools across the Chicagoland area. To use real data:

1. Update `src/data/schools.js` with actual school data
2. Ensure each school has: `id`, `name`, `address`, `lat`, `lng`, `website`, `studentTeacherRatio`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- LocalStorage required for save functionality

## License

MIT

## Acknowledgments

- Maps powered by [LeafletJS](https://leafletjs.com/)
- Map data © [OpenStreetMap](https://www.openstreetmap.org/) contributors
