<template>
    <gmaps-marker 
        v-if="this.optionData !== undefined"
        :options="optionData" 
        @click="onClick"
        />
</template>

<script>
import { gmapsMarker } from 'x5-gmaps';
import { eventBus } from '@/main.js';
import axios from 'axios';

export default {
    name: 'MapMarker',
    props: {
        options: Object,
    },
    data() {
      return {
        optionData: undefined,
      }
    },
    created() {
      // Augment each marker with lat and long
      const businessId = this.options.businessId;
      axios.get(`/api/business/${businessId}/position`)
        .then((resp) => resp.data)
        .then((position) => {
          console.log('here');
          console.log(position);
          position.lat = Number(position.lat);
          position.lng = Number(position.lng);
          this.optionData = {
            position,
            ...this.options,
          }
        });
    },
    components: {
      gmapsMarker,
    },
    methods: {
        onClick: function(){
            let businessData = JSON.parse(JSON.stringify(this.optionData));
            eventBus.$emit('click-marker', businessData);
        }
    }
}
</script>
