<template>
  <div>
  <h3>Submit a review</h3>
  <b-form id="review-form" @submit.prevent="onSubmit" class="form-content">
    <div>
      Select a business: <b-form-select v-model="form.selected" :options="options"></b-form-select>
    </div>
    <b-form-group label="Safety Score: " label-for="safetyScore" label-align="left" label-cols-sm="4">
        <b-form-input id="safetyScore" type="number" v-model="form.safetyScore" size="sm" required/>
    </b-form-group>
    <b-form-group label="Service Score: " label-for="serviceScore" label-align="left" label-cols-sm="4">
        <b-form-input id="serviceScore" type="number" v-model="form.serviceScore" size="sm" required/>
    </b-form-group>
    <b-form-group label="Review: " label-for="review" label-align="left" label-cols-sm="4">
        <b-form-input id="review" type="text" v-model="form.review" size="sm" required/>
    </b-form-group>
    <b-button type="submit" variant="success">Submit</b-button>
    <b-alert variant="success" v-bind:show="success !== undefined">{{success}}</b-alert>
    <b-alert variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
  </b-form>
  </div>
</template>
<script>
import axios from 'axios';

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
    };
  },
  methods: {
    clearAlerts(){
      this.error = undefined;
    },
    onSubmit: function(){
        this.clearAlerts();
        console.log(this.businesses)
        const selectedBusiness = this.businesses
          .filter((o) => o.name === this.form.selected)[0];
        axios.put(`/api/business/${selectedBusiness.businessId}/ratings/`, this.form)
        .then(() => {
          this.success = "Submitted rating successfully!";
        })
        .catch((err) => {
          this.error = err.response.data.message;
        });
    }
  }
}
</script>
<style scoped>
</style>