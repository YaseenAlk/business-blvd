<template>
    <router-link class="card" v-bind:to="internalURL">
        <h2>{{name}}</h2>
        <p>{{address}}</p>
        <div class="card-bottom">
            <div>
                <b-icon-question-circle class="card-bottom-icon" />
                <span>0 questions</span>
            </div>
            <div>
                <b-icon-star-half size="20" class="card-bottom-icon" />
                <span>{{ratingCount}} rating</span>
            </div>
            <div class="covid-score">
                <div class="covid-score-number">{{covidScore}}</div>
                <span class="covid-score-subtitle">Covid Safety Score</span>
            </div>
        </div>
    </router-link>
</template>

<script>
import { BIconQuestionCircle, BIconStarHalf } from 'bootstrap-vue';

export default {
    name: 'MapCard',
    props: {
        business: Object
    },
    components: {
        BIconQuestionCircle,
        BIconStarHalf,
    },
    data(){
        return {
            name: this.business.name,
            address: this.business.position.address,

            ratingCount: Object.keys(this.business.ratings._serviceRatingsMap).length,
            covidScore: Object.keys(this.business.ratings._safetyRatingsMap).length,

            internalURL: this.business.internalURL,
        }
    },
}
</script>

<style scoped>
a, a:hover {
    text-decoration: none;
    color: #212529;
}

.card {
    border-radius: 12px;
    box-shadow: 0 0 20px -1px rgba(0, 0, 0, 0.4);
    padding: 1em;
    margin-bottom: 1em;
    transition: all 0.2s ease-in-out;
    text-align: left;
}

.card:hover{
    transform: scale(1.01);
    cursor: pointer;
}

.card-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
}

.card-bottom-icon {
    margin-right: 8px;
}

.covid-score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.covid-score-number {
    font-size: 1.25rem;
    text-align: center;
    font-weight: bold;
}

.covid-score-subtitle {
    font-style: italic;
    font-size: 0.9rem;
}

</style>