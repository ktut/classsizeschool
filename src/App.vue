<template>
  <div id="app">
    <header class="app-header">
      <h1><span class="header-icon">🏫</span>School Search by Class Size</h1>
    </header>

    <div class="app-content">
      <SchoolList
        :selectedSchools="selectedSchools"
        @remove-school="removeSchool"
        @clear-list="clearList"
        @generate-real-estate-search="generateRealEstateSearch"
      />

      <MapView
        :schools="allSchools"
        :selectedSchoolIds="selectedSchoolIds"
        @toggle-school="toggleSchool"
      />
    </div>
  </div>
</template>

<script>
import MapView from './components/MapView.vue'
import SchoolList from './components/SchoolList.vue'
import { schools } from './data/schools.js'

const STORAGE_KEY = 'school-list-selected-schools'

export default {
  name: 'App',

  components: {
    MapView,
    SchoolList
  },

  data() {
    return {
      allSchools: schools,
      selectedSchools: []
    }
  },

  computed: {
    selectedSchoolIds() {
      return this.selectedSchools.map(school => school.id)
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
    }
  },

  mounted() {
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
