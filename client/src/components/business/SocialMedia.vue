<template>
  <div>
    <b-button-group>
      <b-button  variant="outline-primary">
        <b-link :href="business.socialMedia._twitter" target="_blank">Twitter</b-link>
      </b-button>
      <b-button  variant="outline-primary">
        <b-link :href="business.socialMedia._facebook" target="_blank">Facebook</b-link>
      </b-button>
      <b-button  variant="outline-primary">
        <b-link :href="business.socialMedia._instagram" target="_blank">Instagram</b-link>
      </b-button>
      <b-button  variant="outline-primary">
        <b-link :href="business.url" target="_blank">Website</b-link>
      </b-button>
    </b-button-group>
  </div>
</template>
<script>
export default {
  name: "SocialMedia",
  props: {
    business: Object,
  }
}
</script>