<template>
    <div class="map-page">
        <MapContainer />
        <MapInformationDetails />
    </div>
</template>

<script>
import MapContainer from '@/components/map/MapContainer.vue';
import MapInformationDetails from '@/components/map/MapInformationDetails.vue';

export default {
    name: 'Map',
    components: {
        MapContainer,
        MapInformationDetails,
    },
}
</script>

<style>
.map-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>