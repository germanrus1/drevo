<template>
    <b-card border-variant="success" header="Имя Фамилия" header-bg-variant="info" header-text-variant="white"
    class="tree-item" >
        <b-row>
            <b-col cols="9">
                <b-row>
                    <b-col class="tree-item__fild-name">Имя:</b-col>
                    <b-col class="tree-item__fild-value">Герман</b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col class="tree-item__fild-name">Фамилия:</b-col>
                    <b-col class="tree-item__fild-value">Салюкин</b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col class="tree-item__fild-name">Возраст:</b-col>
                    <b-col class="tree-item__fild-value">24</b-col>
                </b-row>
                <hr>
            </b-col>
            <b-col cols="3">
                <img class="tree-item__photo" src="http://derevo.loc/system_files/default_avatar_incognito.svg">
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
  export default {
    name: "Tree_item",
    data() {
      return {}
    }
  }
</script>

<style scoped>
    .tree-item {
        width: 330px;
        font-size: 0.8em;
    }
    .tree-item__fild-name {
        font-weight: bold;
    }
    .tree-item__fild-value {
    }
    hr {
        /* margin-top: 1rem; */
        /* margin-bottom: 1rem; */
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    .tree-item__photo {
        width: 100%;
    }
</style>