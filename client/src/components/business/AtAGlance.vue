<template>
    <div>
        <h3 style='margin: 1em'>At a Glance</h3>
        <b-list-group>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
                Rating: {{ serviceRating }}/5  <b-icon icon='star-fill' scale="2" variant="danger"></b-icon>
            </b-list-group-item>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
                 Covid Safety Score: {{ safetyRating }}/5 <b-icon icon='heart-fill' scale="2" variant="danger"></b-icon>
            </b-list-group-item>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
                 Hand sanitizer available <b-icon icon='shield-plus' scale="2" variant="danger"></b-icon>
            </b-list-group-item>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
                 Capacity limit: 5 <b-icon icon='people' scale="2" variant="danger"></b-icon>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>

const getAverage = (ratings) => {
  let net = 0;
  const vals = Object.values(ratings);
  vals.forEach((val) => {
    net += val
  })
  return net/vals.length;
}

export default {
    name: 'AtAGlance',
    props: {
      business: Object,
    },
    data() {
      let safetyRating = getAverage(this.business.ratings._safetyRatingsMap);
      let serviceRating = getAverage(this.business.ratings._serviceRatingsMap);
      return {
        safetyRating,
        serviceRating
      }
    }
}
</script>
<style scoped>

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