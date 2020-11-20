<template>
    <div>
        <h3 style='margin: 1em'>At a Glance</h3>
        <b-list-group>
            <b-list-group-item class='d-flex justify-content-between align-items-center'>
                <b-icon icon='patch-check-fll' scale="2" variant="danger"></b-icon> Outside seating <br/>
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
}
</script>