<template>
  <b-container>
    <b-row class='title' style='height: min-content'>
       <div style="text-align: left;">
         <h1>Darwin's Ltd.</h1>
         <h3>313 Massachusetts Avenue, Cambridge, MA</h3>
       </div>
    </b-row>
    <b-row style='height: 90vh;'> 
      <b-container>
        <b-row style='height: 90vh'>
          <!-- side panel -->
          <b-col md='4'>
            <!-- at a glance -->
            <h3 style='margin: 1em'>At a Glance</h3>
            <b-list-group>
              <b-list-group-item class='d-flex justify-content-between align-items-center'>
                <b-icon icon='patch-check-fll' scale="2" variant="danger"></b-icon> Outside seating <br/>
              </b-list-group-item>
              <b-list-group-item class='d-flex justify-content-between align-items-center'>
                <b-icon icon='shield-plus' scale="2" variant="danger"></b-icon> Hand sanitizer available <br/>
              </b-list-group-item>
              <b-list-group-item class='d-flex justify-content-between align-items-center'>
                <b-icon icon='people' scale="2" variant="danger"></b-icon> Capacity limit: 5 <br/>
              </b-list-group-item>
            </b-list-group>
            <!-- hours -->
            <h3 style="margin-top: 1em 0 0 1em;">Hours of Operation</h3>
            
          </b-col>
          <!-- main content -->
          <b-col md='8'>
            <b-container>
              <about></about>
              <h1>Reviews</h1>
              <reviews/>
              <FAQ/>
              <Ask/>
            </b-container>
          </b-col>
        </b-row>
      </b-container> 
    </b-row>
  </b-container>
</template>
<script>
import Reviews from '../components/business/Reviews.vue';
import FAQ from '../components/business/FAQ.vue';
import About from '../components/business/About.vue';
import Ask from '../components/business/Ask.vue';

export default {
    name: 'Test',
    components: {
      Reviews,
      FAQ,
      Ask,
      About,
    },
}
</script>
<style scoped>
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.title {
  font-size: 32pt;
}

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
