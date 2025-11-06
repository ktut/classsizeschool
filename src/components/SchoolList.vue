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
      <div v-if="selectedSchools.length === 0" class="empty-state">
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
    }
  },

  emits: ['remove-school', 'generate-real-estate-search', 'clear-list'],

  data() {
    return {
      showRealEstateLinks: false
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
      if (color === 'green') return 'excellent'
      if (color === 'yellow') return 'good'
      return 'high'
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
</style>
