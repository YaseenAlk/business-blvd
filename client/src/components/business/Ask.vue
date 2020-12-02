<template>
  <div>
    <b-toast id="toast" variant="info" toaster="b-toaster-bottom-right" no-auto-hide>
      <template v-slot:toast-title>
        <h6 class="toast-title">Have a question?</h6>
      </template>
      <b-button variant="primary" v-b-modal.question>Just ask.</b-button>
      <b-modal id="question" title="Submit a question" hide-backdrop content-class="shadow" hide-footer>
         <b-form id="question-form" @submit.prevent="onSubmit" class="form-content">
            <b-form-textarea id="question" v-model="form.question" size="sm" required rows="3" placeholder="Enter a question for this business" />
            <b-alert class="alert" variant="success" v-bind:show="success !== undefined">{{success}}</b-alert>
            <b-alert class="alert" variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
            <b-button type="submit" class="modal-button" variant="primary">Send question</b-button>
        </b-form>
      </b-modal>
    </b-toast>
  </div>
</template>
<script>
import { BForm, BFormTextarea, BAlert } from 'bootstrap-vue';
import axios from 'axios';

export default {
    name: 'Ask',
    props: {
      business: Object,
    },
    components: {
        BForm, 
        BFormTextarea,
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
            console.log(this.form);
            axios.post('/api/inquiries', this.form).then((res) => {
              this.success = res.data.message;
              //this.$bvModal.hide('question');
            }).catch((err) => {
              this.error = err.response.data.message || err;
            });
        },
        handleSubmit: () => { 
          this.onSubmit();
        }
    },
    data() {
      return {
        form: {
            businessId: this.business.businessId,
            question: undefined,
        },
        success: undefined,
        error: undefined,
      };
    }
}
</script>

<style scoped>
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
    display: flex;
    flex-direction: column;
}

.alert {
  margin-top: 16px;
}

.toast-title {
  padding-top: 8px;
}

.modal-button {
  align-self: flex-end;
  margin-top: 1rem;
}

</style>