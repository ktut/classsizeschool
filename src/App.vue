<template>
  <div id="app">
    <header class="app-header">
      <h1><span class="header-icon">🏫</span>School Search by Class Size</h1>

      <div class="state-selector">
        <label for="state-select">State:</label>
        <select
          id="state-select"
          v-model="selectedState"
          @change="onStateChange"
        >
          <option
            v-for="state in availableStates"
            :key="state"
            :value="state"
          >
            {{ getStateName(state) }}
          </option>
        </select>
      </div>
    </header>

    <div class="app-content">
      <SchoolList
        :selectedSchools="selectedSchools"
        @remove-school="removeSchool"
        @clear-list="clearList"
        @generate-real-estate-search="generateRealEstateSearch"
      />

      <MapView
        :schools="filteredSchools"
        :selectedSchoolIds="selectedSchoolIds"
        :selectedState="selectedState"
        @toggle-school="toggleSchool"
      />
    </div>
  </div>
</template>

<script>
import MapView from './components/MapView.vue'
import SchoolList from './components/SchoolList.vue'
import { schools, getAvailableStates, getStateFromAddress, STATE_NAMES } from './data/schools.js'

const STORAGE_KEY = 'school-list-selected-schools'
const STATE_STORAGE_KEY = 'school-list-selected-state'

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
      selectedState: 'IL',
      availableStates: getAvailableStates()
    }
  },

  computed: {
    selectedSchoolIds() {
      return this.selectedSchools.map(school => school.id)
    },

    filteredSchools() {
      if (!this.selectedState) return this.allSchools
      return this.allSchools.filter(school => {
        const state = getStateFromAddress(school.address)
        return state === this.selectedState
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

    getStateName(stateCode) {
      return STATE_NAMES[stateCode] || stateCode
    },

    onStateChange() {
      // Save selected state to localStorage
      try {
        localStorage.setItem(STATE_STORAGE_KEY, this.selectedState)
      } catch (error) {
        console.error('Error saving state to localStorage:', error)
      }
    },

    async detectUserState() {
      try {
        // Try to get user's location from IP
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()

        if (data.region_code && this.availableStates.includes(data.region_code)) {
          this.selectedState = data.region_code
          localStorage.setItem(STATE_STORAGE_KEY, this.selectedState)
        }
      } catch (error) {
        console.error('Error detecting user state:', error)
        // Fall back to default (Illinois)
      }
    },

    loadState() {
      try {
        const saved = localStorage.getItem(STATE_STORAGE_KEY)
        if (saved && this.availableStates.includes(saved)) {
          this.selectedState = saved
        } else {
          // If no saved state, detect from location
          this.detectUserState()
        }
      } catch (error) {
        console.error('Error loading state from localStorage:', error)
      }
    }
  },

  mounted() {
    // Load saved state first
    this.loadState()
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
