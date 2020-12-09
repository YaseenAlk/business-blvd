<template>
  <b-row style="margin: 0;" v-if="businessID !== undefined">
    <b-button :to="manageURL" variant="info">
      <b-row class="d-flex flex-row justify-content-center align-items-center" style="margin: 0; padding: 0 8px">
        <b-icon-gear style="margin-right: 8px" />
        <div>Manage Business Page</div>
      </b-row>
    </b-button>
    <b-button :to="pageURL" style="margin-left: 12px" variant="success">
      <b-row class="d-flex flex-row justify-content-center align-items-center" style="margin: 0; padding: 0 8px">
        <b-icon-globe style="margin-right: 8px" />
        <div>Visit Public Page</div>
      </b-row>
    </b-button>
    <b-button style="margin-left: 12px" variant="primary" @click="$bvModal.show('update')">
      <b-row class="d-flex flex-row justify-content-center align-items-center" style="margin: 0; padding: 0 8px">
        <b-icon-envelope style="margin-right: 8px" />
        <div>Send an Update</div>
      </b-row>
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