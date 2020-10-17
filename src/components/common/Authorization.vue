<template>
  <div>
      <div style="width: 100%"></div>
      <b-form  @submit.prevent="login">
        <b-form-group
                id="input-group-email"
                label-for="input-email"
        >
          <b-form-input
                  id="input-1"
                  v-model="username"
                  type="email"
                  required
                  value=""
                  placeholder="Введите email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-login" label-for="input-login">
          <b-form-input
                  id="input-2"
                  v-model="password"
                  value=""
                  required
                  placeholder="Введите пароль"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Войти</b-button>
      </b-form>
      <b-card class="mt-3" header="Чек авторизации">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
  </div>
</template>

<script>
  import {AUTH_REQUEST} from "../../store/actions/auth";

  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        username: '',
        password: '',
      }
    },
    methods: {
      /**
       * в Laravel сгенерировать passport:install
       * здесь добавить Client ID: 6
       Client secret: hb3w9LLZ5ceRFin3RAcrvGDHXhAom5rUpvdx4jcd
       */
      login: function () {
        const {username, password} = this;
        this.$store.dispatch(AUTH_REQUEST, { // Методу передает массив данных
          password,
          username, // для laravel/passport надо передавать параметр username - это только как идентификатор.
          grant_type: "password",
          client_id: 6,
          client_secret: "hb3w9LLZ5ceRFin3RAcrvGDHXhAom5rUpvdx4jcd"
        }).then(() => {
          this.$router.push("/profile/");
        });
      }
    },
  }
</script>