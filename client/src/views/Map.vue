<template>
    <div v-bind:class="classObject">
        <div v-bind:show="showBoth">
            <MapInformationDetails class="info-page"/>
        </div>
        <MapContainer />
    </div>
</template>

<script>
import MapContainer from '@/components/map/MapContainer.vue';
import MapInformationDetails from '@/components/map/MapInformationDetails.vue';
import { eventBus } from '../main';

export default {
    name: 'Map',
    created(){
        eventBus.$on('click-marker', () => {
            this.classObject = 'map-page-both';
        });
    },
    components: {
        MapContainer,
        MapInformationDetails,
    },
    data(){
        return {
            showBoth: false,
            classObject: 'map-page-one'
        }
    }
}
</script>

<style>
.info-page {
    padding: 1em;
}

.map-page-both {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.map-page-one {
    display: grid;
    grid-template-columns: 0px 1fr;
}
</style>