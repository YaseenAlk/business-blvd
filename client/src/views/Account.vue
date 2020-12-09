<template>
    <div class="account-container">
        <div class="account-content">
            <h1 class="account-section">Account Settings</h1>
            <AccountHeader v-bind:user="user" class="account-section"/>
            <hr />
            <AccountEditProfile v-bind:user="user" class="account-section"/>
        </div>
    </div>
</template>

<script>
import AccountHeader from '../components/account/AccountHeader.vue';
import AccountEditProfile from '../components/account/AccountEditProfile.vue';
import { eventBus } from '../main.js';

export default {
    name: 'Account',
    created(){
        eventBus.$on('successful-logout', () => {
            this.user = undefined;
        });
    },
    data(){
        return {
            user: {},
        };
    },
    components: {
        AccountHeader,
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