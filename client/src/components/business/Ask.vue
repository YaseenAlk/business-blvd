<template>
  <div>
    <b-button @click="$bvModal.show('question')" variant="primary">
      Ask {{ this.business.name }} a question
    </b-button> 
    <b-modal id="question" title="Submit a question" hide-backdrop content-class="shadow" hide-footer>
      <b-form id="question-form" @submit.prevent="onSubmit" class="form-content">
          <b-form-textarea id="question" v-model="form.question" size="sm" required rows="3" placeholder="Enter a question for this business" />
          <b-alert class="alert" variant="success" v-bind:show="success !== undefined">{{success}}</b-alert>
          <b-alert class="alert" variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
          <b-button type="submit" class="modal-button" variant="success">
            <div class="d-flex align-items-center">
              <span v-if="!loading">Submit</span>
              <b-spinner v-else small />
            </div>
          </b-button>
      </b-form>
    </b-modal>
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
    methods: {
        clearAlerts(){
            this.success = undefined;
            this.error = undefined;
        },
        onSubmit: function(){
            this.clearAlerts(); 
            this.loading = true;
            axios.post('/api/inquiries', this.form).then((res) => {
              this.success = res.data.message;
              this.$bvModal.hide('question');
              this.loading = false;
            }).catch((err) => {
              this.error = err.response.data.message || err.toString();
              this.loading = false;
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
        loading: false,
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