<template>
  <div>
    <div style="width: 100%"></div>
    <b-form @submit="onSubmit">
      <b-form-group
              id="input-group-email"
              label-for="input-email"
      >
        <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Введите email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-login" label-for="input-login">
        <b-form-input
                id="input-2"
                v-model="form.login"
                required
                placeholder="Логин"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-password" label-for="input-login">
        <b-form-input
                id="input-2"
                v-model="form.password"
                required
                type="password"
                placeholder="Пароль"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-password_confirmation" label-for="input-login">
        <b-form-input
                id="input-2"
                v-model="form.password_confirmation"
                required
                type="password"
                placeholder="Повторите пароль"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-name" label-for="input-name">
        <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Имя"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-lastName" label-for="input-lastName">
        <b-form-input
                id="input-2"
                v-model="form.lastName"
                placeholder="Фамилия"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Принимаю условия</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Зарегестрироваться</b-button>
    </b-form>
    <b-card class="mt-3" header="Чек Регитсрации">
      <b-row  v-for="input in form" v-bind:key="input.id">{{input}}</b-row>
    </b-card>
  </div>
</template>

<script>
  import axios from 'axios'
  import {AUTH_REQUEST} from "../../store/actions/auth";

  export default {
    data() {
      return {
        form: {
          email: '',
          login: '',
          password: '',
          password_confirmation: '',
          name: '',
          lastName: '',
        },
        result: null,
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        axios
          .post('http://derevo.loc/api/register', {
            email: this.form.email,
            login: this.form.login,
            name: this.form.name,
            last_name: this.form.lastName,
            password: this.form.password,
            password_confirmation: this.form.password_confirmation,
          })
          .then(response => {
            this.result = response.data;
            this.authUser();

        });
      },
      authUser() {
        const username = this.form.email;
        const password = this.form.password;

        this.$store.dispatch(AUTH_REQUEST, {
          password,
          username, // для laravel/passport надо передавать параметр username - это только как идентификатор.
          grant_type: "password",
          client_id: 6,
          client_secret: "hb3w9LLZ5ceRFin3RAcrvGDHXhAom5rUpvdx4jcd"// вывести в .env
        }).then(() => {
          this.$router.push("/profile/");
        });
      }
    },
  }
</script>

<style scoped>
</style>
