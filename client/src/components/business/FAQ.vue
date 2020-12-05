<template>
	<div>
    <h2>Community Questions</h2>
    <div v-for="inq in summaryInquiries" :key="inq.id" class="card-container">
      <div class="card">
        <div class="card-info">
          <h4>{{ inq.question }}</h4>
          <h6>{{ inq.answer }}</h6>
        </div>
      </div>
    </div>
    
    <div>
      <b-button variant="primary" @click="$bvModal.show('bv-modal-example')">
        View All Questions <b-badge variant="light">{{ inquiries.length }}</b-badge>
      </b-button>
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title>
          Community Questions
        </template>
        <div class="d-block text-center">
          <div v-for="inq in inquiries" :key="inq.id" class="card-container">
            <div class="card">
              <div class="card-info">
                <h4>{{ inq.question }}</h4>
                <h6>{{ inq.answer }}</h6>
              </div>
            </div>
          </div>
        </div>
        <b-button variant="danger" class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close</b-button>
      </b-modal>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "FAQ",
  props: {
    business: Object,
  },
  data() {
    return {
      inquiries: undefined,
      summaryInquiries: undefined,
    }
  },
  created() {
    axios.get(`api/inquiries/business/${this.business.businessId}`)
      .then((resp) => resp.data)
      .then((inquiries) => {
        this.inquiries = inquiries.length !== 0 ? inquiries : [
          { 
            question: "Does it get crowded?", 
            answer: "Nope, no one is ever there."
          }
        ];
        // TODO(johancc) - Remove before deploying!
        if (this.inquiries.length > 3) {
          this.summaryInquiries = this.inquiries.slice(0,3);
        } else {
          this.summaryInquiries = this.inquiries;
        }
      })

  }
}
</script>
<style scoped>
.card {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
}

.card h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.card h4 {
	letter-spacing: 1px;
	margin: 10px 0;
}

.card-preview {
	background-color: #007bff;
	color: #fff;
	padding: 30px;
}

.card-preview a {
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
}

.card-info {
	padding: 30px;
	position: relative;
	width: 100%;
}
</style>