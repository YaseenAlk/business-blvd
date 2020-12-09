<template>
  <div class="container">
    <div class="report-page">
      <b-col class="text-left" style="margin: 0">
        <h1>Rate a Business</h1>
        <div>Submit a Business review based on how their service was, how they complied with COVID safety polices, and what you general review of the business is.</div>
      </b-col>
      <hr />
      <b-form id="review-form" @submit.prevent="onSubmit" class="report-form-container">
        <b-form-group  label="Select a business: " label-for="businessSelect" label-align="left" label-cols-sm="3">
          <b-form-select placeholder="Please select a business to rate" id="businessSelect" v-model="form.selected" :options="options" required />
        </b-form-group>
        <b-form-group label="Review: " label-for="review" label-align="left" label-cols-sm="3">
            <b-form-textarea id="review" type="text" v-model="form.review" size="md" rows="5" max-rows="6" placeholder="Share your experience with others!" required/>
        </b-form-group>
        <b-form-group label="Safety Rating:" label-align="left" label-cols-sm="3">
         <b-form-rating
          icon-empty="heart"
          icon-half="heart-half"
          icon-full="heart-fill"
          v-model="form.safetyRating"
          variant="danger"></b-form-rating>
        </b-form-group>
        <b-form-group label="Service Rating:" label-align="left" label-cols-sm="3">
          <b-form-rating v-model="form.serviceRating" variant="primary"></b-form-rating>
        </b-form-group>
        <b-button type="submit" style="background-color: #1B5299; margin-bottom: 12px">
          <div class="d-flex align-items-center">
            <span v-if="!loading">Submit Review</span>
            <b-spinner v-else small />
          </div>
        </b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { eventBus } from '../main.js';
import { BForm, BFormGroup } from 'bootstrap-vue';

export default {
  name: 'Report',
  components: {
    BForm, 
    BFormGroup
  },
  beforeCreate:  function() {
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
        Promise.all([
          axios.put(`/api/business/${this.form.selected}/ratings/`, this.form),
          axios.post(`/api/reviews/`, {...this.form, businessId: this.form.selected})
        ]).then(() => {
          eventBus.$emit('show-success-toast', 'Sucessfully submitted business review');
          this.form = { 
            ...this.form,         
            safetyRating: undefined,
            serviceRating: undefined,
            review: undefined
          };
        }).catch((err) => {
          eventBus.$emit('err', err.response.data.message || err.toString());
        }).finally(() => this.loading = false);
    }
  },
}
</script>
<style scoped>
.report-page {
  padding-top: 1em;
  max-width: 900px;
  margin: auto;
  padding: 24px 16px;
}

.report-form-container {
  max-width: 650px;
  margin: auto;
  padding: 8px 12px;
}

</style>