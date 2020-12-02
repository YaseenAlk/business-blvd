<template>
    <div  class="manage-page" v-if="business">
      <h1> {{ business.name }} </h1>
      {{business.position}}
      <b-container v-if="show" class="manage-form">
        <b-row>
          <b-form class="col-md-8" @submit.prevent="onSubmit" @reset.prevent="onReset">
            <b-form-group
              id="name-group"
              label="Business Name:"
              label-for="name"
            >
              <b-form-input
                type="text"
                v-model="form.name"
                :placeholder="business.name"
                ></b-form-input>
            </b-form-group>

            <b-form-group
              id="description-group"
              label="Description:"
              label-for="description"
            >
              <b-form-input
                type="text"
                v-model="form.description"
                :placeholder="business.description"
                ></b-form-input>
            </b-form-group>
            <b-form-group
              id="address-group"
              label="Address:"
              label-for="address"
            >
              <b-form-input
                type="text"
                v-model="form.position.address"
                ></b-form-input>
            </b-form-group>
            <b-form-group
              id="website-group"
              label="Website:"
              label-for="website"
            >
              <b-form-input
                type="url"
                v-model="form.externalURL"
                :placeholder="business.externalURL"
                ></b-form-input>
            </b-form-group>
            <b-form-group
              id="phone-group"
              label="Phone:"
              label-for="phone"
            >
              <b-form-input
                type="text"
                v-model="form.phone"
                :placeholder="business.phone"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <div class="col-md-4 questions">
            <h4>Community Questions:</h4>
            <div v-if="inquiries.length === 0 ">
              <NoQuestionsFound />
            </div>
            <div v-else-if="inquiryFetchError !== undefined">
              <b-alert variant="danger">{{inquiryFetchError}}</b-alert>
            </div>
            <div v-else> 
              <section v-for="q in inquiries" :key="q.id">
                <QuestionCard :q="q" :question="q.question" :id="q.id" :businessId="business.businessId"/>
              </section>
            </div>
          </div>
        </b-row>
      </b-container>
    <div v-else>
      Loading
    </div>  
  </div>
</template>
<script>
import axios from 'axios';
import QuestionCard from '../components/manage/QuestionCard.vue';
import NoQuestionsFound from '../components/manage/NoQuestionsFound.vue';

export default {
  name: 'Manage',
  beforeCreate: function(){
    axios.get('/api/business/' + this.$route.params.id).then((res) =>{
      this.business = res.data;
    }).catch((err) => {
      console.error(err.response.data || err);
    });

    axios.get('/api/inquiries/business/' + this.$route.params.id).then((res) => {
      this.inquiries = res.data;
    }).catch((err) => {
      this.inquiryFetchError = err.response.data.message || err;
    });

    axios.get('/api/business/' + this.$route.params.id + '/position').then((res) => {
      this.form.position = res.data;
    }).catch((err) =>{
      console.error(err.response.data || err);
    })
  },
  components: {
    QuestionCard,
    NoQuestionsFound
  },
	data(){
		return {
      business: undefined,
      inquiries: [],
      inquiryFetchError: undefined,
      form: {
        name: undefined,
        description: undefined,
        externalURL: undefined,
        position: {
          address: undefined,
        }
      },
      show: true,
		};
  },
  methods: {
    onSubmit() {
      console.log("Submitting!")
      console.log(this.form)
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

.manage-page {
  padding-top: 1em;
}

.manage {
	width: 85%;
}

.questions {
  text-align: center;
  justify-content: center;
}
</style>
