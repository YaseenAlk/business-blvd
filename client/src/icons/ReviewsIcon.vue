<template>
    <img src="../assets/icons8-favorite-chat-message-100.png" v-bind:height="size" v-bind:width="size" />
</template>

<script>
export default {
    name: 'ReviewsIcon',
    props: {
        size: String,
    }
}
</script>