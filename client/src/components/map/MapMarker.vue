<template>
    <gmaps-marker 
        :options="options" 
        @click="onClick"
        />
</template>

<script>
import { gmapsMarker } from 'x5-gmaps';
import { eventBus } from '@/main.js';

export default {
    name: 'MapMarker',
    props: {
        options: Object,
    },
    components: {
        gmapsMarker,
    },
    methods: {
        onClick: function(){
            let businessData = JSON.parse(JSON.stringify(this.options));
            eventBus.$emit('click-marker', businessData);
        }
    }
}
</script>
