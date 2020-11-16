<template>
    <img src="../assets/icons8-ask-question-100.png" v-bind:height="size" v-bind:width="size" />
</template>

<script>
export default {
    name: 'QuestionIcon',
    props: {
        size: String,
    }
}
</script>