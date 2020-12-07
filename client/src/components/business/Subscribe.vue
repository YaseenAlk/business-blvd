<template>
  <div>
    <b-button 
      @click="onClick"
      v-if="!loading"
      v-b-tooltip="{ 
        title: subscribed ? descriptionB : descriptionA, 
        placement: 'bottom', 
      }"
      :variant="subscribed ? 'danger': 'success' ">
      {{ subscribed ? "Unsubscribe" : "Subscribe" }}
    </b-button>
    <b-spinner small v-else></b-spinner>
  </div>
</template>
<script>
import axios from "axios";
const descriptionA = "Subscribing to a business allows you to be the first to know about deals, promotions, and updates!";
const descriptionB = "Thank you for being a subcriber!";

export default {
  name: "subscribe",
  props: {
    business: Object,
  },
  data() {
    return {
      subscribed: false,
      loading: false,
      descriptionA: descriptionA,
      descriptionB: descriptionB,
    }
  },
  created() {
    this.loading = true;
    const userId = this.$cookie.get('business-blvd-userId');
    if (userId === '') {
      this.loading = false;
      return;
    }
    axios
      .get(`/api/business/${this.business.businessId}/followers/${this.$cookie.get('business-blvd-userId')}`)
      .then((resp) => {
        this.loading = false;
        this.subscribed = resp.data;
      });
  },
  methods: {
    onClick() {
      this.loading = true;
      if (!this.subscribed) {
        axios.put(`api/business/${this.business.businessId}/followers`)
        .then(() => {
          this.loading = false;
          this.subscribed = true;
        });   
      } else {
        axios.delete(`api/business/${this.business.businessId}/followers`)
        .then(() => {
          this.loading = false;
          this.subscribed = false;
        });
      }
     
    },
  }
}
</script>