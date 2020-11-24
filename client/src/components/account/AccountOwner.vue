<template>
  <div class="owner-section">
    <h2>Pages</h2>
    <p>
        Currently, you are not listed as a business owner for any page. <b-link to="/claim">Claim a business here.</b-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AccountOwner',
  props: {
    userId: String,
  }
}
</script>

<style>
.owner-section {
  text-align: left;
  margin: 1em;
}
</style>