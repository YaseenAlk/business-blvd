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

  display: grid;
  grid-template-rows: min-content auto;
  height: 100%;
}
</style>
