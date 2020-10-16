<template>
    <b-container>
        <b-card no-body>
            <b-tabs v-model="tabIndex" card>
                <img src="https://sun9-55.userapi.com/c616821/v616821043/18473/d17qTVusFqY.jpg">
            </b-tabs>
        </b-card>
    </b-container>
</template>

<script>
  /*
      Страница для всех пользователей
   */
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    data() {
      return {
        tabIndex: 0
      }
    },
    components: {
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },
    },
    created() {
    },
    mounted() {
      this.$store.dispatch('changeHeaderText', 'Добро пожаловать!');
    },
  }
</script>

<style>
</style>
