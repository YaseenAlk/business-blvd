<template>
  <div class="container">
    <div class="report-page">
      <h3>Rate a Business</h3>
      <div>Submit a Business review based on how their service was, how they complied with COVID safety polices, and what you general review of the business is.</div>
      <b-form id="review-form" @submit.prevent="onSubmit" class="report-page form-content">
        <b-form-group  label="Select a business: " label-for="businessSelect" label-align="left" label-cols-sm="4">
          <b-form-select placeholder="Please select a business to rate" id="businessSelect" v-model="form.selected" :options="options" required />
        </b-form-group>
        <b-form-group label="Review: " label-for="review" label-align="left" label-cols-sm="4">
            <b-form-textarea id="review" type="text" v-model="form.review" size="md" rows="3" max-rows="6" placeholder="Share your experience with others!" required/>
        </b-form-group>
        <b-form-group label="Safety Rating" label-align="left" label-cols-sm="4">
         <b-form-rating
          icon-empty="heart"
          icon-half="heart-half"
          icon-full="heart-fill"
          v-model="form.safetyRating"
          variant="danger"></b-form-rating>
        </b-form-group>
        <b-form-group label="Service Rating" label-align="left" label-cols-sm="4">
          <b-form-rating v-model="form.serviceRating" variant="primary"></b-form-rating>
        </b-form-group>
        <b-button type="submit" variant="success" style="margin-bottom: 12px">
          <div class="d-flex align-items-center">
            <span v-if="!loading">Submit</span>
            <b-spinner v-else small />
          </div>
        </b-button>
        <b-alert variant="success" v-bind:show="success !== undefined">{{success}}</b-alert>
        <b-alert variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
      </b-form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { BForm, BFormGroup, BAlert } from 'bootstrap-vue';

export default {
  name: 'Report',
  components: {
    BForm, 
    BFormGroup, 
    BAlert
  },
  beforeCreate:  function() {
    // We need to load all the data so the 
    // user can choose which business to review 
    // using a dropdown.
    // This is so inefficient.
    axios.get('/api/business/all')
      .then((resp) => resp.data)
      .then((businesses) => {
        businesses.map((business) => {
          this.options.push({ text: business.name, value: business.businessId})
        })
      })
      .catch(console.err);
  },
  data() {
    return { 
      options: [{value: null, text: 'Please select a business'}],
      form: {
        selected: null,
        safetyRating: undefined,
        serviceRating: undefined,
        review: undefined,
      },
      error: undefined,
      success: undefined,
      loading: false,
    };
  },
  methods: {
    clearAlerts(){
      this.error = undefined;
    },
    onSubmit: function(){
        this.clearAlerts();
        this.loading = true;
        axios.put(`/api/business/${this.form.selected}/ratings/`, this.form)
          .then(() => {
            this.success = "Submitted rating successfully!";
          })
          .catch((err) => {
            this.error = err.response.data.message || err;
          })
          .finally(() => this.loading = false);
    }
  },
}
</script>
<style scoped>
.report-page, .report-title {
  max-width: 85%;
  margin: 0 auto;
  padding-top: 1em;
}
</style>