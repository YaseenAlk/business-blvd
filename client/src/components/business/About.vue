<template>
  <div>
    <h2>About</h2>
    <div class="cards-container">
      <div class="card">
        <div class="card-preview">
          <h6>Coffee Shop</h6>
          <h2>Darwin's Story</h2>
        </div>
        <div class="card-info">
          <h4>Rooted in Cambridge for over 27 years, Darwin’s four locations are locally-owned and independently authentic, serving award-winning sandwiches and carefully curated coffees in a vibrant atmosphere that is homegrown and unique.</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.card {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
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
	color: #007bff;
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