<template>
  <b-card no-body>
    <b-tabs v-model="tabIndex" card>
      <b-tab title="Авторизация" aria-selected="true" :title-link-class="linkClass(0)">
        <Register/>
      </b-tab>
      <b-tab title="Регистрация" :title-link-class="linkClass(1)">
        <Authorization/>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
  import Register from "./Register";
  import Authorization from "./Authorization";

  export default {
    data() {
      return {
        tabIndex: 0,
        result: null,
      }
    },
    components: {
      Register,
      Authorization,
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },
    }
  }
</script>

<style scoped>
</style>
