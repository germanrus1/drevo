<template>
    <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
            <b-navbar toggleable="sm" type="dark" variant="dark">
                <b-navbar-brand href="#">
                    <router-link :to="{name: 'main'}">DREVO</router-link>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="file:///C:/Project/startbootstrap-sb-admin-2-gh-pages/blank.html">URL Шаблона</b-nav-item>
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
        </div>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import {AUTH_LOGOUT} from "../../../store/actions/auth";
  import Sidebar from "./sidebar";
  import axios from "axios";

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
      Sidebar
    },
    methods: {
      logout() {
        this.$store.dispatch(AUTH_LOGOUT)
                .then(() => {
                  this.$router.push('/')
                })
      },

      getUser: function() {
        axios({url: 'http://derevo.log/api/' + 'main/', data: {}, method: 'get' })
                .then(resp => {
                  let user = this.user;
                  let data = resp.data.data;
                  user.email = data.email;
                  user.last_name = data.last_name;
                  user.name = data.name;
                  user.id = data.id;
                })
                .catch(err => {
                  console.log('Ошибка при получении данных пользователя');
                  console.log(err);
                })
      },
    },
    created() {
      this.getUser();
    }
  }
</script>
<style>
</style>
