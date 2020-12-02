<template>
  <div>
    <b-button-group>
      <b-button  variant="outline-primary">
        <b-link :href="this.business.social.twitter" target="_blank">Twitter</b-link>
      </b-button>
      <b-button  variant="outline-primary">
        <b-link :href="this.business.social.facebook" target="_blank">Facebook</b-link>
      </b-button>
      <b-button  variant="outline-primary">
        <b-link :href="this.business.social.instagram" target="_blank">Instagram</b-link>
      </b-button>
      <b-button  variant="outline-primary">
        <a :href="this.business.externalURL" target="_blank">Website</a>
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