<template>
  <b-sidebar id="sidebar-variant" bg-variant="white" text-variant="dark" shadow v-model="visible" :visible="visible">
    <template #title>
      <h2 style="text-align: left; margin: 12px 0 0 0"><b>{{business.name}}</b></h2>
    </template>
    <hr/>
    <div class="sidebar-body">
      <map-sidebar-info-section :key="'info-' + business.businessId" :business="business" />
      <hr/>
      <map-sidebar-hours-section :key="'hours-' + business.businessId" :business="business" />
      <hr/>
      <map-sidebar-rating-section :key="'rating-' + business.businessId" :business="business" />
    </div>
    <template #footer>
      <div class="footer-container" style="margin-bottom: 66px">
        <b-button class="footer-button" variant="info" :to="business.internalURL"><b>See More</b></b-button>
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
  margin-bottom: 16px;
}

.footer-container {
  padding: 8px 12px;
}

.footer-button {
  width: 100%;
}

hr {
  border-top-color: rgba(0, 0, 0, 0.3);
  margin-top: 0;
}

</style>