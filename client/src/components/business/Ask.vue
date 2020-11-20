<template>
  <div>
    <b-toast id="toast" variant="info" toaster="b-toaster-bottom-right" no-auto-hide>
      <template v-slot:toast-title>
        <h6>Have a question?</h6>
      </template>
      <b-button variant="primary" v-b-modal.question>Just ask.</b-button>
      <b-modal id="question" title="Submit a question" hide-backdrop ok-disabled content-class="shadow" >
         <b-form id="question-form" @submit.prevent="onSubmit" class="form-content">
            <b-form-input id="question" type="question" v-model="form.email" size="sm" required/>
            <b-alert variant="success" v-bind:show="success !== undefined">{{success}}</b-alert>
            <b-alert variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
        </b-form>
        <template #modal-footer="{ ok }">
          <b-button size='md' variant="primary" @click="() => { 
              onSubmit();
              if (!error) {
                ok();
              }
            }" >
            Submit
          </b-button>

        </template>
      </b-modal>
    </b-toast>
  </div>
</template>
<script>
import { BForm, BFormInput, BAlert } from 'bootstrap-vue';
// import axios from 'axios';
export default {
    name: 'Ask',
    components: {
        BForm, 
        BFormInput,
        BAlert,
    },
    mounted() {
      this.$bvToast.show('toast');
    },
    methods: {
        clearAlerts(){
            this.success = undefined;
            this.error = undefined;
        },
        onSubmit: function(){
            this.clearAlerts(); 
            this.error = 'No backend yet :(';
            // axios.post('/api/users', this.form).then((res) => {
            //     this.success = res.data.message;
            // }).catch((err) => {
            //     this.error = err.response.data.message;
            // });
        },
    },
    data() {
      return {
        form: {
            question: undefined,
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