<template>
    <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
            <loadStatus ref="loadComponent"/>
            <b-navbar toggleable="sm" type="dark" variant="dark">
                <b-navbar-brand href="#">
                    <router-link :to="{name: 'index'}">DREVO</router-link>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="file:///C:/Project/startbootstrap-sb-admin-2-gh-pages/blank.html">URL Шаблона</b-nav-item>
                        <b-nav-item href="#" :to="{name: 'treeIndex'}">Редактор дерева</b-nav-item>
                        <b-nav-item href="#" v-on:click="showProgressStatus()">Progress</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-dropdown right split
                                    split-variant="default"
                                    variant="info">
                            <template v-slot:button-content>
                                <em>
                                    <router-link :to="{name: 'profile'}">
                                        <b-row>
                                            <b-col class="header__profile_name">
                                                {{user.name}}
                                            </b-col>
                                            <b-col>
                                                <img height="26" src="http://derevo.loc/system_files/default_avatar_incognito.svg">
                                            </b-col>
                                        </b-row>
                                    </router-link>
                                </em>
                            </template>
                            <b-dropdown-item href="#">
                                <router-link :to="{name: 'profile'}">Личный кабинет</router-link>
                            </b-dropdown-item>
                            <b-dropdown-item href="#" v-on:click="logout">Выйти</b-dropdown-item>
                        </b-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
  import {AUTH_LOGOUT} from "../../../store/actions/auth";
  import Sidebar from "./sidebar";
  import axios from "axios";
  import loadStatus from "../../common/loadStatus";

  export default {
    data() {
      return {
        user: {
          email: '',
          login: '',
          name: 'Личный кабинет',
          last_name: '',
        },
      }
    },
    components: {
      Sidebar,
      loadStatus,
    },
    methods: {
      showProgressStatus: function () {
        this.$refs.loadComponent.showProgressStatus();
      },
      logout() {
        this.$store.dispatch(AUTH_LOGOUT)
                .then(() => {
                  this.$router.push('/')
                })
      },

      getUser: function() {
        axios({url: '/api/' + 'user/', data: {}, method: 'get' })
                .then(resp => {
                  let user = this.user;
                  let data = resp.data.data;
                  user.email = data.email;
                  user.last_name = data.last_name;
                  // user.name = data.name;
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
      this.pageTitle = 'Добро пожаловать';
    }
  }
</script>
<style scoped>
    .header__profile_name {
        white-space: nowrap;
    }
</style>
