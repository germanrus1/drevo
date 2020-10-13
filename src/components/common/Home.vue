<template>
    <div>
        test
    </div>
<!--    <b-container>-->
<!--        <h1>Главная страница</h1>-->
<!--        <b-row>-->
<!--            <b-col lg="6" offset-lg="3" sm="12" offset-sm="0">-->
<!--                <keep-alive>-->
<!--                    <router-view>-->
<!--                    </router-view>-->
<!--                </keep-alive>-->
<!--            </b-col>-->
<!--        </b-row>-->
<!--    </b-container>-->
</template>


<script>
  /*
      Страница для зарегестрированного пользователя
   */

  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    data() {
      return {
        tabIndex: 0,
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
      this.$store.commit('setHeaderText', 'Главная страница');
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
