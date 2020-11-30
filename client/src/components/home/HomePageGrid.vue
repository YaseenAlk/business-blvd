<template>
    <div class="grid-container">
        <b-link to='/map' class="grid-item">
            <HomePageCard title="Business Map" variant="map" size="64" />
        </b-link>
        <b-link to='/report' class="grid-item">
            <HomePageCard title="Rate a Business" variant="report" size="64"/>
        </b-link>
        <b-link to='/claim' class="grid-item">
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
    background-color: white;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
}

.grid-item:hover{
    background-color: rgb(255, 255, 255);
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