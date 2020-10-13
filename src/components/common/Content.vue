<template>
    <b-container>
        <b-row>
            <b-col lg="10" offset-lg="1" sm="12" offset-sm="0">
                <h1>{{headerText}}</h1>
                <keep-alive>
                    <router-view>
                    </router-view>
                </keep-alive>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    name: "Content",
    data() {
      return {
        headerText: 'Заголовок страницы',
      }
    },
    methods: {
    },
    created() {
    }
  }
</script>

<style scoped>

</style>