<template>
    <div class="form-container">
        <h2>Log In</h2>
        <i>Log In to access your Business Boulevard.</i>
        <b-form id="login-form" @submit.prevent="onSubmit" class="form-content">
            <b-form-group label="Username:" label-for="username" label-align="left" label-cols-sm="4">
                <b-form-input id="username" type="text" v-model="form.username" size="sm" required/>
            </b-form-group>
            <b-form-group label="Password:" label-for="password" label-align="left" label-cols-sm="4">
                <b-form-input id="password" type="password" v-model="form.password" size="sm" required/>
            </b-form-group>
            {{fields}}
            <b-alert variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
            <b-button type="submit" variant="success">Log In</b-button>
        </b-form>
    </div>
</template>

<script>
import { BForm, BFormGroup, BFormInput, BButton, BAlert } from 'bootstrap-vue';
import { eventBus } from '../main';
import axios from 'axios';

export default {
    name: 'LogIn',
    components: {
        BForm, 
        BFormGroup,
        BFormInput,
        BButton,
        BAlert,
    },
    data(){
        return {
            form: {
                username: undefined,
                password: undefined,
            },
            error: undefined,
            fields: undefined // For debugging purposes, remove for deployment
        };
    },
    methods: {
        clearAlerts(){
            this.error = undefined;
        },
        onSubmit: function(){
            this.clearAlerts();
            axios.post('/api/users/signin', this.form).then((res) => {
                let user = { username: res.data.username, userID: res.data.userId };
                eventBus.$emit('successful-login', user);
                this.$router.push('/map');
            }).catch((err) => {
                this.error = err.response.data.message;
            });
        }
    }
}
</script>

<style>
.form-container {
    display: flex;
    flex-direction: column;
    margin: 32px;
    justify-content: center;
    align-items: center;
}

.form-content {
    margin-top: 16px;
    min-width: 400px;
    width: 100%;
    max-width: 500px;
}
</style>