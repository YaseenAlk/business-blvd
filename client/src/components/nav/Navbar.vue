<template>
    <div class="flex-row justify-space-between align-items-center navbar">
        <router-link to="/">
            <h1 class="navbar-title">{{title}}</h1>
        </router-link>
        <div class="flex-row">
            <NavBarButton to="/account" title="Account" />
            <NavBarButton to="/signin" title="Sign In" />
            <NavBarButton to="/signup" title="Sign Up" />
            <NavBarButton to="/logout" title="Log Out" />
        </div>
    </div>
</template>

<script>
import NavBarButton from './NavBarButton.vue';
export default {
    name: 'Navbar',
    data(){
        return {'title': 'Business Boulevard'};
    },
    components: {
        NavBarButton,
    },
}
</script>

<style>
.navbar {
    background-color: #102b49;
    color: white;
    padding: 1em;
    position: sticky;
    top: 0;
}

.navbar-title {
    text-align: left;
}
</style>