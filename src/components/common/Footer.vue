<template>
  <FooterAuth v-if="ifAuthenticated()"/>
  <FooterMain v-else/>
</template>

<script>
  import FooterAuth from '../../components/template/authorized/footer'
  import FooterMain from '../../components/template/main/footer'
  import store from '../../store/index'

  export default {
    data() {
      return {
      }
    },
    components: {
      FooterAuth,
      FooterMain,
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
