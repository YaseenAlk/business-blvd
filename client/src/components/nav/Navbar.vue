<template>
    <div class="flex-row justify-space-between align-items-center navbar">
        <router-link to="/" class="title-link">
            <h1 class="navbar-title">Business Boulevard</h1>
        </router-link>
        <b-nav class="flex-row align-items-center">
            <router-link to="/map">Map</router-link>
            <b-nav-item-dropdown right v-bind:text="dropdownText">
                <b-dropdown-item v-if="loggedIn" to="/account">Profile</b-dropdown-item>
                <b-dropdown-divider v-if="loggedIn" />
                <b-dropdown-item v-if="!loggedIn" to="/signup">Sign Up</b-dropdown-item>
                <b-dropdown-item v-if="!loggedIn"  to="/login">Log In</b-dropdown-item>
                <b-dropdown-item v-if="loggedIn" v-on:click="handleLogOut">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </div>
</template>

<script>
import { BNav, BDropdownItem, BNavItemDropdown, BDropdownDivider } from 'bootstrap-vue';
import { eventBus } from '../../main.js';

import axios from 'axios';

export default {
    name: 'Navbar',
    created(){
    
        eventBus.$on('successful-login', (user) => {
            this.loggedIn = true;
            this.loggedInUser = user;
            this.dropdownText = user.username;
        });

        eventBus.$on('successful-logout', () => {
            this.loggedIn = false;
            this.loggedInUser = undefined;
            this.dropdownText = 'Account';
        });

    },
    data(){
        return {
            dropdownText: 'Account',
            loggedInUser: undefined,
            loggedIn: false,
        };
    },
    components: {
        BNav,
        BDropdownItem,
        BNavItemDropdown,
        BDropdownDivider,
    },
    methods: {
        handleLogOut: function(){

            axios.post('/api/users/signout').then(() => {
                eventBus.$emit('successful-logout');

                if( this.$route.path !== "/" ){
                    this.$router.push('/');
                }
            });

        }
    }
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