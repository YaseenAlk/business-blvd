<template>
    <b-jumbotron style="background-color: #1B5299" text-variant="white" border-variant="light" class="header">
      <template #header><div style="color: white">{{name}}</div></template>
      <template #lead>
        {{address}} 
        <br/>
        <br/>
        {{ phone }}
      </template> 
      <template $footer class="justify-content-md-center">
        <Subscribe class="business-section" :business="business"/>
      </template> 
    </b-jumbotron>
</template>

<script>
import Subscribe from './Subscribe.vue';

export default {
    name: 'Header',
    components: {
      Subscribe,
    },
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