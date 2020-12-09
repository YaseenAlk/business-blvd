<template>
  <b-form-group id="address-group" label="Business Address:" label-for="address" label-align="left" label-cols-sm="3">
    <b-input-group>
      <template #prepend>
        <b-input-group-text >
          <b-icon-map />
        </b-input-group-text>
      </template>
      <b-form-input type="text" v-model="position.address" v-on:change="handleChange"></b-form-input>
      <template #append>
        <b-input-group-text>
          <b-spinner small v-if="isGeocoding" variant="info"></b-spinner>
          <b-icon-check2-all v-else variant="success"></b-icon-check2-all>
        </b-input-group-text>
      </template>
    </b-input-group>
  </b-form-group>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main.js';
import { BIconMap } from 'bootstrap-vue';

export default {
  name: 'ManageBusinessAddress',
  props: {
    business: Object,
  },
  created(){
    axios.get('/api/business/' + this.business.businessId + '/position').then((res) => {
      this.position = res.data;
      this.business.position = res.data;
    }).catch((err) => {
      eventBus.$emit('show-error-toast', err.response.data || "Error loading business address");
    });

    eventBus.$on('submit-business-changes', () => {
      if(this.business.position.address !== this.address){
        axios.put('/api/business/' + this.business.businessId + '/position', this.position).then((res) => {
          eventBus.$emit('show-success-toast', res.data);
        }).catch((err) => {
          eventBus.$emit('show-error-toast', err.response.data || err.toString());
        });
      }
    });
  },
  data(){
    return {
      position: {
        address: undefined,
        lat: undefined,
        lng: undefined,
      },
      isGeocoding: false,
    }
  },
  methods:{
    handleChange(){
      this.isGeocoding = true;
      eventBus.$emit('is-geocoding', true);

      let BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
      let SEARCH_TEXT = encodeURI(this.position.address);
      let ACCESS_TOKEN = process.env.VUE_APP_MAPBOX_ACCESS_KEY;
      let PROXIMITY = '-71.094%2C42.3600';
      let LIMIT = '1';
      let COUNTRY = 'US';

      let url = BASE_URL + SEARCH_TEXT + '.json' + '?access_token=' + ACCESS_TOKEN + '&proximity=' + PROXIMITY + '&limit=' + LIMIT + '&country=' + COUNTRY;
      axios.get(url).then((res) => {
        let result = res.data.features[0];
        if( result !== undefined ){
          this.position.lng = result.center[0];
          this.position.lat = result.center[1];
          this.position.address = result.place_name;
        } else {
          eventBus.$emit('show-error-toast', 'Error finding valid address');
        }
      }).catch((err) => {
        eventBus.$emit('show-error-toast', err.response.data || err.toString());
      }).finally(() => {
        this.isGeocoding = false;
        eventBus.$emit('is-geocoding', false);
      });
    },
  },
  components: {
    BIconMap
  }
}
</script>