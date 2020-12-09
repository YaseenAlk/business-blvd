<template>
  <div>
    <b-spinner v-if="isLoading" variant="primary"></b-spinner>
    <b-row v-else class="d-flex justify-space-between align-items-center" style="margin: 0">
      <h1>Inbox</h1>
      <div>
        <b-row v-if="this.selectOptions.length > 1" class="d-flex align-items-center" style="margin: 0">
          <div style="margin-right: 4px">Business:</div>
          <b-form-select class="inbox-select" v-model="selected" :options="selectOptions" v-on:change="handleChange">
            <template #first>
              <b-form-select-option value="" disabled>-- Please select an option --</b-form-select-option>
            </template>
          </b-form-select>
        </b-row>
      </div>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main';

export default {
  name: 'InboxHeader',
  created(){    
    axios.get('/api/users/businesses').then((res) => {
      Promise.all(res.data.map(async (id) => {
        return await this.getBusinessInfo(id)
      })).then((res) => {
        this.selectOptions = res;
        let selectedOption = this.selectOptions[0];
        eventBus.$emit('inbox-select-change', selectedOption);
        if( this.selectOptions.length > 1 ){
          this.selected = selectedOption.value;
        }
      }).catch((err) => {
        console.log('err', err);
      }).finally(() => this.isLoading = false);
    });
  },
  data(){
    return {
      selected: undefined,
      selectOptions: [],
      isLoading: true,
    }
  },
  methods: {
    getSelectOptionFromId(id){
      return this.selectOptions.filter((option) => option.value === id)[0];
    },
    async getBusinessInfo(id){
      let name = await axios.get('/api/business/' + id ).then((res) => res.data.name).catch((err) => console.log(err.response.data.message || err.toString()));
      let address = await axios.get('/api/business/' + id + '/position').then((res) => res.data.address).catch((err) => console.log('err', err));
      let selectOption = {value: id, text: name + ' (' + address + ')'};
      return selectOption;
    },
    handleChange() {
      let selectObject = this.getSelectOptionFromId(this.selected);
      eventBus.$emit('inbox-select-change', selectObject);
    },
  }
}
</script>

<style>
.inbox-select {
  margin-bottom: 16px;
}
</style>