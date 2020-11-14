<template>
    <gmaps-map :options="mapOptions" />
</template>

<script>
import { gmapsMap } from 'x5-gmaps';

export default {
    name: 'MapContainer',
    components: {
        gmapsMap
    },
    data() {
        return {
            mapOptions: {
                center: { lat: 42.3601, lng: -71.0942 },
                zoom: 15,
            }
        };
    },
}
</script>