<template>
    <div class="grid-container">
        <b-link to='/map' class="grid-item">
            <HomePageCard title="Business Map" variant="map" size="64" />
        </b-link>
        <b-link to='report' class="grid-item">
            <HomePageCard title="Submit a Covid Safety Report" variant="report" size="64" />
        </b-link>
        <b-link to='/claim' class="grid-item">
            <HomePageCard title="Claim a Business" variant="business" size="64" />
        </b-link>
        <b-link to='/account' class="grid-item">
            <HomePageCard title="My Account" variant="account" size="64" />
        </b-link>
    </div>
</template>

<script>
import HomePageCard from './HomePageCard.vue';

export default {
    name: 'HomePageGrid',
    components: {
        HomePageCard
    },
}
</script>

<style>
.grid-container {
    margin: auto;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    column-gap: 1em;
    row-gap: 1em;
}

.grid-item {
    background-color: white;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
}

.grid-item:hover{
    transform: scale(1.02);
}

</style>