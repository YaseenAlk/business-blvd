<template>
  <b-link v-bind:to="'/manage/'+business.businessId" class="business-owner-card">
    <h4>{{business.name}}</h4>
    <span v-if="business.position !== undefined">{{business.position.address}}</span>
  </b-link>
</template>

<script>
import { BLink } from 'bootstrap-vue';
import axios from 'axios';

export default {
  name: 'AccountBusinessOwnerCard',
  created(){
    axios.get('/api/business/' + this.business.businessId + '/position').then((res) => {
      this.business.position = res.data;
    }).catch((err) =>{
      console.error(err.response.data || err);
    });
  },
  props: {
    business: Object
  },
  components: {
    BLink
  }
}
</script>

<style scoped>
.business-owner-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 0 20px -1px rgba(0, 0, 0, 0.4);
  width: fit-content;

  transition: all 0.15s ease-in-out;

  margin-right: 24px;
}

.business-owner-card:hover {
  box-shadow: 0 0 10px 5px rgba(20, 62, 199, 0.4);
}

a, a:hover > * {
  text-decoration: none;
}

</style>