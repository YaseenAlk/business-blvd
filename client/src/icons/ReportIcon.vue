<template>
    <img src="../assets/icons8-regular-document-100.png" v-bind:width="size" v-bind:height="size" />
</template>

<script>
export default {
    name: 'ReportIcon',
    props: {
        size: String,
    }
}
</script>