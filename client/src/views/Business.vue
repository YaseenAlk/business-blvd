<template>
  <b-container class="flex-col align-items-center" style="max-width: 85%">
	<Header v-bind:business="business"/>
	<div class="business-page">
		<b-row>
			<!-- side panel -->
			<b-col md='4'>
				<!-- at a glance -->
				<AtAGlance v-bind:business="business" />
				<!-- hours -->
				<Hours v-bind:business="business" />
			</b-col>
			<!-- main content -->
			<b-col md='8'>
				<b-container>
					<About class="business-section" v-bind:business="business" />
					<FAQ class="business-section" v-bind:business="business" />
					<Reviews class="business-section" v-bind:business="business"/>
					<Ask class="business-section" v-bind:business="business" />
				</b-container>
			</b-col>
		</b-row>
	</div> 
  </b-container>
</template>
<script>

import Reviews from '../components/business/Reviews.vue';
import FAQ from '../components/business/FAQ.vue';
import About from '../components/business/About.vue';
import Ask from '../components/business/Ask.vue';
import Header from '../components/business/Header.vue';
import AtAGlance from '../components/business/AtAGlance.vue';
import Hours from '../components/business/Hours.vue';

export default {
    name: 'Test',
    components: {
		Header,
		AtAGlance,
		Hours,
		Reviews,
		FAQ,
		Ask,
		About,
	},
	data(){
		return {
			business: {
				name: "Darwin's Ltd",
				address: "313 Massachusetts Avenue, Cambridge, MA"
			}
		};
	}
}
</script>
<style scoped>

.business-page {
	width: 85%;
}

.business-section{
	margin-bottom: 16px;
}
</style>
