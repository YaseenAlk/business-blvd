<template>
  <div>
    <b-card no-body class="mb-1 question-border">
      <b-card-header header-tag="header" role="tab">
        <b-button block v-b-toggle="inquiry.id" variant="transparent" class="text-left d-flex align-items-center" >
          <b-icon-circle-fill size="sm" style="margin-right: 8px" v-bind:variant="shouldBold ? 'primary' : 'secondary'"></b-icon-circle-fill>
          <div v-bind:class="shouldBold ? 'question-title-open' : 'question-title-answered'">{{inquiry.question}}</div>
        </b-button>
      </b-card-header>
      <b-collapse v-bind:id="inquiry.id" accordion="answer-accordion" role="tabpanel" class="">
        <b-card-body>
          <AnswerQuestionForm :inquiry="inquiry" />
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import AnswerQuestionForm from '../manage/AnswerQuestionForm';
import { eventBus } from '../../main.js';

import { BIconCircleFill } from 'bootstrap-vue'

export default {
  name: 'QuestionCard',
  props: {
    businessId: String,
    inquiry: Object,
  },
  created(){
    eventBus.$on('answer-question-success', (id) => {
      if(id === this.inquiry.id){
        this.shouldBold = false;
      }
    });
  },
  data(){
    return {
      shouldBold: this.inquiry.answer === null,
    }
  },
  components: {
    AnswerQuestionForm,
    BIconCircleFill
  },
}
</script>
<style scoped>
.question-border {
  border-radius: 12px;
  border-radius: 8px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.question-title-answered {
  font-weight: normal;
}

.question-title-open {
  font-weight: bold;
}

</style>