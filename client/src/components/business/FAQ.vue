<template>
	<div>
    <h2>Community Questions</h2>
     <div v-for="inq in inquiries" :key="inq.id" class="card-container">
        <div class="card">
          <div class="card-info">
            <h4>{{ inq.question }}</h4>
            <h6>{{ inq.answer }}</h6>
          </div>
        </div>
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
    }
  },
  created() {
    axios.get(`api/inquiries/business/${this.business.businessId}`)
      .then((resp) => resp.data)
      .then((inquiries) => {
        this.inquiries = inquiries;
        // TODO(johancc) - Remove before deploying!
        this.inquiries = this.inquiries.length !== 0 ? this.inquiries : [
          { 
            question: "Does it get crowded?", 
            answer: "Nope, no one is ever there."
          }
        ];
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