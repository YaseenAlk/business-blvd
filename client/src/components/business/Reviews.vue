<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="card">
        <div class="card-preview">
          <h2>Review</h2>
          <h6>Ben Bitdiddle</h6>
        </div>
        <div class="card-info">
          <h6>"The best coffee I had in my life."</h6>
          <h4>The moment I took the first sip I knew. I knew there was no other coffee shop that would compare to this. The baristas were friendly and quick. </h4>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <div class="card-preview">
          <h2>Review</h2>
          <h6>Ben Bitdiddle</h6>
        </div>
        <div class="card-info">
          <h6>"The best coffee I had in my life."</h6>
          <h4>The moment I took the first sip I knew. I knew there was no other coffee shop that would compare to this. The baristas were friendly and quick. </h4>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <div class="card-preview">
          <h2>Review</h2>
          <h6>Alyssa P Hacker</h6>
        </div>
        <div class="card-info">
          <h6>"all my homies hate vue"</h6>
          <h4> after the first sip I knew. I knew that this one was the one. the perfect coffee cup.</h4>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  
  export default {
    name: 'swiper-example-navigation',
    title: 'Navigation',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
	box-sizing: border-box;
}


body {
	font-family: 'Muli', sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	margin: 0;
}


.card {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
	width: 700px;
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
	background-color: #2A265F;
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
	background-color: #001F61;
	border: 1px solid #001F61;
	box-shadow: 0 16px 22px -17px #03153B;
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
	background-color: #001F61;
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