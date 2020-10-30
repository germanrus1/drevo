<template>
    <b-card bg-variant="light">
        <template v-slot:header>
            <h6 class="mb-0">Ваш профиль</h6>
        </template>
        <b-row>
            <b-col lg="5" sm="12">
                <b-col xs="12">
                    <b-img v-bind="avatarProps" rounded="top"
                           v-bind:src="avatar_url"
                    ></b-img>
                    <b-form @submit="updateAvatar">
                        <b-form-file
                                v-model="avatarFile"
                                :state="Boolean(avatarFile)"
                                browse-text="Добавить"
                                ref="avatarFile"
                                required
                                placeholder=" .png, .jpg, .bmp"
                                drop-placeholder="Перетащите сюда"
                                v-on:input="handleFileUpload()"
                        ></b-form-file>
                        <hr>
                        <b-row class="justify-content-md-center">
                            <b-button variant="success" type="submit">Загрузить фото</b-button>
                            <b-button variant="danger"><b-icon icon="trash"></b-icon></b-button>
                        </b-row>
                    </b-form>
                </b-col>
            </b-col>
            <b-col lg="7" sm="12">
                <b-row>
                    <b-col cols="3"><label>ID</label></b-col>
                    <b-col cols="9">{{user.id}}</b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col cols="3"><label>Логин</label></b-col>
                    <b-col cols="9">
                        <b-form-input size="sm" v-model="user.login">{{user.login}}</b-form-input>
                    </b-col>
<!--                    <b-col cols="9">{{user.login}}</b-col>-->
                </b-row>
                <hr>
                <b-row>
                    <b-col cols="3"><label>Email</label></b-col>
                    <b-col cols="9">
                        <b-form-input size="sm" v-model="user.email">{{user.email}}</b-form-input>
                    </b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col cols="3"><label>Имя</label></b-col>
                    <b-col cols="9">
                        <b-form-input size="sm" v-model="user.name">{{user.name}}</b-form-input>
                    </b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col cols="3"><label>Фамилия</label></b-col>
                    <b-col cols="9">
                        <b-form-input size="sm" v-model="user.last_name">{{user.last_name}}</b-form-input>
                    </b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col cols="3"><label>Телефон</label></b-col>
                    <b-col cols="9">
                        <b-form-input size="sm" v-model="user.telephone">{{user.telephone}}</b-form-input>
                    </b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col cols="3"><label>О себе</label></b-col>
                    <b-col cols="9">
                        <b-form-input size="sm" v-model="user.description">{{user.description}}</b-form-input>
                    </b-col>
                </b-row>
                <hr>
                <b-row class="justify-content-md-center">
                    <b-button variant="success" v-on:click="update()">
                        Сохранить
                    </b-button>
                    <b-button variant="primary" v-on:click="get()">
                        Обновить данные
                    </b-button>
                </b-row>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
  import axios from 'axios';
  import {USER_UPLOAD_AVATAR} from "../../store/actions/user";

  export default {
    data() {
      return {
        user: {
          email: '',
          login: '',
          name: 'Профиль',
          lastName: '',
          description: '',
          telephone: '',
          age: '',
          gender: '',
        },
        avatarFile: null,
        avatarProps: {
          width: 320,
          height: 320,
          class: '',
          fluidGrow: true,
          thumbnail: true,
        },
        avatar_url: 'https://sun9-55.userapi.com/c616821/v616821043/18473/d17qTVusFqY.jpg',
      }
    },
    methods: {
      makeToast(text = '', title = '', variant = null) {
        this.$bvToast.toast(text, {
          title: title,
          variant: variant || 'default',
          solid: true
        })
      },
      handleFileUpload(){
        console.log('handleFileUpload');
        console.log(this.avatarFile);
      },
      updateAvatar: function (evt) {
        evt.preventDefault()
        let formData = new FormData();

        formData.append('avatarFIle', this.avatarFile);

        this.$store.dispatch(USER_UPLOAD_AVATAR, formData);
        this.get();
      },
      get: function () {
        axios({url: '/api/user/1', data: {}, method: 'get'})
          .then(resp => {
            let user = this.user;
            let data = resp.data.data;

            user.email = data.email;
            user.last_name = data.last_name;
            user.name = data.name;
            user.id = data.id;
            user.login = data.login;
            user.age = data.age;
            this.avatar_url = 'http://derevo.loc/upload' + data.avatar_url;
            user.telephone = data.telephone;
            user.gender = data.gender;
            user.description = data.description;
            this.$store.dispatch('changeHeaderText', user.name + ' ' + user.last_name);
          })
          .catch(err => {
            this.makeToast(err.response.data.message, 'Ошибка', 'danger');
          })
      },
      update: function () {
        axios({url: '/api/user/' + this.user.id, data: this.user, method: 'put',
        })
          .then(resp => {
            let user = this.user;
            let data = resp.data.data;
            user.email = data.email;
            user.last_name = data.last_name;
            user.name = data.name;
            this.makeToast('Информация обновлена', 'Успешно', 'success');
          })
          .catch(err => {
            this.makeToast(err.response.data.message,
              'Ошибка', 'danger');
          })
      },
    },
    created() {
      this.get();
    },
    mounted() {
    },
  }
</script>
