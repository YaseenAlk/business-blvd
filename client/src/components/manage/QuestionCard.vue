<template>
<div v-if="question" class="question">
   <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
      <b-form-group
        :id="'q-group-'+ question"
        :label="question"
        :label-for="'q-'+ question"
      >
        <b-form-input
          :id="'q-'+ question"
          v-model="form.answer"
          type="text"
          required
          placeholder="Answer here!"
        ></b-form-input>
      </b-form-group>
      <b-form-checkbox v-model="form.publicity" name="publicity-switch" switch>
        <p>{{form.publicity ? 'Public' : 'Private'}}</p>
      </b-form-checkbox>
      <b-alert variant="success" v-bind:show="successMessage !== undefined">{{successMessage}}</b-alert>
      <b-alert variant="danger" v-bind:show="errorMessage !== undefined">{{errorMessage}}</b-alert>
      <b-col>
        <b-button type="submit" variant="success" class="d-flex justify-content-center align-items-center" style="margin: 0 auto 8px auto">
          <span v-if="!answerLoading">Answer Question</span>
          <b-spinner v-else small />
        </b-button>
        <b-button v-on:click="deleteQuestion" variant="danger" class="d-flex justify-content-center align-items-center" style="margin: 0 auto 8px auto">
          <span v-if="!deleteLoading">Discard Question</span>
          <b-spinner v-else small />
        </b-button>
      </b-col>
   </b-form>
</div>

</template>
<script>
import axios from 'axios';

export default {
  name: 'QuestionCard',
  props: {
    businessId: String,
    question: String,
    id: String,
  },
  data() {
    return {
      form: {
        answer: undefined,
        publicity: false,
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
      
      axios.post('/api/inquiries/' + this.id + '/answer', this.form).then((res) =>{
        this.successMessage = res.data.message;
      })
      .then(() => {
        if (this.form.publicity) {
          return axios.post('/api/inquiries/' + this.id + '/publicity' )
        } else {
          return axios.delete('/api/inquiries/' + this.id + '/publicity' )
        }
      })
      .catch((err) => {
        this.errorMessage = err.response.data.message || err;
      }).then(() => this.answerLoading = false);
    },
    deleteQuestion(){
      console.log('deleting question');
    },
    onReset() {
      this.form.name = undefined;
      
      // Reset the validation state.
      this.show = false;
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style scoped>
.question {
  border-style: solid;
  border-width: 1px;
  padding: 1em;
}
</style>