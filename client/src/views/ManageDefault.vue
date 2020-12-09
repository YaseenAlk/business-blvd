<template>
  <div>
    <div class="manage-page-default">
      <h1 style="text-align: left">Manage Businesses</h1>
      <hr />
      <account-owner :userId="userId"/>
    </div>
  </div>
</template>

<script>
import AccountOwner from '../components/account/AccountOwner.vue'
export default {
  name: 'ManageDefault',
  components: { AccountOwner },
  computed: {
    userId(){ return this.$cookie.get('business-blvd-userId') }
  }
}
</script>

<style scoped>
.manage-page-default {
  padding-top: 24px;
  max-width: 75vw;
  margin: auto;
}

</style>