<template>
  <div id="app">
    <header class="app-header">
      <h1><span class="header-icon">🏫</span>School Search by Class Size</h1>

      <div class="state-selector">
        <label for="area-select">Area:</label>
        <select
          id="area-select"
          v-model="selectedArea"
          @change="onAreaChange"
        >
          <option
            v-for="area in availableAreas"
            :key="area"
            :value="area"
          >
            {{ getAreaName(area) }}
          </option>
        </select>
      </div>
    </header>

    <div class="app-content">
      <SchoolList
        :selectedSchools="selectedSchools"
        :totalSchoolsInState="filteredSchools.length"
        @remove-school="removeSchool"
        @clear-list="clearList"
        @generate-real-estate-search="generateRealEstateSearch"
      />

      <MapView
        :schools="filteredSchools"
        :selectedSchoolIds="selectedSchoolIds"
        :selectedArea="selectedArea"
        @toggle-school="toggleSchool"
      />
    </div>
  </div>
</template>

<script>
import MapView from './components/MapView.vue'
import SchoolList from './components/SchoolList.vue'
import { schools, getAvailableAreas, getAreaFromAddress, AREA_NAMES } from './data/schools.js'

const STORAGE_KEY = 'school-list-selected-schools'
const AREA_STORAGE_KEY = 'school-list-selected-area'

export default {
  name: 'App',

  components: {
    MapView,
    SchoolList
  },

  data() {
    return {
      allSchools: schools,
      selectedSchools: [],
      selectedArea: 'chicago',
      previousArea: 'chicago',
      availableAreas: getAvailableAreas()
    }
  },

  computed: {
    selectedSchoolIds() {
      return this.selectedSchools.map(school => school.id)
    },

    filteredSchools() {
      if (!this.selectedArea) return this.allSchools
      return this.allSchools.filter(school => {
        const area = getAreaFromAddress(school.address)
        return area === this.selectedArea
      })
    }
  },

  methods: {
    toggleSchool(school) {
      const index = this.selectedSchools.findIndex(s => s.id === school.id)

      if (index === -1) {
        // Add school to selection
        this.selectedSchools.push(school)
      } else {
        // Remove school from selection
        this.selectedSchools.splice(index, 1)
      }
    },

    removeSchool(schoolId) {
      const index = this.selectedSchools.findIndex(s => s.id === schoolId)
      if (index !== -1) {
        this.selectedSchools.splice(index, 1)
      }
    },

    clearList() {
      this.selectedSchools = []
    },

    saveList() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.selectedSchoolIds))
        alert('School list saved successfully!')
      } catch (error) {
        console.error('Error saving to localStorage:', error)
        alert('Failed to save school list. Please try again.')
      }
    },

    loadList() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
          const savedIds = JSON.parse(saved)
          this.selectedSchools = this.allSchools.filter(school =>
            savedIds.includes(school.id)
          )
        }
      } catch (error) {
        console.error('Error loading from localStorage:', error)
      }
    },

    generateRealEstateSearch() {
      if (this.selectedSchools.length === 0) {
        alert('Please select at least one school first.')
        return
      }

      // This will be handled in SchoolList component
      // Just emit the event
    },

    getAreaName(areaCode) {
      return AREA_NAMES[areaCode] || areaCode
    },

    onAreaChange() {
      // If there are selected schools, confirm before changing area
      if (this.selectedSchools.length > 0) {
        const confirmed = window.confirm(
          `You have ${this.selectedSchools.length} school${this.selectedSchools.length !== 1 ? 's' : ''} in your list. Changing areas will clear your list. Continue?`
        )

        if (!confirmed) {
          // Revert to previous area
          this.selectedArea = this.previousArea
          return
        }

        // Clear selected schools if confirmed
        this.selectedSchools = []
      }

      // Update previous area and save to localStorage
      this.previousArea = this.selectedArea
      try {
        localStorage.setItem(AREA_STORAGE_KEY, this.selectedArea)
      } catch (error) {
        console.error('Error saving area to localStorage:', error)
      }
    },

    async detectUserArea() {
      try {
        // Try to get user's location from IP
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()

        if (data.region_code) {
          // Check if user is near Chicago area (IL) or LA area (CA)
          let area = 'chicago' // Default to Chicago
          if (data.region_code === 'CA') {
            area = 'la'
          } else if (data.region_code === 'IL') {
            area = 'chicago'
          }

          this.selectedArea = area
          this.previousArea = area
          localStorage.setItem(AREA_STORAGE_KEY, this.selectedArea)
        }
      } catch (error) {
        console.error('Error detecting user area:', error)
        // Fall back to default (Chicago)
      }
    },

    loadArea() {
      try {
        const saved = localStorage.getItem(AREA_STORAGE_KEY)
        if (saved && AREA_NAMES[saved]) {
          // Accept any valid metro area
          this.selectedArea = saved
          this.previousArea = saved
        } else {
          // If no saved area, detect from location
          this.detectUserArea()
        }
      } catch (error) {
        console.error('Error loading area from localStorage:', error)
      }
    }
  },

  mounted() {
    // Load saved area first
    this.loadArea()
    // Load saved list on app start
    this.loadList()
  },

  watch: {
    selectedSchools: {
      handler() {
        // Auto-save to localStorage whenever the list changes
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.selectedSchoolIds))
        } catch (error) {
          console.error('Error auto-saving to localStorage:', error)
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
// Global styles are imported in main.js
// Component-specific styles would go here if needed
</style>
