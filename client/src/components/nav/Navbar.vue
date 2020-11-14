<template>
    <div class="flex-row justify-space-between align-items-center navbar">
        <router-link to="/">
            <h1 class="navbar-title">{{title}}</h1>
        </router-link>
        <BNav>
            <BNavItemDropdown right text="Account">
                <BNavItem to="/account">Profile</BNavItem>
                <BNavItem to="/signup">Sign Up</BNavItem>
                <BNavItem to="/signin">Sign In</BNavItem>
                <BNavItem to="/signout">Sign Out</BNavItem>
            </BNavItemDropdown>
        </BNav>
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
.navbar {
    background-color: #102b49;
    padding: 1em;
    position: sticky;
    top: 0;
}

.navbar-title {
    text-align: left;
}
</style>