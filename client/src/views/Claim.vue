<template>
  <div>
    <div class="claim-page">
      <div class="claim-header">
        <b-col class="text-left" style="padding: 0">
          <h1>Claim a Business</h1>
          <h5 style="text-align: left;">In order to edit a business page and respond to the business questions, you first need to enter your provided claim code.</h5>
        </b-col>
        <hr />
      </div>
      <b-form id="claimForm" @submit.prevent="claimBusiness" class="claim-form">
        <b-form-group label="Business:" label-for="businessID2" label-align="left" label-cols-sm="4">
          <b-form-select class="inbox-select" id="businessID2" v-model="selected" :options="selectOptions">
              <template #first>
                <b-form-select-option value="" disabled>-- Please select an option --</b-form-select-option>
              </template>
          </b-form-select>
        </b-form-group>
        <b-form-group label="Claim Code:" label-for="claimCode" label-align="left" label-cols-sm="4">
          <b-form-input required id="claimCode" type="password" v-model="claimForm.claimCode" />
        </b-form-group>
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
  </div>
</template>

<script>
import { BForm, BButton, BCollapse } from 'bootstrap-vue';
import axios from 'axios';
import { eventBus } from '../main.js';

export default {
  name: 'Claim',
  created(){
    axios.get('/api/business/all').then((res) => {

      Promise.all(res.data.map(async (business) => {
        const { businessId } = business;
        return await this.getBusinessInfo(businessId)
      })).then((res) => {
        this.selectOptions = res;
        if( this.selectOptions.length > 1 ){
          this.selected = this.selectOptions[0].value;
        }
      }).catch((err) => {
        console.log('err', err);
      });
    });
  },
  data(){
    return {
      claimForm: {
        claimCode: undefined,
        loading: false,
      },
      
      unclaimForm: {
        businessID: undefined,
        loading: false,
      },

      selected: undefined,
      selectOptions: [],

      // debugging purposes
      businessIDs: [],
    };
  },
  methods: {
    claimBusiness(){
      this.claimForm.loading = true;
      axios.post('/api/business/' + this.selected + '/claim', this.claimForm).then((res) => {
        eventBus.$emit('show-success-toast', res.data);
        this.claimForm.loading = false;
      }).catch((err) => {
        eventBus.$emit('show-error-toast', (err.response.data.message || err));
        this.claimForm.loading = false;
      });
    },
    unclaimBusiness(){
      this.unclaimForm.loading = true;
      axios.delete('/api/business/' + this.unclaimForm.businessID + '/claim').then((res) => {
        eventBus.$emit('show-success-toast', res.data);
        this.unclaimForm.loading = false;
      }).catch((err) => { 
        eventBus.$emit('show-error-toast', (err.response.data.message || err));
        this.unclaimForm.loading = false;
      });
    },
    loadAllBusinessIDs(){
      axios.get('/api/business/all').then((res) => {
        this.businessIDs = res.data.map((b) => ({"id": b.businessId, "name": b.name}));
      }).catch((err) => {
        console.log('err', err);
      })
    },
    async getBusinessInfo(id){
      let name = await axios.get('/api/business/' + id ).then((res) => res.data.name).catch((err) => console.log(err.response.data.message || err));
      let address = await axios.get('/api/business/' + id + '/position').then((res) => res.data.address).catch((err) => console.log('err', err));
      let selectOption = {value: id, text: name + ' (' + address + ')'};
      return selectOption;
    },
  },
  components: {
    BForm,
    BButton,
    BCollapse
  },
}
</script>

<style scoped>
.claim-page {
  padding: 32px 1em 1em 1em;
}

.claim-header {
  max-width: 750px;
  margin: auto;
}

.claim-form {
  max-width: 600px;
  margin: auto;
  padding-bottom: 1em;
}
</style>