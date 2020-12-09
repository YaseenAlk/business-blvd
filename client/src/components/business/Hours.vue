<template>
  <div>
    <h3 style="text-align: left; margin-top: 2em;">Hours of Operation</h3>
    <b-list-group>
      <b-list-group-item v-for="day in hours" :key="day.k">  
        <b-row class="text-center justify-content-between" style="margin: 0">
          <div>{{dayMap[day.day]}}</div>
          <div>{{day.hours.open.hour + ":" + day.hours.open.minute }} - {{ day.hours.close.hour + ":" + day.hours.close.minute }}</div>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
const dayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default {
    name: 'Hours',
    props: {
      business: Object,
    },
    data() {
      // Convert from ""
      const hours = [];
      const keys = Object.keys(this.business.hours);
      keys.forEach((k) => {
        hours.push({
          hours: this.business.hours[k],
          day: k,
        });
      });
      return {
        hours,
        dayMap
      }
    },
}
</script>

<style>

</style>