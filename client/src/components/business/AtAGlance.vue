<template>
    <div>
        <h3 style='margin: 1em'>At a Glance</h3>
        <b-list-group>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
              <div>
                <label for="safetyRating">Safety rating: </label>
                <b-form-rating
                  v-model="business.ratings.safety.average"
                  icon-empty="heart"
                  icon-half="heart-half"
                  icon-full="heart-fill"
                  readonly
                  inline 
                  id="safetyRating"
                  show-value
                  show-value-max
                  precision="1"
                  variant="danger"
                />
              </div>
            </b-list-group-item>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
            <div>
                <label for="serviceRating">Service rating: </label>
                <b-form-rating
                  v-model="business.ratings.service.average"
                  icon-empty="star"
                  icon-half="star-half"
                  icon-full="star-fill"
                  readonly
                  inline 
                  id="serviceRating"
                  show-value
                  show-value-max
                  precision="1"
                  variant="danger"
                />
              </div>
            </b-list-group-item>
            <div v-if="!isLoading">
              <div v-for="tag in business.selectedTags" :key="tag">
                <b-list-group-item v-if="TAG_LIST[tag] !== undefined" class='d-flex justify-content-between align-items-center' >
                  {{ TAG_LIST[tag] }}
                  <b-icon :icon="TAG_AS_ICON[tag]" variant="primary"></b-icon>
                </b-list-group-item>
              </div>
            </div>
            <b-list-group-item v-else>
              <b-spinner small></b-spinner>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { TAG_LIST, TAG_AS_ICON } from '../../Constants.js';
import { eventBus } from '../../main';
import axios from 'axios';

export default {
    name: 'AtAGlance',
    props: {
      business: Object,
    },
    created() {
      this.tags = Object.values(TAG_LIST).map((item, idx) => {
        return {"value": idx, "text": item};
      });
      axios.get('/api/business/' + this.business.businessId + '/tags')
        .then((res) => {
          this.business.selectedTags = Array.from(res.data);
          this.tags = Array.from(res.data);
        })
        .catch((err) => {
          eventBus.$emit('show-error-toast', err.response.data.message || err.toString());
        })
        .finally(() => this.isLoading = false);
    },
    data() {
      return {
        tags: [],
        isLoading: true,
        TAG_LIST,
        TAG_AS_ICON
      };
    },
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