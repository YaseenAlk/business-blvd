<template>
<div>
  <div class="account-title">
    <h2>Edit Account</h2>
    <i>Edit your profile.</i>
  </div>
  <div>
    <b-form id="editEmail" class="form" @submit.prevent="submitEmail">
        <h4 class="form-title">Update Account Email</h4>
        <b-form-group label="Email:" label-for="email" label-align="left" label-cols-sm="4">
            <b-form-input required id="email" type="email" v-model="form.newEmail" />
        </b-form-group>
        <b-alert variant="success" v-bind:show="emailSuccess !== undefined">{{emailSuccess}}</b-alert>
        <b-alert variant="danger" v-bind:show="emailError !== undefined">{{emailError}}</b-alert>
        <b-button class="form-button" type="submit" variant="success">Update Email</b-button>
    </b-form>
    <b-form id="editUsername" class="form" @submit.prevent="submitUsername">
        <h4 class="form-title">Update Account Username</h4>
        <b-form-group label="Username:" label-for="username" label-align="left" label-cols-sm="4">
            <b-form-input required id="username" type="text" v-model="form.newUsername" />
        </b-form-group>
        <b-alert variant="success" v-bind:show="usernameSuccess !== undefined">{{usernameSuccess}}</b-alert>
        <b-alert variant="danger" v-bind:show="usernameError !== undefined">{{usernameError}}</b-alert>
        <b-button class="form-button" type="submit" variant="success">Update Username</b-button>
    </b-form>
    <b-form id="editPassword" class="form" @submit.prevent="submitPassword">
        <h4 class="form-title">Update Account Password</h4>
        <b-form-group label="Current Password:" label-for="currentPassword" label-align="left" label-cols-sm="4">
            <b-form-input required id="currentPassword" type="password" v-model="form.newCurrentPassword" />
        </b-form-group>
        <b-form-group label="New Password:" label-for="newPassword" label-align="left" label-cols-sm="4">
            <b-form-input required id="newPassword" type="password" v-model="form.newPassword1" />
        </b-form-group>
        <b-form-group label="Confirm New Password:" label-for="confirmPassword" label-align="left" label-cols-sm="4">
            <b-form-input required id="confirmPassword" type="password" v-model="form.newPassword2"  />
        </b-form-group>
        <b-alert variant="success" v-bind:show="passwordSuccess !== undefined">{{passwordSuccess}}</b-alert>
        <b-alert variant="danger" v-bind:show="passwordError !== undefined">{{passwordError}}</b-alert>
        <b-button class="form-button" type="submit" variant="success">Update Password</b-button>
    </b-form>
  </div>
</div>
</template>

<script>
import { BForm, BFormGroup, BFormInput, BAlert } from 'bootstrap-vue';
export default {
  name: 'AccountEditProfile',
  props: {
    userId: String,
  },
  data(){
    return {
      loggedIn: this.$cookie.get('business-blvd-userId'),
      form: {
        currentEmail: undefined,
        currentUsername: undefined,
        currentPassword: undefined,

        newEmail: undefined,
        newUsername: undefined,
        newCurrentPassword: undefined,
        newPassword1: undefined,
        newPassword2: undefined, 
      },

      emailSuccess: undefined,
      emailError: undefined,

      usernameSuccess: undefined,
      usernameError: undefined,

      passwordSuccess: undefined,
      passwordError: undefined,
    }
  },
  methods: {
    submitEmail: function(){
    this.emailSuccess = undefined;
    this.emailError = undefined;

    console.log('email click');

    this.emailError = "No axios connection to update email";

    // TODO: axios connection
    },
    submitUsername: function(){
      this.usernameSuccess = undefined;
      this.usernameError = undefined;

      console.log('username click');

      this.usernameError = "No axios connection to update email";

      // TODO: axios connection
    },
    submitPassword: function(){
      this.passwordSuccess = undefined;
      this.passwordError = undefined;

      if( this.form.newPassword1 !== this.form.newPassword2 ){
          this.passwordError = "New passwords must match";
          return
      }

      this.passwordError = "No axios connection to update password";

      console.log('password click');

      // TODO: axios connection
    }
  },
  components: {
    BForm, 
    BFormGroup, 
    BFormInput, 
    BAlert
  }
}
</script>

<style>
.account-title {
  text-align: left;
}

.form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 1.5rem 0;
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