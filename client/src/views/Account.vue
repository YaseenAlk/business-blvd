<template>
    <div class="account-container">
        <div class="account-content">
            <h1 class="account-section">Account Settings</h1>
            <AccountHeader v-bind:user="user" class="account-section"/>
            <hr />
            <AccountOwner v-bind:user="user" class="account-section"/>
            <hr />
            <AccountEditProfile v-bind:user="user" class="account-section"/>
        </div>
    </div>
</template>

<script>
import AccountHeader from '../components/account/AccountHeader.vue';
import AccountOwner from '../components/account/AccountOwner.vue';
import AccountEditProfile from '../components/account/AccountEditProfile.vue';

import { eventBus } from '../main.js';
import axios from 'axios';

export default {
    name: 'Account',
    beforeCreate(){
        if( this.$cookie.get('business-blvd-userID') === '' || this.$cookie.get('business-blvd-userID') === undefined ){
            this.$router.push('/login');
        }
    },
    created(){
        eventBus.$on('successful-logout', () => {
            this.$router.push('/login');
            this.user = undefined;
        });

        axios.get('/api/users/loginStatus').then((res) => {
            this.user = res.data;
        }).catch((err) => {
            console.error(err.responses.data || err);
        });
    },
    data(){
        return {
            user: {},
        };
    },
    components: {
        AccountHeader,
        AccountOwner,
        AccountEditProfile,
    }
}
</script>

<style>
.account-container {
    overflow: scroll;
}

.account-content {
    max-width: 85%;
    margin: auto;
}

.account-section {
    margin: 32px 0;
}

</style>