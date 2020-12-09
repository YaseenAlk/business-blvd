<template>
  <div>
    <form v-bind:id="'answer-question-' + inquiry.id" @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-form-group label="Answer Question:" label-align="left" label-class="font-weight-bold" required>
        <b-form-textarea v-model="form.answer" v-bind:id="'text-area' + inquiry.id" placeholder="Answer here!" rows="3" max-rows="6"></b-form-textarea>
      </b-form-group>
      <b-form-group label="Set Audience for Business Answer:" label-align="left" label-class="font-weight-bold" style="margin-top: 12px">
        <b-form-radio-group v-model="form.publicity" stacked class="d-flex flex-col align-items-start" required>
          <b-form-radio name="publicity-radio" value="public">Public (This question and answer will be public on your business page.)</b-form-radio>
          <b-form-radio name="publicity-radio" value="private">Private (Only you and the customer who submitted the question can see this question.)</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <div class="button-row">
        <b-button v-b-modal="'delete-question-' + inquiry.id" variant="danger">
          <span v-if="!deleteLoading"><b>Delete Question</b></span>
          <b-spinner v-else small />
        </b-button>
        <b-modal 
          :id="'delete-question-' + inquiry.id" 
          centered 
          title="Are you sure you want to delete this question?">
          <div><b>Q: </b>{{inquiry.question}}</div>
          <template #modal-footer="{ cancel }">
            <div style="width: 100%; display: flex; justify-content: space-between">
              <b-button size="sm" variant="secondary" @click="cancel()">
                Cancel
              </b-button>
              <b-button size="sm" variant="danger" v-on:click="deleteQuestion">
                Confirm Delete Question
              </b-button>
            </div>
          </template>
        </b-modal>
        <b-button type="submit" variant="success">
          <span v-if="!answerLoading"><b>{{ form.answer === undefined ? 'Answer Question' : 'Update Answer' }}</b></span>
          <b-spinner v-else small />
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main';

export default {
  name: 'AnswerQuestionForm',
  props: {
    inquiry: Object,
  },
  data(){
    return {
      form: {
        answer: this.inquiry.answer || undefined,
        publicity: this.inquiry.publicity,
      },
      show: true,
      answerLoading: false,
      deleteLoading: false,
      successMessage: undefined,
      errorMessage: undefined,
    }
  },
  methods: {
    onSubmit() {
      this.errorMessage = undefined;
      this.answerLoading = true;
      
      axios.post('/api/inquiries/' + this.inquiry.id + '/answer', this.form).then((res) =>{
        eventBus.$emit('show-success-toast', res.data);
        eventBus.$emit('answer-question-success', this.inquiry.id);
      })
      .then(() => {
        if (this.form.publicity === 'public') {
          // MAKE PUBLIC
          axios.post('/api/inquiries/' + this.inquiry.id + '/publicity').then((res) => {
            eventBus.$emit('show-success-toast', res.data);(res.data);
          }).catch((err) => {
            eventBus.$emit('show-error-toast', err.response.data.message || err.toString());
          })
        } else {
          // MAKE PRIVATE
          axios.delete('/api/inquiries/' + this.inquiry.id + '/publicity').then((res) => {
            eventBus.$emit('show-success-toast', res.data);(res.data);
          }).catch((err) => {
            eventBus.$emit('show-error-toast', err.response.data.message || err.toString());
          })
        }
      })
      .then(() => this.answerLoading = false)
      .catch((err) => {
        this.errorMessage = err.response.data.message || err.toString();
        this.answerLoading = false;
      });
    },
    deleteQuestion(){
      const id = 'delete-question-' + this.inquiry.id;
      this.$bvModal.hide(id)

      // TODO: Implement delete inquiry route
      eventBus.$emit('show-error-toast', 'Unable to delete question. Axios connection is missing');

    },
    onReset() {
      this.form.name = undefined;
      
      // Reset the validation state.
      this.show = false;
      this.$nextTick(() => {
        this.show = true
      })
    },
  }
}
</script>

<style scoped>
.button-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.radio-question{
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>