<template>
  <div>
    <div class="questions">
      <InboxHeader />
      <InboxSubheader />
      <hr />
      <InboxBody />
    </div>
  </div>
</template>

<script>
import InboxHeader from '../components/inbox/InboxHeader.vue';
import InboxSubheader from '../components/inbox/InboxSubheader.vue';
import InboxBody from '../components/inbox/InboxBody.vue';

export default {
  name: 'Inbox',
  components: {
    InboxHeader,
    InboxSubheader,
    InboxBody
  },
}
</script>

<style>
.questions {
  max-width: 75vw;
  margin: auto;
  padding-top: 1em;
}
</style>