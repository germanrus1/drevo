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
              <router-link :to="{name: 'profile'}">Личный кабинет</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">Выйти</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-row>
      <b-col lg="6" sm="12" offset-lg="3">
        <b-card
            header="Ваш профиль"
        >
          <b-row>
              <b-col sm="3"><label>ID</label></b-col> <b-col sm="9">{{user.id}}</b-col>
          </b-row>
          <hr>
          <b-row>
              <b-col sm="3"><label>Email</label></b-col><b-col sm="9">
<!--              <label v-on:click="toggleShowInput()">{{user.email}}</label>-->
              <b-form-input size="sm" v-model="user.email">{{user.email}}</b-form-input></b-col>
          </b-row>
            <hr>
          <b-row>
              <b-col sm="3"><label>Имя</label></b-col> <b-col sm="9"><b-form-input size="sm" v-on:blur="update()" v-model="user.name">{{user.name}}</b-form-input></b-col>
          </b-row>
            <hr>
          <b-row>
              <b-col sm="3"><label>Фамилия</label></b-col> <b-col sm="9"><b-form-input size="sm" v-model="user.last_name">{{user.last_name}}</b-form-input></b-col>
          </b-row>
            <hr>
        </b-card>
      </b-col>
    </b-row>
    <b-button v-on:click="get()">
        Обновить данные
    </b-button>
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        email: '',
        // login: '',
        name: '',
        lastName: '',
      },
    }
  },
  methods: {
    // toggleShowInput: function (label, input) {
    //   input.hide();
    //   input =
    //
    // },
    get: function() {
      axios({url: 'http://derevo.loc/api/main/1', data: {}, method: 'get' })
        .then(resp => {
          let user = this.user;
          let data = resp.data.data;
          user.email = data.email;
          user.last_name = data.last_name;
          user.name = data.name;
          user.id = data.id;
          console.log(data);
        })
        .catch(err => {
          console.log('Ошибка при получении данных пользователя');
          console.log(err);
        })
    },
    update: function () {
      axios({url: 'http://derevo.loc/api/main/' + this.user.id, data: this.user, method: 'put' })
        .then(resp => {
          let user = this.user;
          let data = resp.data.data;
          user.email = data.email;
          user.last_name = data.last_name;
          user.name = data.name;
          console.log("Успешное обновление");
          console.log(data);
        })
        .catch(err => {
          console.log('Ошибка при сохранении данных');
          console.log(err);
        })
    }
  },
  created() {
    this.get();
  }
}
</script>
