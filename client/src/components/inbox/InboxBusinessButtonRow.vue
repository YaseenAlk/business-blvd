<template>
  <b-row style="margin: 0;" v-if="businessID !== undefined">
    <b-button :to="manageURL" variant="info">Manage Business Page</b-button>
    <b-button :to="pageURL" style="margin-left: 12px" variant="success">Visit Public Page</b-button>
  </b-row>
</template>

<script>
export default {
  name: 'InboxBusinessButtonRow',
  props: {
    businessID: String,
  },
  computed: {
    manageURL() {
      return '/manage/' + this.businessID;
    },
    pageURL(){
      return '/business/' + this.businessID;
    },
  }
}
</script>

<style>

</style>