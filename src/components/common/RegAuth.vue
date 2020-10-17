<template>
  <b-card no-body>
    <b-tabs v-model="tabIndex" card>
      <b-tab title="Авторизация" v-on:click="setPageTitle('Авторизация')" :title-link-class="linkClass(0)">
        <Authorization/>
      </b-tab>
      <b-tab title="Регистрация" v-on:click="setPageTitle('Регистрация')" aria-selected="true" :title-link-class="linkClass(1)">
        <Register/>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
  import Register from "./Register";
  import Authorization from "./Authorization";

  /**
   *   Сделать, что бы при клике Войти/Регистрация открывалась соответствующая вкладка
   */
  export default {
    data() {
      return {
        result: null,
        tabIndex: 0,
      }
    },
    components: {
      Register,
      Authorization,
    },
    props: {
      // tabIndex: Number,
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },
      setPageTitle(title = 'Добро пожаловать') {
        console.log(title);
        this.$store.dispatch('changeHeaderText', title);
      },
    },
    mounted() {

    }
  }
</script>

<style scoped>
</style>
