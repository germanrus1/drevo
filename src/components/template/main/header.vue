<template>
  <b-navbar toggleable="sm" type="dark" variant="info">
    <b-navbar-brand href="#">
      <router-link :to="{name: 'main'}">DREVO - ЗАГЛУШКА!!!!</router-link>
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
            <em>{{user.name}}</em>
          </template>
          <b-dropdown-item href="#">
            <router-link :to="{name: 'profile'}">Профиль</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">Выйти</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import {AUTH_LOGOUT} from "../../../store/actions/auth";

  export default {
    data() {
      return {
        user: {
          email: '',
          login: '',
          name: '',
          last_name: '',
        },
      }
    },
    components: {
    },
    methods: {
      logout() {
        this.$store.dispatch(AUTH_LOGOUT)
                .then(() => {
                  this.$router.push('/')
                })
      },
    },
    created() {
    }
  }
</script>
<style>
</style>
