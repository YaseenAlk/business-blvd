<template>
  <div>
    <div v-if="reviews">
      <h2>Reviews</h2>
      <div v-if="reviews.length > 0">
        <swiper :options="swiperOption">
          <swiper-slide v-for="review in summaryReviews" :key="review.id">
            <div class="card">
              <div class="card-preview">
                <h2>{{ review.name }}</h2>
              </div>
              <div class="card-info">
                <h4>{{ review.review }} </h4>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div>
          <b-button variant="primary" v-b-modal="bv-modal-reviews">
            View All Reviews <b-badge variant="light">{{ reviews.length }}</b-badge>
          </b-button>
          <b-modal size="lg" id="bv-modal-reviews" hide-footer>
            <template #modal-title>
              Reviews
            </template>
            <div class="d-block text-center">
              <div v-for="review in reviews" :key="review.id" class="card-container">
                <div class="card">
                  <div class="card-preview">
                    <h2>{{ review.name }}</h2>
                  </div>
                  <div class="card-info">
                    <h4>{{ review.review }} </h4>
                  </div>
                </div>
              </div>
            </div>
            <b-button variant="danger" class="mt-3" block @click="$bvModal.hide('bv-modal-reviews')">Close</b-button>
          </b-modal>
        </div>
      </div>
      <div v-else>
        <b-card bg-variant="default"  :title="'There are no reviews for ' + this.business.name">
          <b-button href="#/report" variant="primary">
            Write the first review.
          </b-button>
        </b-card>
      </div>
    </div>
    <div v-else>
      <b-spinner type="grow" variant="primary"  size="lg"></b-spinner>
    </div>
</div>
  
</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'swiper-example-navigation',
  title: 'Navigation',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    business: Object,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      reviews: undefined,
      summaryReviews: undefined,
    }
  },
  created() {
    const businessId = this.business.businessId;
    axios.get(`/api/reviews/business/${businessId}`)
      .then((resp) => {
        this.reviews = resp.data;
        if (this.reviews.length > 3) {
          this.summaryReviews = this.reviews.slice(0,3);
        } else {
          this.summaryReviews = this.reviews;
        }
      });
  }
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.card {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	max-width: 85%;
	margin: 1em auto;
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


.floating-btn {
	border-radius: 26.5px;
	background-color: #007bff;
	border: 1px solid #007bff;
	box-shadow: 0 16px 22px -17px #007bff;
	color: #fff;
	cursor: pointer;
	font-size: 16px;
	line-height: 20px;
	padding: 12px 20px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 999;
}

.floating-btn:hover {
	background-color: #ffffff;
	color: #001F61;
}

.floating-btn:focus {
	outline: none;
}

.floating-text {
	background-color: #007bff;
	border-radius: 10px 10px 0 0;
	color: #fff;
	font-family: 'Muli';
	padding: 7px 15px;
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	z-index: 998;
}

.floating-text a {
	color: #FF7500;
	text-decoration: none;
}

@media screen and (max-width: 480px) {

	.social-panel-container.visible {
		transform: translateX(0px);
	}
	
	.floating-btn {
		right: 10px;
	}
}
</style>