<template>
  <div class="mt-2">
    <b-button-group style="max-width: 100%;">
      <b-button  variant="primary">
        <b-link style="color:white;" :href="this.business.social.twitter" target="_blank">Twitter</b-link>
      </b-button>
      <b-button  variant="primary">
        <b-link style="color:white;" :href="this.business.social.facebook" target="_blank">Facebook</b-link>
      </b-button>
      <b-button  variant="primary">
        <b-link style="color:white;" :href="this.business.social.instagram" target="_blank">Instagram</b-link>
      </b-button>
      <b-button  variant="primary">
        <b-link style="color:white;" :href="this.business.externalURL" target="_blank">Website</b-link>
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