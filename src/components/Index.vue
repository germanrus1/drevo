<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
          <router-link :to="{name: 'index'}">Drevo</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Герман</em>
            </template>
            <b-dropdown-item href="#">
                <router-link :to="{name: 'profile'}">Профиль</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">Выйти</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <h1>Главная страница</h1>
      <b-row>
        <b-col lg="6" offset-lg="3" sm="12" offset-sm="0">
          <b-card no-body>
            <b-tabs v-model="tabIndex" card>
              <b-tab title="Авторизация" aria-selected="true" :title-link-class="linkClass(0)"><auth /></b-tab>
              <b-tab title="Регистрация" :title-link-class="linkClass(1)"><register /></b-tab>
              <b-tab title="Пользователи" :title-link-class="linkClass(2)"><user-list /></b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>

</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Register from './Register'
  import Auth from './Auth'
  import UserList from './UserList'
  import {AUTH_LOGOUT} from "../store/actions/auth";

  export default {
    name: 'Index',
    components: {
      Register,
      Auth,
      UserList,
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },
      logout() {
        this.$store.dispatch(AUTH_LOGOUT)
          .then(() => {
            this.$router.push('/login')
          })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
