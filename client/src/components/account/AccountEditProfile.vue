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
        <b-button class="form-button" type="submit" variant="success">
          <b-spinner sm v-if="isLoadingEmail"/>
          <div v-else>Update Email</div>
        </b-button>
    </b-form>
    <b-form id="editUsername" class="form" @submit.prevent="submitUsername">
        <h4 class="form-title">Update Account Username</h4>
        <b-form-group label="Username:" label-for="username" label-align="left" label-cols-sm="4">
            <b-form-input required id="username" type="text" v-model="form.newUsername" />
        </b-form-group>
        <b-button class="form-button" type="submit" variant="success">
          <b-spinner v-if="isLoadingUsername"/>
          <div v-else>Update Username</div>
        </b-button>
    </b-form>
    <b-form id="editPassword" class="form" @submit.prevent="submitPassword">
        <h4 class="form-title">Update Account Password</h4>
        <b-form-group label="Current Password:" label-for="currentPassword" label-align="left" label-cols-sm="4">
            <b-form-input required id="currentPassword" type="password" v-model="form.currentPassword" />
        </b-form-group>
        <b-form-group label="New Password:" label-for="newPassword" label-align="left" label-cols-sm="4">
            <b-form-input required id="newPassword" type="password" v-model="form.newPassword1" />
        </b-form-group>
        <b-form-group label="Confirm New Password:" label-for="confirmPassword" label-align="left" label-cols-sm="4">
            <b-form-input required id="confirmPassword" type="password" v-model="form.newPassword2"  />
        </b-form-group>
        <b-button class="form-button" type="submit" variant="success">
          <b-spinner v-if="isLoadingPassword"/>
          <div v-else>Update Password</div>
        </b-button>
    </b-form>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main.js';

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

      isLoadingEmail: false,
      isLoadingUsername: false,
      isLoadingPassword: false,
    }
  },
  methods: {
    submitEmail: function(){
      this.isLoadingEmail = true;
      axios.put(`/api/users`, {email: this.form.newEmail})
        .then((res) => {
          eventBus.$emit('show-success-toast', res.data.message);
          this.form.newEmail = undefined;
        })
        .catch(err => eventBus.$emit('show-error-toast', (err.response.data.message || err.toString())))
        .finally(() => this.isLoadingEmail = false);
    },
    submitUsername: function(){
      this.isLoadingUsername = true;
      axios.put(`/api/users`, {username: this.form.newUsername})
        .then(res => {
          eventBus.$emit('show-success-toast', res.data.message);
          let user = { username: this.form.newUsername, userId: res.data.userId };
          eventBus.$emit('successful-login', user);
          this.form.newUsername = undefined;
        })
        .catch(err => eventBus.$emit('show-error-toast', (err.response.data.message || err.toString())))
        .finally(() => this.isLoadingUsername = false);
    },
    submitPassword: function(){
      this.isLoadingPassword = true;
      if( this.form.newPassword1 !== this.form.newPassword2 ){
          eventBus.$emit('show-error-toast', "New passwords must match");
          this.isLoadingPassword = false;
          return
      }
      axios.put(`/api/users`, {oldPassword: this.form.currentPassword, newPassword: this.form.newPassword1})
        .then(res => {
          eventBus.$emit('show-success-toast', res.data.message);
          this.form.currentPassword = undefined;
          this.form.newPassword1 = undefined;
          this.form.newPassword2 = undefined;
        })
        .catch(err => eventBus.$emit('show-error-toast', (err.response.data.message || err.toString())))
        .finally(() => this.isLoadingPassword = false);
    }
  },
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