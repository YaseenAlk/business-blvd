<template>
  <div class="container">
    <div class="report-page">
      <h3>Rate a Business</h3>
      <div>Submit a Business review based on how their service was, how they complied with COVID safety polices, and what you general review of the business is.</div>
      <b-form id="review-form" @submit.prevent="onSubmit" class="report-page form-content">
        <b-form-group label="Select a business: " label-for="businessSelect" label-align="left" label-cols-sm="4">
          <b-form-select id="businessSelect" v-model="form.selected" :options="options" required />
        </b-form-group>
        <b-form-group label="COVID Safety Score: " label-for="safetyScore" label-align="left" label-cols-sm="4">
            <b-form-input id="safetyScore" type="number" :min="0" :max="5" v-model="form.safetyScore" size="sm" required/>
        </b-form-group>
        <b-form-group label="Service Score: " label-for="serviceScore" label-align="left" label-cols-sm="4">
            <b-form-input id="serviceScore" type="number" :min="0" :max="5" v-model="form.serviceScore" size="sm" required/>
        </b-form-group>
        <b-form-group label="Review: " label-for="review" label-align="left" label-cols-sm="4">
            <b-form-input id="review" type="text" v-model="form.review" size="sm" required/>
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
  beforeCreate:  function() {
    // We need to load all the data so the 
    // user can choose which business to review 
    // using a dropdown.
    // This is so inefficient.
    axios.get('/api/business/all')
      .then((resp) => {
        return resp.data;
      })
      .then((businesses) => {
        const options = [];
        businesses.map(({ name, businessId }) =>  {
          options.push({name, businessId});
        })
        return options;
      })
      .then((options) => {
        this.options = options.map(({name}) => name);
        this.businesses = options;
      })
      .catch((err) => {
        console.error(err )
      });
  },
  data() {
    return { 
      options: undefined,
      form: {
        selected: undefined,
        safetyScore: undefined,
        serviceScore: undefined,
        review: undefined,
      },
      error: undefined,
      success: undefined,
      businesses: undefined,
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
        const selectedBusiness = this.businesses
          .filter((o) => o.name === this.form.selected)[0];
        axios.put(`/api/business/${selectedBusiness.businessId}/ratings/`, this.form)
        .then(() => {
          this.success = "Submitted rating successfully!";
          this.loading = false;
        })
        .catch((err) => {
          this.error = err.response.data.message || err;
          this.loading = false;
        });
    }
  },
  components: {
    BForm, BFormGroup, BAlert
  }
}
</script>
<style scoped>
.report-page, .report-title {
  max-width: 85%;
  margin: 0 auto;
  padding-top: 1em;
}
</style>