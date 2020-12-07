<template>
  <b-row class="d-flex justify-content-between align-items-center" style="margin: 0">
    <h6>
      {{selected.text}}
    </h6>
    <InboxBusinessButtonRow :businessID="selected.value" />
  </b-row>
</template>

<script>
import { eventBus } from '../../main';
import InboxBusinessButtonRow from './InboxBusinessButtonRow.vue';
export default {
  name: 'InboxSubheader',
  created(){

    eventBus.$on('inbox-select-change', selectedData => {
      if( selectedData !== undefined){
        this.selected = selectedData;
      }
    });
  },
  data() {
    return {
      selected: {
        text: undefined,
        value: undefined,
      },
    };
  },
  components: {
    InboxBusinessButtonRow,
  }
}
</script>

<style>

</style>