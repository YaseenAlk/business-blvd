<template>
  <b-form-group id="phone-group" label="Business Phone Number:" label-for="phone" label-align="left" label-cols-sm="3">
    <b-input-group>
      <template #prepend>
        <b-input-group-text >
          <b-icon-telephone />
        </b-input-group-text>
      </template>
      <b-form-input type="text" v-model="phone"></b-form-input>
    </b-input-group>
  </b-form-group>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main';
import { BIconTelephone } from 'bootstrap-vue';

export default {
  name: 'ManageBusinessPhone',
  props: {
    business: Object,
  },
  created(){
    eventBus.$on('submit-business-changes', () => {
      if( this.business.phone !== this.phone ){
        axios.put('/api/business/' + this.business.businessId + '/phone', { phone : this.phone }).then((res) => {
          eventBus.$emit('show-success-toast', res.data);
        }).catch((err) => {
          eventBus.$emit('show-error-toast', err.response.data.message || err);
        });
      }
    });
  },
  data(){
    return {
      phone: this.business.phone,
    }
  },
  components: {
    BIconTelephone
  }
}
</script>