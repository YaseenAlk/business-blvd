<template>
    <div class="form-container">
        <h2>Sign Up</h2>
        <i>Create an account to access Business Boulevard.</i>
        <b-form id="signup-form" @submit.prevent="onSubmit" class="form-content">
            <b-form-group label="Enter a username:" label-for="username" label-align="left" label-cols-sm="4">
                <b-form-input id="username" type="text" v-model="form.username" size="sm" required/>
            </b-form-group>
            <b-form-group label="Enter a password:" label-for="password" label-align="left" label-cols-sm="4">
                <b-form-input id="password" type="password" v-model="form.password" size="sm" required/>
            </b-form-group>
            {{fields}}
            <b-alert variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
            <b-button type="submit" variant="success">Sign Up</b-button>
        </b-form>
    </div>
</template>

<script>
import { BForm, BFormInput, BFormGroup, BAlert } from 'bootstrap-vue';

export default {
    name: 'SignUp',
    components: {
        BForm, 
        BFormInput,
        BFormGroup,
        BAlert,
    },
    methods: {
        onSubmit: function(){
            this.fields = JSON.stringify(this.form);
            console.log("Submitted form", this.fields);
            this.error = "Missing Axios connection for user authentication 😕.";
            
            //TODO: Connect axios for User Sign Up
        },
    },
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
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