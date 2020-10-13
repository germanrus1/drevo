<template>
  <div>
    <Header/>
    <b-container>
      <h1>Главная страница</h1>
        <b-card no-body>
            <b-tabs v-model="tabIndex" card>
                <b-tab title="Авторизация" aria-selected="true" :title-link-class="linkClass(0)">
                    <auth/>
                </b-tab>
                <b-tab title="Регистрация" :title-link-class="linkClass(1)">
                    <register/>
                </b-tab>
                <b-tab title="Пользователи" :title-link-class="linkClass(2)">
                    <user-list/>
                </b-tab>
            </b-tabs>
        </b-card>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
  /*
      Страница для всех пользователей
   */
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Header from '../../components/template/main/header'
  import Footer from '../../components/template/main/footer'

  import Register from './Register'
  import Auth from './Authorization'
  import UserList from './UserList'


  export default {
    data() {
      return {}
    },
    components: {
      Register,
      Auth,
      UserList,
      Header,
      Footer,
    },
    methods: {},
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
