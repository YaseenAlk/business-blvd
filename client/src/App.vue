<template>
  <div id="app">
    <Navbar />
    <ToastManager />
    <router-view class="app-body" />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './components/nav/Navbar.vue';
import ToastManager from './ToastManager.vue';
import { eventBus } from './main.js';

export default {
  name: 'App',
  created(){

    // Check session matches
    axios.get('/api/users/loginStatus').then((res) => {
    
      let cookieUserID = this.$cookie.get('business-blvd-userId');
      let emptyCookie = ( cookieUserID === 'undefined' || cookieUserID === '' );
      
      // Signed out on server, but signed in on client
      if( res.data.userId === undefined && !emptyCookie ){
          eventBus.$emit('successful-logout');
          return
      }

      // Signed in on server, but signed out on client
      if( res.data.userId !== undefined && emptyCookie ){
        let user = { username: res.data.username, userId: res.data.userId };
        eventBus.$emit('successful-login', user);
        return
      }

    }).catch((err) => {
      console.log(err.response.data.message);
    });

    eventBus.$on('successful-login', (user) => {
      this.$cookie.set('business-blvd-userId', user.userId);
    });

    eventBus.$on('successful-logout', () => {
      this.$cookie.set('business-blvd-userId', '');
    });
  },
  components: {
    Navbar,
    ToastManager
  },
  mounted() {
    axios.get('/heartbeat')
    .then(() => {
      console.log('Server connected.');
    })
    .catch((err) => {
      console.log(err.response.statusText);
    });
  }
}
</script>

<style>

h1, h2, h3, h4, h5, h6, nav > a {
  color: #1B5299 !important;
}

:root {
  --background-color: #B1C5D3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: grid;
  grid-template-rows: min-content 0px auto;
  height: 100%;
}

.app-body{
  overflow: scroll;
  min-width: 100vw;
  margin: 0;
}

.btn-blvd {
  background-color: #1B5299;
}


</style>
