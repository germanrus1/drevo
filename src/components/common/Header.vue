<template>
  <HeaderAuth v-if="ifAuthenticated()"/>
  <HeaderMain v-else/>
</template>

<script>
  import HeaderAuth from '../../components/template/authorized/header'
  import HeaderMain from '../../components/template/main/header'
  import store from '../../store/index'

  export default {
    data() {
      return {
      }
    },
    components: {
      HeaderAuth,
      HeaderMain,
    },
    methods: {
      ifAuthenticated() {
        return store.getters.isAuthenticated;
      }
    },
    created() {
    }
  }
</script>

<style>
</style>
