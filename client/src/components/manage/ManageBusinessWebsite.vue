<template>
  <b-form id="website-form">
    <b-form-group id="website-group" label="Business Website URL:" label-for="website" label-align="left" label-cols-sm="3">
      <b-input-group>
        <template #prepend>
          <b-input-group-text >
            <b-icon-link />
          </b-input-group-text>
        </template>
        <b-form-input type="text" v-model="website"></b-form-input>
      </b-input-group>
    </b-form-group>
  </b-form>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main.js';
import { BIconLink } from 'bootstrap-vue';

export default {
  name: 'ManageBusinessWebsite',
  props: {
    business: Object,
  },
  created(){
    axios.get('/api/business/' + this.business.businessId + '/url').then((res) => {
      this.business.website = res.data;
      this.website = res.data;
    }).catch((err) => console.log('err', err.response.data || err));
    eventBus.$on('submit-business-changes', () => {
      if( this.business.website !== this.website ){
        axios.put('/api/business/' + this.business.businessId + '/url', { url : this.website }).then((res) => {
          eventBus.$emit('show-success-toast', res.data);
        }).catch((err) => {
          console.log('err', err.response);
          eventBus.$emit('show-error-toast', err.response.data || err);
        });
      }
    });
  },
  data(){
    return {
      website: this.business.website,
    }
  },
  components: {
    BIconLink,
  }
}
</script>