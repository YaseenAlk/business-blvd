<template>
    <div class="form-container">
        <h2>Sign Up</h2>
        <i>Create an account to access Business Boulevard.</i>
        <b-form id="signup-form" @submit.prevent="onSubmit" class="form-content">
            <b-form-group label="Email address:" label-for="email" label-align="left" label-cols-sm="4">
                <b-form-input id="email" type="email" v-model="form.email" size="sm" required/>
            </b-form-group>
            <b-form-group label="Username:" label-for="username" label-align="left" label-cols-sm="4">
                <b-form-input id="username" type="text" v-model="form.username" size="sm" required/>
            </b-form-group>
            <b-form-group label="Password:" label-for="password" label-align="left" label-cols-sm="4">
                <b-form-input id="password" type="password" v-model="form.password" size="sm" required/>
            </b-form-group>
            <b-alert variant="success" v-bind:show="success !== undefined">{{success}}</b-alert>
            <b-alert variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
            <b-button type="submit" variant="success">Sign Up</b-button>
        </b-form>
    </div>
</template>

<script>
import { BForm, BFormInput, BFormGroup, BAlert } from 'bootstrap-vue';
import axios from 'axios';

export default {
    name: 'SignUp',
    components: {
        BForm, 
        BFormInput,
        BFormGroup,
        BAlert,
    },
    methods: {
        clearAlerts(){
            this.success = undefined;
            this.error = undefined;
        },
        onSubmit: function(){
            this.clearAlerts(); 
            axios.post('/api/users', this.form).then((res) => {
                this.success = res.data.message;
            }).catch((err) => {
                this.error = err.response.data.message;
            });
        },
    },
    data() {
      return {
        form: {
            email: undefined,
            username: undefined,
            password: undefined,
        },
        success: undefined,
        error: undefined,
        fields: undefined //for debugging purposes, remove in deployment
      };
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