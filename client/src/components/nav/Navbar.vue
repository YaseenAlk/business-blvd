<template>
    <div class="flex-row justify-space-between align-items-center navbar">
        <router-link to="/" class="title-link">
            <h1 class="navbar-title">{{title}}</h1>
        </router-link>
<<<<<<< HEAD
        <div class="flex-row align-items-center">
            <router-link to="/map">Map</router-link>
            <BNav>
                <BNavItemDropdown right text="Account">
                    <BNavItem to="/account">Profile</BNavItem>
                    <BNavItem to="/signup">Sign Up</BNavItem>
                    <BNavItem to="/signin">Sign In</BNavItem>
                    <BNavItem to="/signout">Sign Out</BNavItem>
                </BNavItemDropdown>
            </BNav>
        </div>
=======
        <b-nav>
            <b-nav-item-dropdown right text="Account">
                <b-nav-item to="/account">Profile</b-nav-item>
                <b-nav-item to="/signup">Sign Up</b-nav-item>
                <b-nav-item to="/signin">Sign In</b-nav-item>
                <b-nav-item to="/signout">Sign Out</b-nav-item>
            </b-nav-item-dropdown>
        </b-nav>
>>>>>>> dcb6c3f (updated navbar to use Bootsrap tags)
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
    background-color: #102b49;
    padding: 1em;
}

.navbar-title {
    text-align: left;
    color: white;
}
</style>