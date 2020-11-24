<template>
    <img src="@/assets/icons8-user-settings-100.png" v-bind:width="size" v-bind:height="size" />
</template>

<script>
export default {
    name: 'AccountIcon',
    props: {
        size: String,
    }
}
</script>