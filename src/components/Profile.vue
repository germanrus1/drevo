<template>
    <b-card header="Ваш профиль">
        <b-row>
            <b-col sm="3"><label>ID</label></b-col>
            <b-col sm="9">{{user.id}}</b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col sm="3"><label>Email</label></b-col>
            <b-col sm="9">
                <!--              <label v-on:click="toggleShowInput()">{{user.email}}</label>-->
                <b-form-input size="sm" v-model="user.email">{{user.email}}</b-form-input>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col sm="3"><label>Имя</label></b-col>
            <b-col sm="9">
                <b-form-input size="sm" v-on:blur="update()" v-model="user.name">{{user.name}}</b-form-input>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col sm="3"><label>Фамилия</label></b-col>
            <b-col sm="9">
                <b-form-input size="sm" v-model="user.last_name">{{user.last_name}}</b-form-input>
            </b-col>
        </b-row>
        <hr>
        <b-button v-on:click="get()">
            Обновить данные
        </b-button>
            </b-card>
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
      get: function () {
        axios({url: 'http://derevo.loc/api/main/1', data: {}, method: 'get'})
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
        axios({url: 'http://derevo.loc/api/main/' + this.user.id, data: this.user, method: 'put'})
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
