<template>
  <b-form-group id="description-group" label="Business Description:" label-for="description" label-align="left" label-cols-sm="3">
    <b-form-textarea type="text" v-model="description" rows="3" maxRows="6"></b-form-textarea>
  </b-form-group>
</template>

<script>
import { eventBus } from '../../main';
import axios from 'axios';

export default {
  name: 'ManageBusinessDescription',
  props: {
    business: Object,
  },
  created(){
    eventBus.$on('submit-business-changes', () => {
      if( this.business.description !== this.description ){
        axios.put('/api/business/' + this.business.businessId + '/description', { description : this.description }).then((res) => {
          eventBus.$emit('show-success-toast', res.data);
        }).catch((err) => {
          eventBus.$emit('show-error-toast', err.response.data.message || err);
        });
      }
    });
  },
  data(){
    return {
      description: this.business.description,
    }
  }
}
</script>