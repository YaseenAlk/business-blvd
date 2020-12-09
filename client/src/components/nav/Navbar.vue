<template>
    <div class="flex-row justify-space-between align-items-center navbar">
        <router-link to="/" class="title-link">
            <Hero/>
        </router-link>
        <div id="navLinks">
          <b-nav class="flex-row align-items-center">
              <div v-if="loggedIn">
                <b-button variant="outline-primary" style="margin-right: 16px;">
                  <b-icon id="subscription-button" icon="bell-fill" :variant="updateData.length > 0 ? 'danger': 'primary'">
                    </b-icon>
                </b-button>
                <b-popover container="navLinks" offset="50" placement="auto" variant="light" target="subscription-button" triggers="hover">
                  <SubscriptionList :onClear="clearUpdates" :updateData="updateData" />
                </b-popover>
              </div>
              <b-nav-item-dropdown right v-bind:text="dropdownText">
                  <b-dropdown-item v-if="loggedIn" to="/account">Account Settings</b-dropdown-item>
                  <b-dropdown-item v-if="loggedIn" to="/manage">Manage Businesses</b-dropdown-item>
                  <b-dropdown-item v-if="loggedIn" to="/inbox">Inbox</b-dropdown-item>
                  <b-dropdown-divider v-if="loggedIn" />
                  <b-dropdown-item v-if="!loggedIn" to="/signup">Sign Up</b-dropdown-item>
                  <b-dropdown-item v-if="!loggedIn" to="/login">Log In</b-dropdown-item>
                  <b-dropdown-item v-if="loggedIn" v-on:click="handleLogOut">Log Out</b-dropdown-item>
              </b-nav-item-dropdown>
          </b-nav>
        </div>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';
import SubscriptionList from '../subscriptions/SubscriptionList.vue';
import Hero from './Hero.vue';

import axios from 'axios';

export default {
    name: 'Navbar',
    components: {
      SubscriptionList,
      Hero,
    },
    beforeCreate(){
        axios
          .get('/api/users/loginStatus').then((res) => {
            if(res.data.userId !== undefined){
              eventBus.$emit('successful-login', res.data);
              return true;
            }
            return false;
          })
          .then((isLoggedIn) => {
            if (isLoggedIn) {
              return axios.get('/api/updates/mine')
                .then((resp) => resp.data)
                .then((updateData) => this.updateData = updateData);
            }
          }).catch((err) => console.error(err.response.data || err));
    },

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
            updateData: [],
        };
    },
    methods: {
        handleLogOut: function(){
            axios.post('/api/users/signout').then((res) => {
                eventBus.$emit('successful-logout');
                eventBus.$emit('show-global-success-toast', res.data.message)
                if( this.$route.path !== "/" ){
                    this.$router.push('/');
                }
            }).catch((err) => {
                eventBus.$emit('show-global-error-toast', err.response.data.message || err)
            });

        },
        clearUpdates: function() {
          this.updateData = [];
        }
    }
}
</script>

<style>

.title-link, .title-link:hover, .navbar-title:hover {
    text-decoration: none;
}

.navbar {
    padding: 0.5rem;
    box-shadow: 0 0 20px -1px rgba(0, 0, 0, 0.4);
    z-index: 1200;
}

.nav-link {
    padding-right: 1em;
}

.navbar-title {
    text-align: left;
    margin-bottom: 0;
}

</style>