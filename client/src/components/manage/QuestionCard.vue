<template>
<div v-if="question" class="question">
   <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
      <b-button type="submit" variant="primary">Send answer</b-button>
   </b-form>
</div>

</template>
<script>
export default {
  name: 'QuestionCard',
  props: {
    businessId: String,
    question: String,
  },
  data() {
    return {
      form: {
        answer: undefined,
      },
      show: true,
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log("Submitting!")
      console.log(this.form)
    },
    onReset(e) {
      e.preventDefault();
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