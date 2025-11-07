<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="header-top">
        <h2>Your School List</h2>
        <button
          v-if="selectedSchools.length > 0"
          class="clear-btn"
          @click="$emit('clear-list')"
          title="Clear all schools"
        >
          Clear All
        </button>
      </div>
      <div class="subtitle">
        {{ selectedSchools.length }} school{{ selectedSchools.length !== 1 ? 's' : '' }} selected
      </div>
    </div>

    <div class="sidebar-content">
      <div v-if="totalSchoolsInState === 0" class="empty-state">
        <strong>No schools available in this area.</strong>
        <br><br>
        Currently showing cached data for Greater Chicagoland Area and LA Area only. Select one of those areas to see schools.
      </div>
      <div v-else-if="selectedSchools.length === 0" class="empty-state">
        Click on school markers on the map to add them to your list
      </div>

      <div v-else class="school-list">
        <div
          v-for="school in selectedSchools"
          :key="school.id"
          class="school-item"
        >
          <div class="school-item-header">
            <div class="school-item-name">{{ school.name }}</div>
            <button
              class="remove-btn"
              @click="$emit('remove-school', school.id)"
              title="Remove from list"
            >
              ×
            </button>
          </div>

          <div class="school-item-address">{{ school.address }}</div>

          <div :class="['school-item-ratio', getRatioClass(school.studentTeacherRatio)]">
            {{ school.studentTeacherRatio }}:1 ratio
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar-footer" v-if="selectedSchools.length > 0">
      <div class="real-estate-dropdown" v-if="showRealEstateLinks">
        <div class="dropdown-header">
          <div class="dropdown-title">Generate Real Estate Search:</div>
          <button
            class="close-dropdown-btn"
            @click="toggleRealEstateLinks"
            title="Close"
          >
            ×
          </button>
        </div>
        <a
          :href="realEstateUrls.redfin"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
        >
          Search on Redfin
        </a>
        <a
          :href="realEstateUrls.zillow"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
        >
          Search on Zillow
        </a>
        <a
          :href="realEstateUrls.compass"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
        >
          Search on Compass
        </a>
      </div>

      <button
        v-else
        class="btn btn-success"
        @click="toggleRealEstateLinks"
      >
        Generate Real Estate Search
      </button>
    </div>

    <div class="data-sources">
      <button @click="showSourcesModal = true" class="sources-link">
        Data Sources
      </button>
    </div>

    <!-- Data Sources Modal -->
    <div v-if="showSourcesModal" class="modal-overlay" @click="showSourcesModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Data Sources</h3>
          <button class="modal-close" @click="showSourcesModal = false">×</button>
        </div>
        <div class="modal-body">
          <div class="source-item">
            <h4>Greater Chicagoland Area</h4>
            <p>200 schools from Chicago Public Schools</p>
            <a href="https://data.cityofchicago.org/" target="_blank" rel="noopener noreferrer">
              Chicago Data Portal →
            </a>
          </div>
          <div class="source-item">
            <h4>LA Area</h4>
            <p>500 schools from Greater LA (LA, Orange, Riverside, San Bernardino counties)</p>
            <a href="https://data.ca.gov/" target="_blank" rel="noopener noreferrer">
              California Open Data Portal →
            </a>
          </div>
          <div class="source-note">
            <p><strong>Note:</strong> Student-teacher ratios are currently estimated. Real ratios can be obtained from the respective school districts or state departments of education.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getColorByRatio } from '../data/schools.js'
import { generateAllRealEstateUrls } from '../utils/realEstateLinks.js'

export default {
  name: 'SchoolList',

  props: {
    selectedSchools: {
      type: Array,
      required: true
    },
    totalSchoolsInState: {
      type: Number,
      default: 0
    }
  },

  emits: ['remove-school', 'generate-real-estate-search', 'clear-list'],

  data() {
    return {
      showRealEstateLinks: false,
      showSourcesModal: false
    }
  },

  computed: {
    realEstateUrls() {
      return generateAllRealEstateUrls(this.selectedSchools)
    }
  },

  methods: {
    getRatioClass(ratio) {
      const color = getColorByRatio(ratio)
      if (color === 'darkgreen') return 'excellent'
      if (color === 'green') return 'good'
      if (color === 'yellow') return 'high'
      return 'very-high'
    },

    toggleRealEstateLinks() {
      this.showRealEstateLinks = !this.showRealEstateLinks
    }
  },

  watch: {
    // Close real estate links when schools change
    selectedSchools() {
      this.showRealEstateLinks = false
    }
  }
}
</script>

<style lang="scss" scoped>
.real-estate-dropdown {
  .dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    .dropdown-title {
      font-size: 14px;
      font-weight: 600;
      color: $color-text;
    }

    .close-dropdown-btn {
      background: none;
      border: none;
      color: $color-text-light;
      cursor: pointer;
      padding: 0;
      font-size: 24px;
      line-height: 1;
      transition: color 0.2s;

      &:hover {
        color: $color-high;
      }
    }
  }
}

.data-sources {
  padding: $spacing-md $spacing-lg;
  border-top: 1px solid $color-border;
  background-color: $color-bg-secondary;
  text-align: center;

  .sources-link {
    background: none;
    border: none;
    color: $color-primary;
    text-decoration: none;
    font-size: $font-size-sm;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: $spacing-lg;
}

.modal-content {
  background: white;
  border-radius: $radius-lg;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: $shadow-lg;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-lg;
    border-bottom: 1px solid $color-border;

    h3 {
      margin: 0;
      font-size: $font-size-lg;
      color: $color-text;
    }

    .modal-close {
      background: none;
      border: none;
      font-size: 28px;
      color: $color-text-light;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      transition: color 0.2s;

      &:hover {
        color: $color-text;
      }
    }
  }

  .modal-body {
    padding: $spacing-lg;

    .source-item {
      margin-bottom: $spacing-lg;

      h4 {
        margin: 0 0 $spacing-xs 0;
        font-size: $font-size-md;
        color: $color-text;
      }

      p {
        margin: 0 0 $spacing-xs 0;
        font-size: $font-size-sm;
        color: $color-text-light;
      }

      a {
        color: $color-primary;
        text-decoration: none;
        font-size: $font-size-sm;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .source-note {
      margin-top: $spacing-lg;
      padding: $spacing-md;
      background-color: $color-bg-secondary;
      border-radius: $radius-sm;
      border-left: 3px solid $color-primary;

      p {
        margin: 0;
        font-size: $font-size-sm;
        color: $color-text;
      }
    }
  }
}

@media (max-width: $breakpoint-mobile) {
  .data-sources {
    padding: $spacing-sm $spacing-md;
  }
}
</style>
