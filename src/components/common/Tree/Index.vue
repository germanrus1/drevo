<template>
    <b-card bg-variant="light">
        <template v-slot:header>
            <h4 class="mb-0">Список деревьев</h4>
        </template>
        <b-row class="my-1">
            <b-col>
                <b-button variant="primary" v-b-toggle.sidebar__right_tree>
                    <b-icon icon="tree-fill"
                            variant="success"
                            class="rounded"
                            v-on:click="setFormParams"
                    ></b-icon>
                    Добавить новое дерево
                </b-button>
            </b-col>
            <b-col>
                <b-button variant="primary" v-b-toggle.sidebar__right_tree_item v-on:click="refreshTreeList">
                    Обновить список
                </b-button>
            </b-col>
        </b-row>
        <div v-for="(tree, name, index) in treeList" :key="index">
            <router-link :to="{name: 'tree', params: { id: tree.id }}" style="margin: 5px 0; text-decoration: none">
                <b-row>
                    <b-col sm="4">
                        <div style="height: 3em; background: crimson; text-align: center; font-size: 3em; line-height: 1.5em">{{tree.id}}</div>
                    </b-col>
                    <b-col sm="8">
                        <b-row>ID: {{tree.id}}</b-row>
                        <b-row>Имя: {{tree.name}}</b-row>
                        <b-row>Дата изменения: {{tree.updated_at}}</b-row>
                        <b-row>Описание: {{tree.description}}</b-row>
                    </b-col>
                </b-row>
            </router-link>
        </div>
        Дальше тестовые статические данные
        <div v-for="(tree, name, index) in testTrees" :key="index" >
            <router-link :to="{name: 'tree', params: { id: name }}" style="margin: 5px 0; text-decoration: none">
                <b-row>
                    <b-col sm="4">
                        <div style="height: 3em; background: crimson; text-align: center; font-size: 3em; line-height: 1.5em">{{index}}</div>
                    </b-col>
                    <b-col sm="8">
                        <b-row>ID: {{name}}</b-row>
                        <b-row>Имя: {{tree.name}}</b-row>
                        <b-row>Дата изменения: {{tree.updated_at}}</b-row>
                        <b-row>Описание: {{tree.description}}</b-row>
                    </b-col>
                </b-row>
            </router-link>
        </div>

        <b-sidebar id="sidebar__right_tree" v-bind:title="sidebarTitle" right shadow>
            <div class="px-3 py-2">
                <treeForm></treeForm>
            </div>
        </b-sidebar>
    </b-card>
</template>

<script>
  import treeForm from './Tree_form'
  import axios from "axios";

  export default {
    name: "Tree",
    props: {
      form: Object
    },
    data() {
      return {
        sidebarTitle: 'Добавить дерево',
        treeList: {},
        testTrees: {
          1: {
            name: 'Дерево 1',
            description: 'Короткое описание 1 дерева',
            updated_at: '2020-10-18 11:47:35',
          },
          2: {
            name: 'Дерево 2',
            description: 'Короткое описание 2 дерева',
            updated_at: '2020-10-18 11:47:35',
          },
          3: {
            name: 'Дерево 3',
            description: 'Короткое описание 3 дерева',
            updated_at: '2020-10-18 11:47:35',
          },
        },
      }
    },
    methods: {
      setFormParams() {
        this.$store.dispatch('setTreeForm', {})
      },
      refreshTreeList() {
        axios({url: '/api/tree/', method: 'get', data: {}
        })
          .then(resp => {
            let data = resp.data.data;
            this.treeList = data;
          })
          .catch(err => {
            this.makeToast(err.response.data.message, 'Ошибка', 'danger');
          })
      }
    },
    created() {
      this.refreshTreeList();
    },
    components: {
      treeForm,
    }
  }
</script>

<style scoped>

</style>