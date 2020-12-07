<template>
  <div>
    <div v-if="business && loaded">
      <b-container class="flex-col align-items-center" style="max-width: 85%">
      <Header v-bind:business="business"/>
      <div class="business-page">
        <b-row>
          <!-- side panel -->
          <b-col md='4'>
            <!-- at a glance -->
            <AtAGlance v-bind:business="business" />
            <SocialMedia class="mt-4" v-bind:business="business" />
            <!-- hours -->
            <Hours v-bind:business="business" />
            <Subscribe class="business-section" v-bind:business="business"/>
          </b-col>
          <!-- main content -->
          <b-col md='8'>
            <b-container>
              <About class="business-section" v-bind:business="business" />
              <FAQ class="business-section" v-bind:business="business" />
              <Reviews class="business-section" v-bind:business="business"/>
              <Ask class="business-section" v-bind:business="business" />
            </b-container>
          </b-col>
        </b-row>
      </div> 
      </b-container>
    </div>
    <div v-else>
      Loading...
    </div>  
  </div>
</template>
<script>

import Reviews from '@/components/business/Reviews.vue';
import FAQ from '@/components/business/FAQ.vue';
import About from '@/components/business/About.vue';
import Ask from '@/components/business/Ask.vue';
import Header from '@/components/business/Header.vue';
import AtAGlance from '@/components/business/AtAGlance.vue';
import Hours from '@/components/business/Hours.vue';
import SocialMedia from '@/components/business/SocialMedia.vue';
import Subscribe from '@/components/business/Subscribe.vue';

import axios from 'axios';

export default {
  name: 'Business',
  beforeCreate: function(){
    const businessId = this.$route.params.id
    axios.get(`/api/business/${businessId}`)
    .then((res) => res.data)
    .then((business) => {
      this.business = business;
    })
    .then(() => axios.get(`api/business/${businessId}/position`))
    .then((res) => res.data)
    .then((position) => {
      this.business.position = position;
    })
    .then(() => axios.get(`api/business/${businessId}/ratings`))
    .then((res) => res.data)
    .then((ratings) => {
      this.business.ratings = ratings;
    })
    .then(() => axios.get(`api/business/${businessId}/hours`))
    .then((res) => res.data.entries)
    .then((hours) => {
      this.business.hours = hours;
    })
    .then(() => axios.get(`/api/business/${businessId}/social-media`))
    .then((resp) => resp.data)
    .then((social) => {
      this.business.social = social;
    })
    .then(() => { this.loaded = true; })
    .catch((err) => {
      console.error(err.response.data || err);
    });
  },
  components: {
		Header,
		AtAGlance,
		Hours,
		Reviews,
		FAQ,
		Ask,
    About,
    SocialMedia,
    Subscribe,
	},
	data(){
		return {
      business: undefined,
      loaded: false,
		};
  },
}
</script>
<style scoped>

.business-page {
	width: 85%;
}

.business-section{
	margin-bottom: 16px;
}
</style>
