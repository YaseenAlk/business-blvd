<template>
  <b-sidebar id="sidebar-variant" bg-variant="dark" text-variant="light" shadow v-model="visible" :visible="visible">
    <template #title>
      <h2 style="text-align: left; margin: 0"><b>{{business.name}}</b></h2>
    </template>
    <div class="sidebar-body">
      <map-sidebar-info-section :key="'info-' + business.businessId" :business="business" />
      <map-sidebar-hours-section :key="'hours-' + business.businessId" :business="business" />
      <map-sidebar-rating-section :key="'rating-' + business.businessId" :business="business" />
    </div>
    <template #footer>
      <div class="footer-container">
        <b-button class="footer-button" variant="primary" :to="business.internalURL"><b>See More</b></b-button>
      </div>
    </template>
  </b-sidebar>
</template>

<script>
import { eventBus } from '../../main'
import MapSidebarInfoSection from './MapSidebarInfoSection.vue';
import MapSidebarHoursSection from './MapSidebarHoursSection.vue';
import MapSidebarRatingSection from './MapSidebarRatingSection.vue';

export default {
  name: 'MapSidebar',
  created(){
    eventBus.$on('open-sidebar', (data) => {
      this.visible = true;
      this.business = data;
    });
  },
  data(){
    return {
      visible: false,
      business: {
        coordinates: {},
        hours: [],
        ratings: {
          safety: {},
          service: {},
        }
      }
    };
  },
  computed: {
    businessName() { return this.business.name || 'Business' }
  },
  components: {
    MapSidebarInfoSection,
    MapSidebarHoursSection,
    MapSidebarRatingSection
  }
}
</script>

<style>
.sidebar-body {
  margin-top: 16px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.sidebar-section {
  margin-bottom: 32px;
}

.footer-container {
  padding: 8px 12px;
}

.footer-button {
  width: 100%;
}


</style>