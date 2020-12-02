<template>
  <div >
    <b-form id="claimForm" @submit.prevent="claimBusiness" class="claim-page">
      <h4>Claim a Business</h4>
        <b-form-group label="Business ID:" label-for="businessID" label-align="left" label-cols-sm="4">
          <b-form-input required id="businessID" type="text" v-model="claimForm.businessID" />
        </b-form-group>
        <b-alert variant="success" v-bind:show="claimForm.successMessage !== undefined">{{claimForm.successMessage}}</b-alert>
        <b-alert variant="danger" v-bind:show="claimForm.errorMessage !== undefined">{{claimForm.errorMessage}}</b-alert>
        <b-button variant="success" type="submit">
           <span class="d-flex align-items-center">
            <div v-if="!claimForm.loading">Claim Business</div>
            <b-spinner v-else small></b-spinner>
           </span>
        </b-button>
    </b-form>
    <div>
      <b-button variant="secondary" v-b-toggle.collapse v-on:click="loadAllBusinessIDs">For debugging and MVP purposes. Remove in final project</b-button>
      <b-collapse id="collapse" class="mt-2">
        <ul v-for="b in businessIDs" v-bind:key="b.id">
          <div style="text-align:center"><b>{{b.name}}:</b> {{b.id}}</div>
        </ul>
        <b-form id="unclaimForm" @submit.prevent="unclaimBusiness" class="claim-page">
          <h5>Unclaim Business</h5>
          <b-form-group label="Business ID:" label-for="businessID" label-align="left" label-cols-sm="4">
            <b-form-input required id="businessID" type="text" v-model="unclaimForm.businessID" />
          </b-form-group>
          <b-alert variant="success" v-bind:show="unclaimForm.successMessage !== undefined">{{unclaimForm.successMessage}}</b-alert>
          <b-alert variant="danger" v-bind:show="unclaimForm.errorMessage !== undefined">{{unclaimForm.errorMessage}}</b-alert>
          <b-button variant="success" type="submit">
            <span class="d-flex align-items-center">
              <div v-if="!unclaimForm.loading">Unclaim Business</div>
              <b-spinner v-else small></b-spinner>
           </span>
          </b-button>
        </b-form>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { BForm, BButton, BCollapse } from 'bootstrap-vue';
import axios from 'axios';

export default {
  name: 'Claim',
  data(){
    return {
      claimForm: {
        businessID: undefined,
        successMessage: undefined,
        errorMessage: undefined,
        loading: false,
      },
      
      unclaimForm: {
        businessID: undefined,
        successMessage: undefined,
        errorMessage: undefined,
        loading: false,
      },

      // debugging purposes
      businessIDs: [],
    };
  },
  methods: {
    claimBusiness(){
      this.claimForm.successMessage = undefined;
      this.claimForm.errorMessage = undefined;
      this.claimForm.loading = true;
      axios.post('/api/business/' + this.claimForm.businessID + '/claim').then((res) => {
        this.claimForm.successMessage = res.data.message;
      }).catch((err) => {
        this.claimForm.errorMessage = err.response.data.message || err;
      }).then(() => this.claimForm.loading = false);
    },
    unclaimBusiness(){
      this.unclaimForm.successMessage = undefined;
      this.unclaimForm.errorMessage = undefined;
      this.unclaimForm.loading = true;
      axios.delete('/api/business/' + this.unclaimForm.businessID + '/claim').then((res) => {
        this.unclaimForm.successMessage = res.data.message;
      }).catch((err) => { 
        this.unclaimForm.errorMessage = err.response.data.message || err;
      }).then(() => this.unclaimForm.loading = false);
    },
    loadAllBusinessIDs(){
      axios.get('/api/business/all').then((res) => {
        this.businessIDs = res.data.map((b) => ({"id": b.businessId, "name": b.name}));
      }).catch((err) => {
        console.log('err', err);
      })
    },
  },
  components: {
    BForm,
    BButton,
    BCollapse
  },
}
</script>

<style>
.claim-page {
  max-width: 85%;
  margin: 0 auto;
  padding: 1em;
}
</style>