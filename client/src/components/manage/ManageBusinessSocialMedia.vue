<template>
  <b-form id="social-form">
    <b-form-group id="facebook-form" label="Facebook Page:" label-for="facebook" label-align="left" label-cols-sm="3">
      <b-input-group>
        <template #prepend>
          <b-input-group-text >
            <b-icon-people />
          </b-input-group-text>
        </template>
        <b-form-input type="text" v-model="socials.facebook" placeholder="http://"></b-form-input>
      </b-input-group>
    </b-form-group>
    <b-form-group id="twitter-form" label="Twitter Page:" label-for="twitter" label-align="left" label-cols-sm="3">
      <b-input-group>
        <template #prepend>
          <b-input-group-text >
            <b-icon-sticky />
          </b-input-group-text>
        </template>
        <b-form-input type="text" v-model="socials.twitter" placeholder="http://"></b-form-input>
      </b-input-group>
    </b-form-group>
    <b-form-group id="instagram-form" label="Instagram Page:" label-for="instagram" label-align="left" label-cols-sm="3">
      <b-input-group>
        <template #prepend>
          <b-input-group-text >
            <b-icon-camera />
          </b-input-group-text>
        </template>
        <b-form-input type="text" v-model="socials.instagram" placeholder="http://"></b-form-input>
      </b-input-group>
    </b-form-group>
  </b-form>
</template>
<script>
import axios from 'axios';
import { eventBus } from '../../main.js';
import { BIconPeople, BIconCamera, BIconSticky } from 'bootstrap-vue';

export default {
  name: 'ManageBusinessSocialMedia',
  props: {
    business: Object,
  }, 
  created(){
    axios.get('/api/business/' + this.business.businessId + '/social-media').then((res) => {
      this.business.socials = Object.assign({}, res.data);
      this.socials = Object.assign({}, res.data);
    }).catch((err) => {
      console.log('err', err);
    });

    eventBus.$on('submit-business-changes', () => {
      if(this.socials.facebook === this.business.socials.facebook && this.socials.twitter === this.business.socials.twitter && this.socials.instagram === this.business.socials.instagram) {
        return;
      } else {
        let { facebook, twitter, instagram } = this.socials;
        if( facebook === ''){
          facebook = undefined
        }
        if( twitter === ''){
          twitter = undefined
        }
        if( instagram === ''){
          instagram = undefined
        }
        axios.put('/api/business/' + this.business.businessId + '/social-media', { facebook, twitter, instagram }).then((res) => {
          eventBus.$emit('show-success-toast', res.data);
        }).catch((err) => {
          eventBus.$emit('show-error-toast', err.response.data.message || err.toString());
        });
      }
    });
  },
  data(){
    return {
      socials: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
      }
    }
  },
  components:{
    BIconPeople,
    BIconCamera,
    BIconSticky
  }
}
</script>

<style>

</style>