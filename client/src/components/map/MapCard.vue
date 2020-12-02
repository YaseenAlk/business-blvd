<template>
    <router-link v-if="rating !== undefined" class="card" v-bind:to="business.internalURL">
        <h2>{{business.name}}</h2>
        <div v-if="business.ownerId !== undefined">
            <h6 class="verified-line">
                <b-icon-patch-check-fll variant="primary" class="verified-icon" /><b>Verified Business Owner</b>
            </h6>
        </div>
        <p v-if="position">{{ position.address}}</p>
        <div class="card-bottom">
            <div>
                <b-icon-question-circle class="card-bottom-icon" />
                <span>0 questions</span>
            </div>
            <div>
                <b-icon-star-half size="20" class="card-bottom-icon" />
                <span>{{rating.service.average}}/5 rating</span>
            </div>
            <div class="covid-score">
                <div class="covid-score-number">{{rating.safety.average}}/5</div>
                <span class="covid-score-subtitle">Covid Safety Score</span>
            </div>
        </div>
    </router-link>
</template>

<script>
import { BIconQuestionCircle, BIconStarHalf, BIconPatchCheckFll } from 'bootstrap-vue';
import axios from 'axios';

export default {
    name: 'MapCard',
    props: {
        business: Object
    },
    components: {
        BIconQuestionCircle,
        BIconStarHalf,
        BIconPatchCheckFll
    },
    created() {
      axios.get(`/api/business/${this.business.businessId}/ratings`)
      .then((resp) => resp.data)
      .then((ratings) => {
        console.log(ratings);
        this.rating = ratings;
      })
      .then(() => axios.get(`/api/business/${this.business.businessId}/position`))
      .then((res) => res.data)
      .then((position) => {
        this.position = position;
      })
    },
    data() {
      return {
        position: undefined,
        rating: undefined,
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

.verified-icon {
    margin-right: 4px;
}

.verified-line {
    color: #007bff;
    text-align: left;
}

</style>