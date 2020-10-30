<template>
    <b-container>
<!--        <b-row>-->
<!--            <b-col lg="10" offset-lg="1" sm="12" offset-sm="0">-->
                <h1>{{this.$store.getters.getPageTitle}}</h1>
                <router-view>
                </router-view>
<!--            </b-col>-->
<!--        </b-row>-->
    </b-container>
</template>

<script>
  export default {
    name: "Content",
    data() {
      return {

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