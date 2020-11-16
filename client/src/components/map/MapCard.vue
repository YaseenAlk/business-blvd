<template>
    <div class="card">
        <h2>{{data.title}}</h2>
        <p>{{data.address}}</p>
        <div class="card-bottom">
            <div>
                <QuestionIcon size="20" class="card-bottom-icon" />
                <span>{{data.questionCount}} questions</span>
            </div>
            <div>
                <ReviewsIcon size="20" class="card-bottom-icon" />
                <span>{{data.reviewCount}} reviews</span>
            </div>
            <div class="covid-score"><div class="covid-score-number">{{data.covidScore}}</div><span class="covid-score-subtitle">Covid Safety Score</span></div>
        </div>
    </div>
</template>

<script>
import QuestionIcon from '../../icons/QuestionIcon.vue';
import ReviewsIcon from '../../icons/ReviewsIcon.vue';

export default {
    name: 'MapCard',
    props: {
        data: Object
    },
    components: {
        ReviewsIcon, QuestionIcon,
    },
}
</script>

<style>
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
  justify-content: space-around;
  align-items: center;
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