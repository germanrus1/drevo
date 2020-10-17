<template>
  <div>
    <loadStatus ref="loadComponent"/>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link :to="{name: 'index'}">DREVO - ЗАГЛУШКА!!!!</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
          <b-nav-item v-on:click="showProgressStatus()">Progress</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <router-link :to="{path: '/auth/', params: {tabIndex: 0}}">Войти</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{path: '/auth/', params: {tabIndex: 1}}">Регистрация</router-link>
          </b-nav-item>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>{{user.name}}</em>
            </template>
            <b-dropdown-item href="#" v-on:click="logout">Выйти</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import {AUTH_LOGOUT} from "../../../store/actions/auth";
  import store from "../../../store";
  import loadStatus from "../../common/loadStatus";

  /**
   *   Сделать, что бы при клике Войти/Регистрация открывалась соответствующая вкладка
   */
  export default {
    data() {
      return {
        user: {
          email: '',
          login: 'Войти/Регитсрация',
          name: '',
          last_name: '',
        },
        profileUrl: store.getters.isAuthenticated ? '/profile/' : '/auth/',
        progressStatus: {
          value: 0,
          isActive: false
        },
      }
    },
    components: {
      loadStatus,
    },
    methods: {
      logout() {
        this.$store.dispatch(AUTH_LOGOUT)
                .then(() => {
                  this.$router.push('/')
                })
      },
      showProgressStatus() {
        this.$refs.loadComponent.showProgressStatus();
      },
    },
    created() {
    }
  }
</script>
<style>
</style>
