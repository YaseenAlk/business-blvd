<template>
  <section id="rating-section" class="sidebar-section">
    <h5>Ratings</h5>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <b-spinner />
    </div>
    <div v-else>
      <b-row class="d-flex align-items-center" style="margin: 0 0 8px 8px">
        <span><b-icon-file-earmark-bar-graph style="margin-right: 8px" />Safety Score: {{ratings.safety.average}} / 5.0</span>
      </b-row>
      <b-row class="d-flex align-items-center" style="margin: 0 0 8px 8px">
        <span><b-icon-door-open style="margin-right: 8px" />Service Score: {{ratings.service.average}} / 5.0</span>
      </b-row>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { BIconFileEarmarkBarGraph, BIconDoorOpen } from 'bootstrap-vue';
export default {
  name: 'MapSidebarRatingSection',
  props: {
    business: Object,
  },
  created(){
    axios.get('/api/business/' + this.business.businessId + '/ratings').then((res) => {
      this.ratings = res.data;
    }).catch((err) => {
      console.log('err', err);
    }).finally(() => this.isLoading = false);
  },
  components: {
    BIconFileEarmarkBarGraph, BIconDoorOpen
  },
  data(){
    return {
      isLoading: true,
      ratings: {
        safety: {},
        service:{},
      }
    }
  }
}
</script>

<style>

</style>