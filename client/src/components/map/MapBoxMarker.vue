<template>
    <MglMarker :coordinates="coordinates" color="#1B5299" v-on:click="triggerSidebar" />
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main.js';
import { MglMarker } from 'vue-mapbox';

export default {
  name: 'MapBoxMarker',
  props: {
    business: Object,
  },
  created(){
    axios.get('/api/business/' + this.business.businessId + '/position').then((res) => {
      const { address, lng, lat } = res.data;
      this.coordinates = [lng, lat];
      this.business.coordinates = {
        address, 
        lat,
        lng
      }
    }).catch((err) => {
      console.log('err', err);
    });
  },
  components:{
    MglMarker,
  },
  data(){
    return {
      coordinates: [0, 0],
    }
  },
  methods: {
    triggerSidebar: function(){
      eventBus.$emit('open-sidebar', this.business);
    }
  },
}
</script>

<style>
.popup-card {
  padding: 8px 16px;
  font-size: 1em;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.popup-description {
  font-size: 0.9rem;
}

.mapboxgl-marker:hover{
  cursor: pointer;
}
</style>