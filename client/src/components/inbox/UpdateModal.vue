<template>
  <div>
    <b-modal id="update" title="Send an update" hide-footer>
      <b-form id="update-form" @submit.prevent="() => onSubmit(businessID)" class="form-content">
          <b-form-textarea id="update" v-model="form.update" size="sm" required rows="3" placeholder="Update" />
          <b-alert class="alert" variant="success" v-bind:show="success !== undefined">{{success}}</b-alert>
          <b-alert class="alert" variant="danger" v-bind:show="error !== undefined">{{error}}</b-alert>
          <b-button style="margin-top: 12px; float: right;" type="submit" class="modal-button" variant="primary">
            <span v-if="!loading">Send</span>
            <b-spinner v-else small />
          </b-button>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import { BForm, BFormTextarea, BAlert } from 'bootstrap-vue';
import axios from 'axios';
export default {
  name: 'BusinessUpdate',
  components: {
    BForm,
    BFormTextarea,
    BAlert,
  },
  props: {
    businessID: String,
  },
  methods: {
    clearAlerts(){
        this.success = undefined;
        this.error = undefined;
    },
    onSubmit: function(businessID){
        this.clearAlerts(); 
        this.loading = true;
        const body = {
          businessId:businessID,
          content: this.form.update,
        }
        axios.post('/api/updates', body).then((res) => {
          this.success = res.data.message;
          this.$bvModal.hide('update');
        }).catch((err) => {
          this.error = err.response.data.message || err.toString();
        })
        .finally(() => {
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
        update: undefined,
      },
      success: undefined,
      error: undefined,
      loading: false,
    };
  }
}
</script>