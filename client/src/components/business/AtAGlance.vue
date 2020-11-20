<template>
    <div>
        <h3 style='margin: 1em'>At a Glance</h3>
        <b-list-group>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
                <b-icon icon='star-fill' scale="2" variant="danger"></b-icon>{{ business.rating}} Rating <br/>
            </b-list-group-item>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
                <b-icon icon='heart-fill' scale="2" variant="danger"></b-icon>{{ business.covidScore}} Covid Safety Score <br/>
            </b-list-group-item>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
                <b-icon icon='shield-plus' scale="2" variant="danger"></b-icon> Hand sanitizer available <br/>
            </b-list-group-item>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
                <b-icon icon='people' scale="2" variant="danger"></b-icon> Capacity limit: 5 <br/>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    name: 'AtAGlance',
    props: {
      business: Object,
    }
}
</script>
<style scoped>

.covid-score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.covid-score-number {
    font-size: 1.25rem;
    text-align: center;
    font-weight: bold;
}

.covid-score-subtitle {
    font-style: italic;
    font-size: 0.9rem;
}

</style>