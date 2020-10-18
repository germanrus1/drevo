<template>
    <b-container>
        <b-card bg-variant="light">
            <template v-slot:header>
                <h4>Привет!</h4>
            </template>
            <p><router-link :to="{name: 'auth'}">Авторизуйтесь пожалуйста</router-link> или </p>
            <p>если у вас все еще нет аккаунта то пройдите <router-link :to="{name: 'auth'}">регистрацию</router-link></p>
        </b-card>
    </b-container>
</template>

<script>
  /*
      Страница для всех пользователей
   */
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    data() {
      return {
      }
    },
    components: {
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },
    },
    created() {
    },
    mounted() {
      this.$store.dispatch('changeHeaderText', 'Добро пожаловать!');
    },
  }
</script>

<style>
</style>
