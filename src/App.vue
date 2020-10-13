<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import { USER_REQUEST } from "./store/actions/user";
import Index from "./components/Index";

export default {
  name: 'App',
  components: {
    Index,
  },
  created: function() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  }
}
</script>

<style>
</style>
