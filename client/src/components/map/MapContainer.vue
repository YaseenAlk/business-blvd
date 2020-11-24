<template>
    <gmaps-map :options="mapOptions">
        <div v-for="marker in markerData" v-bind:key="marker.businessId" v-bind:id="marker.businessId">
            <MapMarker v-bind:options="marker" />
        </div>
    </gmaps-map>
</template>

<script>
import { gmapsMap } from 'x5-gmaps'
import MapMarker from './MapMarker.vue';

import axios from 'axios';

export default {
    name: 'MapContainer',
    created(){
        axios.get('/api/business/all').then((res) => {
            this.markerData = res.data;
        }).catch((err) => {
            console.log('err', err);
        });
    },
    components: {
        gmapsMap, MapMarker
    },
    data() {
        return {
            markerData: [],
            mapOptions: {
                center: { lat: 42.3601, lng: -71.0942 },
                zoom: 15,
                fullscreenControl: false,
                mapTypeControl: false,
                rotateControl: false,
                scaleControl: false,
                streetViewControl: false,
                clickableIcons: false,
            }
        };
    },
}
</script>