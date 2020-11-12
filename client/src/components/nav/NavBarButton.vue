<template>
    <router-link v-bind:to="to" class="nav-bar-button">
        <p>{{title}}</p>
    </router-link>
</template>

<script>
export default {
    name: 'NavBarButton',
    props: {
        to: String,
        title: String,
    },
}
</script>

<style>
.nav-bar-button {
    margin: 0 1em;
    color: white;
}
</style>