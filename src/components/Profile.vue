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
      <b-col lg="6" sm="12">
        <b-row>
          <b-col>Имя</b-col> <b-col>{{user.name}}</b-col>
        </b-row>
        <b-row>
          <b-col>Фамилия</b-col> <b-col>{{user.lastName}}</b-col>
        </b-row>
        <b-row>
          <b-col>Логин</b-col> <b-col>{{user.login}}</b-col>
        </b-row>
        <b-row>
          <b-col>Email</b-col> <b-col>{{user.name}}</b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: 'test@qwe.eu',
        login: 'tuz',
        name: 'Damma',
        lastName: 'Boo Bee',
      }
    }
  }
}
</script>
