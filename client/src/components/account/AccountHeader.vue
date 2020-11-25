<template>
  <div class="header-title">
    <div class="header-subscriptions">
      <h2>Business Subscriptions</h2>
      <p>To subscribe to business, <b-link to="/map">find a business on the map and click 'Subscribe'.</b-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountHeader',
  props: {
    user: Object,
  }
}
</script>

<style>
.header-title{
  text-align: left;
}

.header-subscriptions {
  margin: 1em 0;
}
</style>