<template>
  <div>
    <h4 v-if="!subscribed" style="margin-top: 2em;">Love {{ business.name}}? Subscribe!</h4>
    <h4 v-else style="margin-top: 2em;">Thanks for subscribing!</h4>
    <b-button @click="onClick" variant="primary">
      {{ subscribed ? "Unsubscribe" : "Subscribe" }}
    </b-button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "subscribe",
  props: {
    business: Object,
  },
  data() {
    return {
      subscribed: false,
    }
  },
  methods: {
    onClick() {
      if (!this.subscribed) {
        axios.put(`api/business/${this.business.businessId}/followers`)
        .then(() => {
          this.subscribed = true;
        });   
      } else {
        axios.delete(`api/business/${this.business.businessId}/followers`)
        .then(() => {
          this.subscribed = false;
        });
      }
     
    },
  }
}
</script>