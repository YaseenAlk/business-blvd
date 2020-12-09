<template>
  <b-form id="tags-form">
    <b-form-group id="tags-group" label="Business Tags:" label-for="tags" label-align="left" label-cols-sm="3">
       <b-form-checkbox-group v-model="selectedTags" :options="tagOptions" value-field="value" text-field="text" class="checkboxes"></b-form-checkbox-group>
    </b-form-group>
  </b-form>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main.js';
import { TAG_LIST, TAG_AS_STRING } from '../../Constants.js';

export default {
  name: 'ManageBusinessTags',
  props: {
    business: Object,
  },
  created(){
    this.tagOptions = Object.values(TAG_LIST).map((item, idx) => {
      return {"value": idx, "text": item};
    });

    axios.get('/api/business/' + this.business.businessId + '/tags')
      .then((res) => {
        this.business.selectedTags = Array.from(res.data);
        this.selectedTags = Array.from(res.data);
      })
      .catch((err) => console.log('err', err));

    eventBus.$on('submit-business-changes', () => {

      // 1) Check if they match
      let globalTags = new Set(this.business.selectedTags); // SAVED ON SERVER
      let savedTags = new Set(this.selectedTags); // LOCAL CHANGES

      // Added tags
      let added = new Set([...savedTags].filter(x => !globalTags.has(x)));

      // Deleted tags
      let deleted = new Set([...globalTags].filter(x => !savedTags.has(x)));

      let allPromises = [
        Array.from(added).map((tagId) => {
          const tagAsString = TAG_AS_STRING[tagId];
          return axios.put('/api/business/' + this.business.businessId + '/tags', { "tagId": tagAsString })
        }), 
        Array.from(deleted).map((tagId) => {
          const tagAsString = TAG_AS_STRING[tagId];
          return axios.delete('/api/business/' + this.business.businessId + '/tags', { "data" : { "tagId": tagAsString } });
        })
      ].flat();

      Promise.all(allPromises).then(() => {
        eventBus.$emit('show-success-toast', 'Added ' + added.size + ' tags, and removed ' + deleted.size + ' tags.');
      })
      .catch((err) => {
        eventBus.$emit('show-error-toast', err.response.data.message || err);
      }).finally(() => {
        this.business.selectedTags = Array.from(this.selectedTags);
      });
    });

  },
  data(){
    return {
      tagOptions: [],
      selectedTags: [],
    };
  }
}
</script>

<style scoped>
.checkboxes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>