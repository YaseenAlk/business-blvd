<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './components/nav/Navbar.vue';
import { eventBus } from './main.js';

export default {
  name: 'App',
  created(){


    // Check session matches
    axios.get('/api/users/loginStatus').then((res) => {

      let cookieUserID = this.$cookie.get('business-blvd-userID');
      
      // Signed out on server, but signed in on client
      if( res.data.userId === undefined && cookieUserID !== '' ){
          eventBus.$emit('successful-logout');
      }

      // Signed in on server, but signed out on client
      if( res.data.userId !== undefined && cookieUserID === '' ){
        let user = { username: res.data.username, userID: res.data.userId };
          eventBus.$emit('successful-login', user);
      }

    }).catch((err) => {
      console.log(err.response.data.message);
    });

    eventBus.$on('successful-login', (user) => {
      this.$cookie.set('business-blvd-userID', user.userID);
    });

    eventBus.$on('successful-logout', () => {
      this.$cookie.set('business-blvd-userID', '');
    });
  },
  components: {
    Navbar
  },
  mounted() {
    axios.get('/heartbeat')
    .then(() => {
      console.log('Server connected.');
    }).catch((err) => {
      console.log(err.response.statusText);
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: grid;
  grid-template-rows: min-content auto;
  height: 100%;
}
</style>
