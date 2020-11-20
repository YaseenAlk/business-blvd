<template>
	<div>
    <h2>Community Questions</h2>
     <div class="card-container">
        <div class="card">
          <div class="card-info">
            <h4>Does it get crowded?</h4>
            <h6>Nope, normally there is only one person there most of the time.</h6>
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
</style>