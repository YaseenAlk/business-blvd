<template>
  <b-form-group id="name-group" label="Business Name:" label-for="name" label-align="left" label-cols-sm="3">
    <b-input-group>
      <template #prepend>
        <b-input-group-text >
          <b-icon-fonts />
        </b-input-group-text>
      </template>
      <b-form-input type="text" v-model="name"></b-form-input>
    </b-input-group>
  </b-form-group>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main';
import { BIconFonts } from 'bootstrap-vue';

export default {
  name: 'ManageBusinessName',
  props: {
    business: Object,
  },
  created(){
    eventBus.$on('submit-business-changes', () => {
      if( this.business.name !== this.name ){
        axios.put('/api/business/' + this.business.businessId + '/name', { name : this.name }).then((res) => {
          eventBus.$emit('show-success-toast', res.data);
        }).catch((err) => {
          eventBus.$emit('show-error-toast', err.response.data.message || err.toString());
        });
      }
    });
  },
  data(){
    return {
      name: this.business.name,
    }
  },
  components: {
    BIconFonts
  }
}
</script>