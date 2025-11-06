<template>
  <div class="map-container">
    <div id="map"></div>

    <!-- School List Dropdown -->
    <div class="school-dropdown" :class="{ collapsed: isDropdownCollapsed }">
      <div class="dropdown-header" @click="toggleDropdown">
        <span class="dropdown-title">All Schools ({{ schools.length }})</span>
        <span class="dropdown-toggle">{{ isDropdownCollapsed ? '▼' : '▲' }}</span>
      </div>
      <div class="dropdown-content" v-if="!isDropdownCollapsed">
        <div
          v-for="school in sortedSchools"
          :key="school.id"
          class="dropdown-school-item"
          @click="focusOnSchool(school)"
          :title="`Click to view ${school.name}`"
        >
          <div
            class="school-color-indicator"
            :class="getColorClass(school.studentTeacherRatio)"
          ></div>
          <div class="school-info">
            <div class="school-name-small">{{ school.name }}</div>
            <div class="school-ratio-small">{{ school.studentTeacherRatio }}:1</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Legend -->
    <div class="map-legend">
      <div class="legend-title">Class Size Ratio</div>
      <div class="legend-item">
        <div class="legend-color excellent"></div>
        <div class="legend-label">Excellent (&lt; 15:1)</div>
      </div>
      <div class="legend-item">
        <div class="legend-color good"></div>
        <div class="legend-label">Good (15-22:1)</div>
      </div>
      <div class="legend-item">
        <div class="legend-color high"></div>
        <div class="legend-label">High (&gt; 22:1)</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getColorByRatio, getCategoryLabel, METRO_AREAS } from '../data/schools.js'

export default {
  name: 'MapView',

  props: {
    schools: {
      type: Array,
      required: true
    },
    selectedSchoolIds: {
      type: Array,
      required: true
    },
    selectedState: {
      type: String,
      required: true
    }
  },

  emits: ['toggle-school'],

  data() {
    return {
      map: null,
      markers: {},
      isDropdownCollapsed: false
    }
  },

  computed: {
    sortedSchools() {
      // Sort schools by student-teacher ratio (best to worst)
      return [...this.schools].sort((a, b) => a.studentTeacherRatio - b.studentTeacherRatio)
    }
  },

  mounted() {
    this.initMap()
    this.addSchoolMarkers()
  },

  methods: {
    initMap() {
      // Get metro area config for selected state, default to Chicago
      const metroConfig = METRO_AREAS[this.selectedState] || METRO_AREAS['IL']

      // Initialize Leaflet map centered on metro area
      this.map = L.map('map').setView(metroConfig.center, metroConfig.zoom)

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(this.map)
    },

    recenterMap() {
      if (!this.map) return

      const metroConfig = METRO_AREAS[this.selectedState] || METRO_AREAS['IL']
      this.map.setView(metroConfig.center, metroConfig.zoom, {
        animate: true,
        duration: 1
      })
    },

    addSchoolMarkers() {
      this.schools.forEach(school => {
        const marker = this.createMarker(school)
        this.markers[school.id] = marker
        marker.addTo(this.map)
      })
    },

    createMarker(school) {
      const color = getColorByRatio(school.studentTeacherRatio)
      const isSelected = this.selectedSchoolIds.includes(school.id)

      let marker

      if (isSelected) {
        // Create custom icon with green checkmark for selected schools
        const icon = L.divIcon({
          className: 'custom-marker-icon',
          html: `
            <div class="marker-selected">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
                <path d="M8 12l2.5 2.5 5.5-5.5" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          `,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -12]
        })

        marker = L.marker([school.lat, school.lng], { icon })
      } else {
        // Create custom circle marker for unselected schools
        const markerColor = this.getMarkerColor(color)

        marker = L.circleMarker([school.lat, school.lng], {
          radius: 10,
          fillColor: markerColor,
          color: '#ffffff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8
        })
      }

      // Create popup content with checkbox
      const popupContent = this.createPopupContent(school, isSelected)

      // Bind popup
      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'school-popup'
      })

      // Update popup when opened to ensure checkbox state is current
      marker.on('popupopen', () => {
        const currentlySelected = this.selectedSchoolIds.includes(school.id)
        const checkbox = document.getElementById(`school-checkbox-${school.id}`)
        const label = document.querySelector(`label[for="school-checkbox-${school.id}"]`)

        if (checkbox) {
          checkbox.checked = currentlySelected
        }
        if (label) {
          label.textContent = currentlySelected ? 'Remove from list' : 'Add to list'
        }
      })

      // Update marker appearance when popup closes (if selection state changed)
      marker.on('popupclose', () => {
        const currentlySelected = this.selectedSchoolIds.includes(school.id)
        if (currentlySelected !== isSelected) {
          // Selection state changed while popup was open, update the marker
          setTimeout(() => {
            this.updateMarker(school.id)
          }, 100)
        }
      })

      return marker
    },

    createPopupContent(school, isSelected) {
      const color = getColorByRatio(school.studentTeacherRatio)
      const categoryClass = color === 'green' ? 'excellent' : color === 'yellow' ? 'good' : 'high'
      const categoryLabel = getCategoryLabel(school.studentTeacherRatio)

      return `
        <div class="school-tooltip">
          <div class="school-name">${school.name}</div>
          <div class="school-address">${school.address}</div>
          <div class="school-ratio">
            <span class="ratio-badge ${categoryClass}">
              ${school.studentTeacherRatio}:1
            </span>
            <span>${categoryLabel}</span>
          </div>
          <div class="school-website">
            <a href="${school.website}" target="_blank" rel="noopener noreferrer">
              Visit website
            </a>
          </div>
          <div class="school-checkbox">
            <input
              type="checkbox"
              id="school-checkbox-${school.id}"
              ${isSelected ? 'checked' : ''}
              onclick="event.stopPropagation(); window.toggleSchool(${school.id})"
            />
            <label
              for="school-checkbox-${school.id}"
              onclick="event.preventDefault(); window.toggleSchool(${school.id})"
            >
              ${isSelected ? 'Remove from list' : 'Add to list'}
            </label>
          </div>
        </div>
      `
    },

    getMarkerColor(color) {
      const colors = {
        green: '#22c55e',
        yellow: '#eab308',
        red: '#ef4444'
      }
      return colors[color] || colors.green
    },

    updateMarker(schoolId) {
      const school = this.schools.find(s => s.id === schoolId)
      if (!school) return

      const marker = this.markers[schoolId]
      if (!marker) return

      // Remove old marker
      marker.remove()

      // Create new marker with updated state
      const newMarker = this.createMarker(school)
      this.markers[schoolId] = newMarker
      newMarker.addTo(this.map)

      // Reopen popup if it was open
      if (marker.isPopupOpen()) {
        newMarker.openPopup()
      }
    },

    setupGlobalToggleHandler() {
      // Create a global function for toggling schools from popup checkboxes
      window.toggleSchool = (schoolId) => {
        const school = this.schools.find(s => s.id === schoolId)
        if (school) {
          // Emit the toggle event
          this.$emit('toggle-school', school)

          // Immediately update the checkbox and label in the popup
          this.$nextTick(() => {
            const isNowSelected = this.selectedSchoolIds.includes(schoolId)
            const checkbox = document.getElementById(`school-checkbox-${schoolId}`)
            const label = document.querySelector(`label[for="school-checkbox-${schoolId}"]`)

            if (checkbox) {
              checkbox.checked = isNowSelected
            }
            if (label) {
              label.textContent = isNowSelected ? 'Remove from list' : 'Add to list'
            }
          })
        }
      }
    },

    toggleDropdown() {
      this.isDropdownCollapsed = !this.isDropdownCollapsed
    },

    focusOnSchool(school) {
      if (!this.map || !school) return

      const marker = this.markers[school.id]
      if (!marker) return

      // Close any open popups first
      this.map.closePopup()

      // Center map on school and zoom in
      this.map.setView([school.lat, school.lng], 14, {
        animate: true,
        duration: 0.5
      })

      // Wait for the map animation to complete before opening popup
      const openPopup = () => {
        if (marker && this.map) {
          marker.openPopup()
        }
        this.map.off('moveend', openPopup)
      }

      this.map.once('moveend', openPopup)
    },

    getColorClass(ratio) {
      const color = getColorByRatio(ratio)
      if (color === 'green') return 'excellent'
      if (color === 'yellow') return 'good'
      return 'high'
    }
  },

  watch: {
    selectedSchoolIds: {
      handler(newIds, oldIds) {
        // Find which schools changed
        if (oldIds) {
          const added = newIds.filter(id => !oldIds.includes(id))
          const removed = oldIds.filter(id => !newIds.includes(id))

          // Update markers for changed schools, but not if their popup is currently open
          // (those will be updated when the popup closes)
          ;[...added, ...removed].forEach(schoolId => {
            const marker = this.markers[schoolId]
            if (marker && !marker.isPopupOpen()) {
              this.updateMarker(schoolId)
            }
          })
        }
      },
      deep: true
    },

    selectedState() {
      // Re-center map when state changes
      this.recenterMap()
    },

    schools() {
      // Re-add all markers when schools list changes (state filter)
      // Remove all existing markers
      Object.values(this.markers).forEach(marker => {
        marker.remove()
      })
      this.markers = {}

      // Add new markers
      this.addSchoolMarkers()
    }
  },

  beforeMount() {
    this.setupGlobalToggleHandler()
  },

  beforeUnmount() {
    // Clean up
    if (this.map) {
      this.map.remove()
    }
    delete window.toggleSchool
  }
}
</script>

