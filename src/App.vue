<template>
  <div id="app">
      <Header/>
        <Content/>
      <Footer/>
  </div>
</template>

<script>
import { USER_REQUEST } from "./store/actions/user";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Content from "./components/common/Content";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Content,
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
