<template>
  <div class="home-page">
      <HomePageGrid />
  </div>
</template>

<script>
import HomePageGrid from '@/components/home/HomePageGrid.vue';

export default {
    name: 'Home',
    components: {
        HomePageGrid,
    }
}
</script>

<style scoped>
.home-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
}
</style>