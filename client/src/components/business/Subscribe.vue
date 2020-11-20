<template>
  <div>
    <h4 :v-if="!subscribed" style="margin-top: 2em;">Love {{ business.name}}? Subscribe!</h4>
    <b-button @click="onClick" variant="primary">
      {{ subscribed ? "Unsubscribe" : "Subscribe" }}
    </b-button>
  </div>
</template>
<script>
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
      this.subscribed = !this.subscribed;
    },
  }
}
</script>