<template>
  <div class="hello">
    <h1>Главная страница</h1>
    <p>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
  </div>
</template>

<script>
  import { CardPlugin, TablePlugin, BButton } from 'bootstrap-vue'
  import Vue from 'vue'

  Vue.use(CardPlugin)
  Vue.use(TablePlugin)
  Vue.use(BButton)

  export default {
  name: 'Index',
  props: {
    msg: String
  }
}
</script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
