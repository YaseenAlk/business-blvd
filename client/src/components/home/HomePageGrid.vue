<template>
    <div class="grid-container">
        <b-link to='/map' class="grid-item">
            <HomePageCard title="Business Map" variant="map" size="64" />
        </b-link>
        <b-link to='/report' class="grid-item">
            <HomePageCard title="Submit a Business Report" variant="report" size="64"/>
        </b-link>
        <b-link to='/claim' class="grid-item grid-item-disabled" disabled>
            <HomePageCard title="Claim a Business" variant="business" size="64" />
        </b-link>
        <b-link to='/account' class="grid-item">
            <HomePageCard title="Account" variant="account" size="64" />
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

<style scoped>
.grid-container {
    margin: auto;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    column-gap: 1em;
    row-gap: 1em;
}

.grid-item {
    background-color: rgb(215, 253, 245);
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
}

.grid-item:hover{
    background-color: rgb(162, 255, 235);
}

.grid-item-disabled {
    transition: none;
    background-color: rgba(247, 247, 247, 0.8);
}

.grid-item-disabled:hover {
    transform: none;
    cursor: not-allowed;
    text-transform: none;
    background-color: rgba(247, 247, 247, 0.8);
}

</style>