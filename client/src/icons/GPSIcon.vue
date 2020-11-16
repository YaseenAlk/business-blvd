<template>
    <img src="../assets/icons8-gps-location-100.png" v-bind:width="size" v-bind:height="size" />
</template>

<script>
export default {
    name: 'GPSIcon',
    props: {
        size: String,
    }
}
</script>