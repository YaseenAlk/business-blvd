<template>
  <div></div>
</template>

<script>
import { eventBus } from './main'
export default {
  name: 'ToastManager',
  created(){
    
    // SUCCESS TOAST
    eventBus.$on('show-success-toast', (message) => {
      this.$bvToast.toast(message, {
        title: "BusinessBlvdBot says...",
        toaster: 'b-toaster-bottom-right',
        autoHideDisplay: 250,
        append: true,
        variant: 'success',
        noHoverPause: true,
        toastClass: 'toast-class',
      });
    });

    // SUCCESS GLOBAL TOAST 
    eventBus.$on('show-global-success-toast', (message) => {
      this.$root.$bvToast.toast(message, {
          title: "BusinessBlvdBot says...",
          toaster: 'b-toaster-top-center',
          autoHideDisplay: 300,
          append: true,
          variant: 'success',
      });
    });

    // ERROR TOAST 
    eventBus.$on('show-error-toast', (message) => {
      this.$bvToast.toast(message, {
        title: "BusinessBlvdBot says...",
        toaster: 'b-toaster-bottom-right',
        autoHideDisplay: 250,
        append: true,
        variant: 'danger',
      });
    }) 

    // ERROR GLOBAL TOAST 
    eventBus.$on('show-global-error-toast', (message) => {
      this.$root.$bvToast.toast(message, {
        title: "BusinessBlvdBot says...",
        toaster: 'b-toaster-top-center',
        autoHideDisplay: 500,
        append: true,
        variant: 'danger',
      });
    }) 
  }
}
</script>