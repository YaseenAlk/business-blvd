<template>
    <img src="@/assets/icons8-small-business-100.png" v-bind:width="size" v-bind:height="size" />
</template>

<script>
export default {
    name: 'BusinessIcon',
    props: {
        size: String,
    }
}
</script>