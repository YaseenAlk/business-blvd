<template>
    <img src="@/assets/icons8-inbox-64.png" v-bind:width="size" v-bind:height="size" />
</template>

<script>
export default {
    name: 'InboxIcon',
    props: {
        size: String,
    }
}
</script>