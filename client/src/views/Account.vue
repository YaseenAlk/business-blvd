<template>
    <div class="account-page">
        <AccountHeader />
        <AccountOwner />
        <AccountSettings />
    </div>
</template>

<script>
import AccountHeader from '../components/account/AccountHeader.vue';
import AccountOwner from '../components/account/AccountOwner.vue';
import AccountSettings from '../components/account/AccountSettings.vue';

import { eventBus } from '../main.js';
import axios from 'axios';

export default {
    name: 'Account',
    created(){
        eventBus.$on('successful-logout', () => {
            this.$router.push('/login');
        });

        axios.get('/loginStatus').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.error(err.response.data || err)
        })
    },
    components: {
        AccountHeader,
        AccountOwner,
        AccountSettings,
    }
}
</script>

<style>
.account-title {
    margin-bottom: 2rem;
}

.account-page {
    overflow: scroll;
    padding: 1em;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.form {
    display: flex;
    flex-direction: column;
    max-width: 65%;
    margin: auto;
    padding: 1.5rem;
}

.form-title {
    text-align: left;
    margin-bottom: 1.25rem;   
}

.form-button {
    width: fit-content;
    padding-left: 2rem;
    padding-right: 2rem;
    align-self: flex-end;
}
</style>