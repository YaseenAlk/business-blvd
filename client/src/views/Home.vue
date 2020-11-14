<template>
  <div class="flex-row justify-content-center align-items-center">
      <HomePageGrid />
  </div>
</template>

<script>
import HomePageGrid from '../components/home/HomePageGrid.vue';

export default {
    name: 'Home',
    components: {
        HomePageGrid,
    }
}
</script>