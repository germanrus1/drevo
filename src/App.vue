<template>
  <div id="app">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>

  </div>
</template>

<script>
import { USER_REQUEST } from "./store/actions/user";

export default {
  name: 'App',
  components: {
    // Index,
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
