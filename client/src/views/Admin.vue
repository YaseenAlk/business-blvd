<template>
<div>
  <h1>Select one of your businesses:</h1>
  <div class="container">
    <b-card-group deck>
      <b-card
        v-for="business in ownedBusinesses"
        :key="business.businessId"
        border-variant="primary"
        :header="business.name"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
        style="min-height: fit-content; min-width: fit-content"
      >
        <b-card-text><h4>{{ business.description }} </h4></b-card-text>
        <b-card-body>
          <b-button variant="primary" :to="`/manage/${business.businessId}`">
            Manage
          </b-button>
        </b-card-body>
      </b-card>
    </b-card-group>
  </div>
</div>
</template>
<script>
import { eventBus } from '../main.js';
import axios from 'axios';
export default {
  name: "Claimed",
  data() {
    return {
      user: undefined,
      ownedBusinesses: undefined,
    }
  },
  created(){
    eventBus.$on('successful-logout', () => {
        this.user = undefined;
    });
    
    axios.get('/api/users/loginStatus')
      .then((res) => {
        if (!res.data.signedIn) {
          this.$router.push('/login');
        }
        this.user = res.data;
        return res.data
      })
      .then(() => {
        // TODO(johancc) - Change to /api/users/businesses after
        // debugging.
        return axios.get("/api/business/all")
      })
      .then((res) => {
        console.log(res);
        return res.data
      })
      .then((owned) => {
        this.ownedBusinesses = owned;
      })
      .catch((err) => {
        console.error(err.responses.data || err);
      });
    },
}
</script>

