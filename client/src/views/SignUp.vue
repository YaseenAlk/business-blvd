<template>
    <div class="form-container">
        <h2>Sign Up</h2>
        <i>Create an account to access Business Boulevard.</i>
        <p>Already have an account? <b-link to="/login">Log in here!</b-link></p>
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
            <b-alert variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
            <b-button type="submit" style="background-color: #1B5299">
                <div v-if="!loading">Sign Up</div>
                <b-spinner small v-else></b-spinner>
            </b-button>
        </b-form>
    </div>
</template>

<script>
import { BForm, BFormInput, BFormGroup, BAlert, BSpinner } from 'bootstrap-vue';
import { eventBus } from '@/main';
import axios from 'axios';

export default {
    name: 'SignUp',
    components: {
        BForm, 
        BFormInput,
        BFormGroup,
        BAlert,
        BSpinner,
    },
    methods: {
        clearAlerts(){
            this.error = undefined;
        },
        onSubmit: function(){
            this.clearAlerts(); 
            this.loading = true;
            axios.post('/api/users', this.form).then((res) => {
                let user = { username: this.form.username, userId: res.data.userId };
                eventBus.$emit('show-global-success-toast',("Welcome to BusinessBlvd, " + user.username + "!"));
                eventBus.$emit('successful-login', user);
                this.$router.push('/map');
                this.loading = false;
            }).catch((err) => {
                this.error = err.response.data.message || err.toString();
                this.loading = false;
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
        error: undefined,
        fields: undefined, //for debugging purposes, remove in deployment
        loading: false,
      };
    }
}
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    padding: 32px;
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