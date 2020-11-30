<template>
    <div class="card-item">
        <div v-if="variant === 'account'">
            <AccountIcon v-bind:size="size" />
        </div>
        <div v-if="variant === 'business'">
            <BusinessIcon v-bind:size="size" />
        </div>
        <div v-if="variant === 'report'">
            <ReportIcon v-bind:size="size" />
        </div>
        <div v-if="variant === 'map'">
            <GPSIcon v-bind:size="size" />
        </div>
        <div v-else />
        <div class="card-title">
            {{title}}
         </div>
    </div>
</template>

<script>
import AccountIcon from '@/icons/AccountIcon.vue';
import BusinessIcon from '@/icons/BusinessIcon.vue';
import ReportIcon from '@/icons/ReportIcon.vue';
import GPSIcon from '@/icons/GPSIcon.vue';

export default {
    name: 'HomePageCard',
    props: {
        title: String,
        variant: String,
        size: String,
    },
    components: {
        AccountIcon, BusinessIcon, ReportIcon, GPSIcon
    }
}
</script>

<style>
.card-item {
    padding: 32px 32px 8px 32px;
    color: black;
    box-shadow: 0 0 20px -1px rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    transition: all 0.15s ease-in-out;
}

.card-item:hover{
    box-shadow: 0 0 10px 5px rgba(16, 45, 143, 0.4);
}

.card-title {
    margin-top: 12px;
    font-size: 1.25rem;
   
}
</style>