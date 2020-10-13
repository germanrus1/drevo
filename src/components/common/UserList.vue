<template>
  <div>
    <b-row>
      <b-col><b-button v-on:click="getUsers() ">Обновить список</b-button></b-col>
    </b-row>
    <b-row v-if="!users.data">
      <b-col>Список пользователей пуст</b-col>
    </b-row>
    <div v-for="item in users.data" :key="item.name">
      <b-row>
        <b-col cols="5">ID</b-col><b-col cols="5">{{item.id}}</b-col>
      </b-row>
      <b-row>
        <b-col cols="5">Имя</b-col><b-col cols="5">{{item.name}}</b-col>
      </b-row>
      <b-row>
        <b-col cols="5">Фамилия</b-col><b-col cols="5">{{item.last_name}}</b-col>
      </b-row>
      <b-row>
        <b-col cols="5">Почта</b-col><b-col cols="5">{{item.email}}</b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
  data() {
    return {
      form: {
        email: '',
        login: '',
        name: '',
        lastName: '',
      },
      users: {},
    }
  },
  methods: {
    getUsers() {
      axios
              .get('http://derevo.loc/api/')
              .then(response => (this.users = response.data));
    }
  },
}
</script>

<style scoped>
</style>
