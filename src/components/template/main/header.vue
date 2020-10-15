<template>
  <div>
    <b-progress :value="progressStatus.value" :variant="'danger'"
                class="progress-status"
                v-bind:class="{active: progressStatus.isActive}"
    ></b-progress>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link :to="{name: 'home'}">DREVO - ЗАГЛУШКА!!!!</router-link>
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
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{user.name}}</em>
            </template>
            <b-dropdown-item href="#">
              <router-link :to="profileUrl">{{user.login}}</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">Выйти</b-dropdown-item>
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
    },
    methods: {
      logout() {
        this.$store.dispatch(AUTH_LOGOUT)
                .then(() => {
                  this.$router.push('/')
                })
      },
      // вынести в общий модуль
      showProgressStatus() {
        this.progressStatus.value = 0;
        this.progressStatus.isActive = true;
        console.log(this.progressStatus.isActive);

        let progressStatus = setInterval(() => {
          this.progressStatus.value += 10;

          if (this.progressStatus.value > 300) {
            // создать небольшую задержку
            this.progressStatus.isActive = false;
            this.progressStatus.value = 0;
            clearInterval(progressStatus);
          }

        }, 60);

      }
    },
    created() {
    }
  }
</script>
<style>
  .progress-status {
    width: 100%;
    height: 5px;
    visibility: hidden;
    transition: visibility .3s;
  }
  .progress-status.active{
    visibility: visible;
  }

</style>
