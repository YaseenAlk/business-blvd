<template>
  <section id="hours-section" class="sidebar-section">
    <h5>Hours of Operation</h5>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <b-spinner />
    </div>
    <div v-else>
      <section v-for="h in hours" :key="h[0]" class="d-flex flex-row justify-content-start align-items-center" style="margin: 0 0 2px 8px">
        <div style="flex: 1">{{h[0]}}: </div>
        <div style="flex: 1">
          <span>{{h[1].open.hour}}:{{h[1].open.minute}}</span> -
          <span>{{h[1].close.hour}}:{{h[1].close.minute}}</span>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { DAY } from '../../Constants.js';

export default {
  name: 'MapSidebarHoursSection',
  props: {
    business: Object,
  },
  created(){
    axios.get('/api/business/' + this.business.businessId + '/hours').then((res) => {
      this.hours = Object.entries(res.data.entries).map((item, idx) => {
        return [DAY[idx], item[1]];
      });
    }).catch((err) => {
      console.log('err', err.response.data || err);
    }).finally(() => this.isLoading = false);
  },
  data(){
    return {
      isLoading: true,
      hours: [],
    }
  }
}
</script>

<style>

</style>