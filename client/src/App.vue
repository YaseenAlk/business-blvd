<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './components/nav/Navbar.vue';

export default {
  name: 'App',
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

  width: 100vw;
  height: 100vh;

  background-color: #4d5b8a;
  color: white;
}
</style>
