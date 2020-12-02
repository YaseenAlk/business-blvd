<template>
    <div v-if="selectedBusiness !== undefined">
        <MapCard v-bind:business="selectedBusiness" />
    </div>
</template>

<script>
import { eventBus } from '@/main.js'; 
import MapCard from './MapCard.vue';

export default {
    name: 'MapInformationDetails',
    created() {
        eventBus.$on('click-marker', (data) => {
            this.selectedBusiness = data;
        });
    },
    data() {
        return {
            selectedBusiness: undefined,
        };
    },
    components: {
        MapCard,
    }
}
</script>

<style>
.info-page {
    padding: 32px;
}

.card-section {
    transition: all 0.5s ease-in-out;
}
</style>