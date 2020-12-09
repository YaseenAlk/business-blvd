<template>
  <b-row style="margin: 0;" v-if="businessID !== undefined">
    <b-button :to="manageURL" variant="info">Manage Business Page</b-button>
    <b-button :to="pageURL" style="margin-left: 12px" variant="success">Visit Public Page</b-button>
    <b-button style="margin-left: 12px" variant="primary" @click="$bvModal.show('update')">
      Send an Update
    </b-button> 
    <UpdateModal :businessID="businessID"></UpdateModal>
  </b-row>
</template>

<script>
import UpdateModal from './UpdateModal.vue';

export default {
  name: 'InboxBusinessButtonRow',
  props: {
    businessID: String,
  },
  components: {
    UpdateModal,
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