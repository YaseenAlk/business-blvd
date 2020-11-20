<template>
    <div>
      <h3 style="margin-top: 2em;">Hours of Operation</h3>
      <b-list-group>
        <b-list-group-item v-for="day in hours" :key="day.k">
          <h4 class="text-center">
           {{ day.hours.open.hour + ":" + day.hours.open.minute }} - {{ day.hours.close.hour + ":" + day.hours.close.minute }}
          </h4>
        </b-list-group-item>
      </b-list-group>
    </div>
</template>

<script>
export default {
    name: 'Hours',
    props: {
      business: Object,
    },
    data() {

      const hours = [];
      const keys = Object.keys(this.business.hours._businessHours);
      keys.map((k) => hours.push({
        hours: this.business.hours._businessHours[k],
        day: k,
      }));

      return {
        hours,
      }
    },
}
</script>

<style>

</style>