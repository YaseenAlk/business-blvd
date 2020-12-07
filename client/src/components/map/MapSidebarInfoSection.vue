<template>
  <section id="info-section" class="sidebar-section sidebar-contact-details">
    <h4>Information</h4>
    <b-row class="d-flex align-items-center" style="margin: 0 0 8px 8px">
      <b-icon-map style="margin-right: 8px" />
      <div>{{business.coordinates.address}}</div>
    </b-row>
    <b-row class="d-flex align-items-center" style="margin: 0 0 8px 8px">
      <b-icon-telephone style="margin-right: 8px" />
      <div>{{business.phone}}</div>
    </b-row>
    <b-row class="d-flex align-items-center" style="margin: 0 0 8px 8px">
      <div><b-icon-info-circle style="margin-right: 8px" />{{business.description}}</div>
    </b-row>
  </section>
</template>

<script>
import { BIconTelephone, BIconMap, BIconInfoCircle } from 'bootstrap-vue';
export default {
  name: 'MapSidebarInfoSection',
  props: {
    business: Object,
  },
  components: {
    BIconTelephone, BIconMap, BIconInfoCircle
  },
}
</script>

<style>

</style>