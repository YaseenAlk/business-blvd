<template>
  <div class="owner-section">
    <div>
      <b-spinner v-if="isLoading" variant="primary" style="margin-top: 12px"></b-spinner>
      <p v-else-if="ownedBusinesses.length === 0" >
          Currently, you are not listed as a business owner for any page. <b-link to="/claim">Claim a business here as the owner.</b-link>
      </p>
      <div v-else>
        <i class="business-subtitle">Don't see your business? <b-link to="/claim">Claim a business here as the owner.</b-link></i>
        <section class="business-row-items">
          <div v-for="b in ownedBusinesses" v-bind:key="b.businessId">
            <AccountBusinessOwnerCard v-bind:business="b" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AccountBusinessOwnerCard from './AccountBusinessOwnerCard.vue';

export default {
  name: 'AccountOwner',
  beforeCreate() {
    axios.get('/api/users/businesses').then((res) => {
      return Promise.all(res.data.map(id => axios.get(`/api/business/${id}`)));
    }).then(results => {
      this.ownedBusinesses = results.map(response => response.data);
      this.isLoading = false;
    }).catch((err) => {
      console.log('err', err.response.data || err.toString());
      this.isLoading = false;
    });
  },
  props: {
    userId: String,
  },
  data(){
    return {
      isLoading: true,
      ownedBusinesses: [],
    };
  },
  components: {
    AccountBusinessOwnerCard,
  }
}
</script>

<style>
.owner-title {
  margin: 0;
}

.owner-section {
  text-align: left;
  margin: 1em 0;
}

.business-row-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
}

.business-subtitle {
  margin-bottom: 16px;
}

</style>