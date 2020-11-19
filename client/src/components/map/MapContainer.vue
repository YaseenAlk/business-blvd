<template>
    <gmaps-map :options="mapOptions">
        <div v-for="marker in markerData" v-bind:key="marker.id" v-bind:id="marker.id">
            <MapMarker v-bind:options="marker" />
        </div>
    </gmaps-map>
</template>

<script>
import { gmapsMap } from 'x5-gmaps'
import MapMarker from './MapMarker.vue';

export default {
    name: 'MapContainer',
    components: {
        gmapsMap, MapMarker
    },
    data() {
        return {
            markerData: [
                {id: 0, position: { lat: 42.362541, lng: -71.098450}, title: 'Darwins Ltd.', address: '313 Massachusetts Ave, Cambridge, MA 02139', questionCount: 8, reviewCount: 11, covidScore: 4.9},
                {id: 1, position: { lat: 42.359050, lng: -71.094760}, title: 'Annas Taqueria', address: '84 Massachusetts Ave # 100, Cambridge, MA 02139', questionCount: 12, reviewCount: 23, covidScore: 4.4},
                {id: 2, position: { lat: 42.361060, lng: -71.095890}, title: 'Saloniki Greek', address: '181 Massachusetts Ave #2, Cambridge, MA 02139', questionCount: 4, reviewCount: 55, covidScore: 4.3},
            ],
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