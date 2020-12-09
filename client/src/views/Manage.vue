<template>
  <div>
    <div v-if="isLoading" style="padding-top: 24px">
      <b-spinner variant="primary"  />
    </div>
    <div class="manage-page" v-else-if="business">
      <b-row class="justify-content-between align-items-center" style="margin: 12px 0">
        <h1 style="text-align: left; margin: 0">Manage {{ business.name }}</h1>
        <b-button :to="'../' + business.internalURL" style="margin-left: 12px; height: fit-content" variant="success" class="d-flex">Visit Public Page</b-button>
      </b-row>
      <h5 style="text-align: left;">You are listed as the business manager, and have access to edit the business profile. If you would like to respond to communication questions, <b-link to="/inbox">you can answer them in the inbox.</b-link></h5>
      <hr />
      <b-form class="form-container" @submit.prevent="handleSubmit">
        <manage-business-name :business="business" />
        <manage-business-address :business="business" />
        <manage-business-description :business="business" />
        <manage-business-website :business="business" />
        <manage-business-phone :business="business" />
        <manage-business-social-media :business="business" />
        <manage-business-tags :business="business" />
        <b-button :disabled="isGeocoding" type="submit" variant="success">Update Business Profile</b-button>
      </b-form>
    </div>
    <div v-else style="padding-top: 24px">
      <not-found />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import ManageBusinessName from '../components/manage/ManageBusinessName.vue';
import ManageBusinessAddress from '../components/manage/ManageBusinessAddress.vue';
import ManageBusinessDescription from '../components/manage/ManageBusinessDescription.vue';
import ManageBusinessWebsite from '../components/manage/ManageBusinessWebsite.vue';
import ManageBusinessPhone from '../components/manage/ManageBusinessPhone.vue';
import ManageBusinessTags from '../components/manage/ManageBusinessTags.vue';
import ManageBusinessSocialMedia from '../components/manage/ManageBusinessSocialMedia.vue';
import { eventBus } from '../main';
import NotFound from './NotFound.vue';

export default {
  components: { ManageBusinessName, ManageBusinessAddress, ManageBusinessDescription, ManageBusinessWebsite, ManageBusinessPhone, ManageBusinessTags, ManageBusinessSocialMedia, NotFound },
  name: 'Manage',
  beforeCreate: function(){
    axios.get('/api/business/' + this.$route.params.id).then((res) =>{
      this.business = res.data;
    }).catch((err) => {
      eventBus.$emit('show-error-toast', err);
    }).finally(() => this.isLoading = false);
  },
  created(){
    eventBus.$on('is-geocoding', (isGeocoding) => this.isGeocoding = isGeocoding)
  },
	data(){
		return {
      isGeocoding: false,
      isLoading: true,
      business: undefined,
		};
  },
  methods:{
    handleSubmit(){
      eventBus.$emit('submit-business-changes')
    }
  }
}
</script>
<style scoped>

.manage-page {
  max-width: 75vw;
  margin: auto;
  padding: 24px 1em 32px 1em;
}

</style>
