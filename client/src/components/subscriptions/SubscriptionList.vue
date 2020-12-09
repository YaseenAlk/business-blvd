<template>
  <div style="min-width: 16em;">
    <div v-if="updates.length == 0">
      <div class="d-flex w-100 justify-content-between" v-if="isLoading">
        <b-spinner></b-spinner>
      </div>
      <div v-else>
        No updates
      </div>
    </div>
    <b-list-group v-else>
      <b-list-group-item  v-for="update in updates" :key="update.id" :href="`/business/${update.businessId}`" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ update.businessName}} </h5>
        </div>
        <p class="mb-1">
          {{ update.content }}
        </p>
      </b-list-group-item>
      <b-list-group-item>
        <b-button block variant="danger" @click="clearUpdates">Clear All</b-button>
      </b-list-group-item>
  </b-list-group>
  </div>  
</template>
<script>
import axios from 'axios';

export default {
  name: 'SubscriptionList',
  props: {
    updateData: Array,
    onClear: Function,
  },
  created() {
    Promise
      .all(this.updateData.map((update) => {
          const businessId = update.businessId;
          return axios
            .get(`api/business/${businessId}/name`)
            .then((resp) => resp.data)
            .then((name) => {
              return {
                content: update.content,
                businessName: name,
                id: update.id,
                businessId,
              }
            });
        }))
      .then((updates) => {
        this.updates = updates;
      })
      .catch((err) => {
        this.updateFetchError = err.response.data.message || err;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  data() {
    return {
      updates: [],
      isLoading: true,
    }
  },
  methods: {
    clearUpdates() {
      // We will get to this at some point.
      this.onClear();
      this.updates=[];
    },
  }
}
</script>