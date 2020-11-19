<template>
    <div class="flex-row justify-space-between align-items-center navbar">
        <router-link to="/" class="title-link">
            <h1 class="navbar-title">{{title}}</h1>
        </router-link>
        <b-nav class="flex-row align-items-center">
            <router-link to="/map">Map</router-link>
            <b-nav-item-dropdown right text="Account">
                <b-nav-item to="/account">Profile</b-nav-item>
                <b-nav-item to="/signup">Sign Up</b-nav-item>
                <b-nav-item to="/signin">Sign In</b-nav-item>
                <b-nav-item to="/signout">Sign Out</b-nav-item>
            </b-nav-item-dropdown>
        </b-nav>
    </div>
</template>

<script>
import { BNav, BNavItem, BNavItemDropdown } from 'bootstrap-vue';

export default {
    name: 'Navbar',
    data(){
        return {'title': 'Business Boulevard'};
    },
    components: {
        BNav,
        BNavItem,
        BNavItemDropdown,
    },
}
</script>

<style>

.title-link, .title-link:hover, .navbar-title:hover {
    text-decoration: none;
}

.navbar {
    padding: 1em;
    box-shadow: 0 0 20px -1px rgba(0, 0, 0, 0.4);
    z-index: 1;
}

h1 {
    margin-bottom: 0;
}

.navbar-title {
    text-align: left;
}
</style>