<style lang="scss" scoped>
// Custom marker styles (not scoped since Leaflet injects outside component)
:global(.custom-marker-icon) {
  background: transparent !important;
  border: none !important;

  .marker-selected {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;

    svg {
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
  }
}

// School dropdown styles
.school-dropdown {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-width: 280px;
  min-width: 220px;

  &.collapsed {
    .dropdown-content {
      display: none;
    }
  }

  .dropdown-header {
    padding: 10px 12px;
    background-color: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    &:hover {
      background-color: #f3f4f6;
    }

    .dropdown-title {
      font-size: 11px;
      font-weight: 600;
      color: #1f2937;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .dropdown-toggle {
      font-size: 10px;
      color: #6b7280;
    }
  }

  .dropdown-content {
    max-height: 400px;
    overflow-y: auto;
    border-radius: 0 0 8px 8px;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f9fafb;
    }

    &::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;

      &:hover {
        background: #9ca3af;
      }
    }
  }

  .dropdown-school-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-bottom: 1px solid #f3f4f6;
    cursor: pointer;
    transition: background-color 0.15s;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #f9fafb;
    }

    .school-color-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;

      &.excellent {
        background-color: #22c55e;
      }

      &.good {
        background-color: #eab308;
      }

      &.high {
        background-color: #ef4444;
      }
    }

    .school-info {
      flex: 1;
      min-width: 0;

      .school-name-small {
        font-size: 11px;
        font-weight: 500;
        color: #1f2937;
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .school-ratio-small {
        font-size: 10px;
        color: #6b7280;
        line-height: 1.3;
        margin-top: 2px;
      }
    }
  }
}

// Adjust legend position to not overlap with dropdown
.map-legend {
  bottom: 20px;
  right: 10px;
}

// Mobile responsiveness
@media (max-width: 768px) {
  .school-dropdown {
    display: none;
  }
}
</style>
