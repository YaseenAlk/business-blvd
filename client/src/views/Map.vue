<template>
  <div>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle">
      <MapBoxMarker :business="b" v-for="b in businesses" v-bind:key="b.businessId" />
    </MglMap>
    <MapSidebar />
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";
import { MAP_STYLE } from "../map/style.js";
import axios from 'axios';
import MapBoxMarker from '../components/map/MapBoxMarker.vue';
import MapSidebar from '../components/map/MapSidebar.vue';

export default {
  name: 'Map',
  created(){
    this.mapbox = Mapbox;
    axios.get('/api/business/all').then((res) => {
        this.businesses = res.data;
    }).catch((err) => {
      console.log('err', err);
    });

  },
  data() {

    const ACCESS_TOKEN = process.env.VUE_APP_MAPBOX_ACCESS_KEY;

    return {
      accessToken: ACCESS_TOKEN,
      mapStyle: MAP_STYLE,
      businesses: [],
    };
  },
  components: {
    MglMap,
    MapBoxMarker,
    MapSidebar
  },
}
</script>