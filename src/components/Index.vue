<template>
  <div>
    <Header/>
    <b-container>
      <h1>Главная страница</h1>
      <b-row>
        <b-col lg="6" offset-lg="3" sm="12" offset-sm="0">
          <keep-alive>
            <router-view>
            </router-view>
          </keep-alive>
        </b-col>
      </b-row>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Header from './header'
  import Footer from './footer'

  export default {
    data(){
      return {
      }
    },
    components: {
      Header,
      Footer,
    },
    methods: {
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
