<template>
    <b-jumbotron bg-variant="primary" text-variant="white" border-variant="light" class="header">
      <template #header>{{business.name}}</template>
      <template #lead>
        {{business.address}}
      </template>  
    </b-jumbotron>
</template>

<script>
export default {
    name: 'Header',
    props: {
        business: Object,
    }
}
</script>

<style>
.header {
    width: 85%;
}
</style>