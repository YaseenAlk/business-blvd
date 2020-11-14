<template>
    <div class="homepage-grid">
        <b-card-group class="homepage-grid-item" v-for="card in cardData" v-bind:key="card.id" v-bind:id="card.id">
            <b-card
                class="mb-2"
                v-bind:bg-variant="card.variant"
            >
                <b-button variant="primary">
                {{card.title}}
                </b-button>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
import { BCard, BButton } from 'bootstrap-vue';

export default {
    name: 'HomePageGrid',
    components: {
        BCard, BButton
    },
    data() {
        return {
            cardData: [
                {id: 0, title: "Business Map", "button": "Go!", variant: "primary"},
                {id: 1, title: "Business Search", "button": "", variant: "info"},
                {id: 2, title: "Submit a Covid Safety Report", "button": "", variant: "warning"},
                {id: 3, title: "TBD", "button": "", variant: "secondary"},
                {id: 4, title: "Claim a Business", "button": "", variant: "danger"},
                {id: 5, title: "My Account", "button": "", variant: "dark"},
            ],
        }
    }
}
</script>

<style>
.homepage-grid {
    display: grid;
    margin: 32px;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
}

.homepage-grid-item {
    width: 100%;
    height: 100%;
}
</style>