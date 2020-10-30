<template>
    <b-card bg-variant="light">
        <template v-slot:header>
            <b-row>
                <b-col>
                    <b-button variant="primary" v-b-toggle.sidebar__right_tree_item v-on:click="setFormParams">Добавить человека</b-button>
                </b-col>
                <b-col></b-col>
                <b-col>
                    <b-button variant="primary" v-on:click="refreshTreeItemList">
                        Обновить список
                    </b-button>
                </b-col>
            </b-row>
        </template>
        <div class="generation">
            <div v-for="(item, index) in treeItemList" :key="index" class="generation__item">
                <Tree_item v-bind:form="item"/>
            </div>
        </div>
        <b-sidebar id="sidebar__right_tree_item" v-bind:title="sidebarTitle" right shadow>
            <div class="px-3 py-2">
                <treeItemForm v-bind:treeId="tree.id"></treeItemForm>
            </div>
        </b-sidebar>
    </b-card>
</template>

<script>
  import Tree_item from "./Tree_item";
  import treeItemForm from "./Tree_item_form";
  import axios from "axios";

  export default {
    name: "Tree",
    data() {
      return {
        sidebarTitle: 'Форма заполнения',
        tree: {},
        treeItemList: {},
      }
    },
    methods: {
      refreshTreeItemList() {
        axios({url: '/api/treeItem/list/' + this.$route.params.id + '/', method: 'get',
        })
          .then(resp => {
            let data = resp.data.data;
            this.treeItemList = data.items;
            this.tree = data.tree;
            this.$store.dispatch('changeHeaderText', 'Дерево: ' + data.tree.name);
          })
          .catch(err => {
            this.makeToast(err.response.data.message, 'Ошибка', 'danger');
          })
      },
      setFormParams() {
        this.$store.dispatch('setForm', {})
      }
    },
    created() {
      this.$store.dispatch('changeHeaderText', 'Дерево');
      this.refreshTreeItemList();
    },
    components: {
      Tree_item,
      treeItemForm,
    },
  }
</script>

<style scoped>
    .generation {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        height: 100%;
    }
    .generation__item {
        width: 330px;
        margin: 5px;
    }
</style>