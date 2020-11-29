<template>
  <div>
  <h3>Submit a review</h3>
  <b-form id="review-form" @submit.prevent="onSubmit" class="form-content">
    <div>
      Select a business: <b-form-select v-model="form.businessId" :options="options"></b-form-select>
    </div>
    <b-form-group label="Safety Score: " label-for="safetyScore" label-align="left" label-cols-sm="4">
        <b-form-input id="safetyScore" type="text" v-model="form.safetyScore" size="sm" required/>
    </b-form-group>
    <b-form-group label="Service Score: " label-for="serviceScore" label-align="left" label-cols-sm="4">
        <b-form-input id="serviceScore" type="text" v-model="form.serviceScore" size="sm" required/>
    </b-form-group>
    <b-form-group label="Review: " label-for="review" label-align="left" label-cols-sm="4">
        <b-form-input id="review" type="text" v-model="form.review" size="sm" required/>
    </b-form-group>
        <b-alert variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
    <b-button type="submit" variant="success">Submit</b-button>
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
        console.log(resp.data);
        return resp.data;
      })
      .then((businesses) => {
        const options = [];
        businesses.map(({ name, businessID }) =>  {
          options.push({name, businessID});
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
        businessId: undefined,
        safetyScore: undefined,
        serviceScore: undefined,
        review: undefined,
      },
      error: undefined,
    };
  },
  methods: {
    clearAlerts(){
      this.error = undefined;
    },
    onSubmit: function(){
        this.clearAlerts();
        //
        // axios.post(`/api/business/${this.selected}/review`, this.form)
        // .then((res) => {
        //   console.log('Something.')
        // })
        // .catch((err) => {
        //     this.error = err.response.data.message;
        // });
        this.error = "The backend isn't connected.";
    }
  }
}
</script>
<style scoped>
</style>