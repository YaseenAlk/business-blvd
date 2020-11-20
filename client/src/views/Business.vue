<template>
  <b-container class="flex-col align-items-center" style="max-width: 85%">
	<Header v-bind:business="business"/>
	<div class="business-page">
		<b-row>
			<!-- side panel -->
			<b-col md='4'>
				<!-- at a glance -->
				<AtAGlance v-bind:business="business" />
        <SocialMedia class="mt-4" v-bind:business="business" />
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
import SocialMedia from '../components/business/SocialMedia.vue';

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
    SocialMedia,
	},
	data(){
		return {
			business: {
				name: "Darwin's Ltd",
        address: "313 Massachusetts Avenue, Cambridge, MA",
        url: "https://www.darwinsltd.com/",
        socialMedia: {
          _twitter: "https://www.twitter.com",
          _facebook: "https://www.facebook.com",
          _instagram: "https://www.instagram.com",
        },
        hours: {
          _businessHours: {
            "0": {
              "open": {
                "hour": 12,
                "minute": "00"
              },
              "close": {
                "hour": 18,
                "minute": "00"
              }
            },
            "1": {
              "open": {
                "hour": 8,
                "minute": 30
              },
              "close": {
                "hour": 20,
                "minute": "00"
              }
            },
            "2": {
              "open": {
                "hour": 8,
                "minute": 30
              },
              "close": {
                "hour": 20,
                "minute": "00"
              }
            },
            "3": {
              "open": {
                "hour": 8,
                "minute": 30
              },
              "close": {
                "hour": 20,
                "minute": "00"
              }
            },
            "5": {
              "open": {
                "hour": 8,
                "minute": 30
              },
              "close": {
                "hour": 20,
                "minute": "00"
              }
            },
            "6": {
              "open": {
                "hour": 12,
                "minute": "00"
              },
              "close": {
                "hour": 18,
                "minute": "00"
              }
            }
          }
        }
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
