<template>
    <b-jumbotron bg-variant="primary" text-variant="white" border-variant="light" class="header">
      <template #header>{{name}}</template>
      <template #lead>
        {{address}} 
        <br/>
        <br/>
        {{ phone }}
      </template>  
    </b-jumbotron>
</template>

<script>
export default {
    name: 'Header',
    props: {
        business: Object,
    },
    computed: {
      name(){
        return this.business.name;
      },
      address(){
        return this.business.position.address;
      },
      phone(){
        return this.business.phone;
      }
    },
}
</script>

<style>
.header {
    width: 85%;
}
</style>