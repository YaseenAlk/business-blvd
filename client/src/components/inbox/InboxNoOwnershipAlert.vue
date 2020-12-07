<template>
  <b-alert show variant="secondary">
    Inbox is unavailable. Please <b-link to="claim">claim a business</b-link> first in order to access a businesses inbox.
  </b-alert>
</template>

<script>
export default {
  name: 'InboxNoOwnershipAlert'
}
</script>