<template>
  <div>
    <b-spinner v-if="isLoading" variant="primary" class="inbox-spinner"></b-spinner>
    <div v-else-if="ownsNone">
      <InboxNoOwnershipAlert />
    </div>
    <div v-else-if="inquiryFetchError !== undefined">
      <b-alert variant="danger" v-show="inquiryFetchError !== undefined">{{inquiryFetchError}}</b-alert>
    </div>
    <div v-else-if="inquiries.length === 0 ">
      <InboxEmptyAlert />
    </div>
    <div v-else-if="inquiries.length > 0"> 
      <section v-for="inquiry in inquiries" :key="inquiry.id">
        <div class="question-container">
          <InboxQuestionCard :inquiry="inquiry" :businessId="selectedBusinessId" :key="inquiry.id"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../../main';

import InboxEmptyAlert from './InboxEmptyAlert.vue';
import InboxNoOwnershipAlert from './InboxNoOwnershipAlert.vue';
import InboxQuestionCard from './InboxQuestionCard.vue';

export default {
  name: 'InboxBody',
  created(){
    eventBus.$on('inbox-select-change', (selectedObject) => {

      if( selectedObject === undefined){
        this.ownsNone = true;
        this.isLoading = false;
      } else {
        this.isLoading = true;
        const { value } = selectedObject;
        this.selectedBusinessId = value;
        this.loadQuestions(value);
      }
    });
  },
  data(){
    return {
      inquiries: [],
      isLoading: true,
      ownsNone: false,
      selectedBusinessId: undefined,
      inquiryFetchError: undefined,
    }
  },
  components: {
    InboxEmptyAlert,
    InboxNoOwnershipAlert,
    InboxQuestionCard
  },
  methods: {
    loadQuestions(id){
      axios.get('/api/inquiries/business/' + id).then((res) => {
        this.inquiries = res.data;
      }).catch((err) => {
        this.inquiryFetchError = err.response.data.message || err;
      }).finally(() => this.isLoading = false);
    }
  }
}
</script>

<style>
.question-container {
  margin-bottom: 1.25rem;
}
</style>