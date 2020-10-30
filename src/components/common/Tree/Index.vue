<template>
    <b-card bg-variant="light">
        <template v-slot:header>
            <h4 class="mb-0">Список деревьев</h4>
        </template>
        <b-row class="my-1">
            <b-col>
                <b-button variant="primary" v-b-toggle.sidebar__right_tree v-on:click="setFormParams()">
                    <b-icon icon="tree-fill"
                            variant="success"
                            class="rounded"
                    ></b-icon>
                    Добавить новое дерево
                </b-button>
            </b-col>
            <b-col>
                <b-button variant="primary" v-on:click="refreshTreeList">
                    Обновить список
                </b-button>
            </b-col>
        </b-row>
        <div v-if="Object.keys(treeList).length == 0" class="my-2">Пустой список</div>
        <div v-for="(tree, name, index) in treeList" :key="index">
            <b-row class="my-3">
                <router-link :to="{name: 'tree', params: { id: tree.id }}" style="margin: 5px 0; text-decoration: none">
                    <div class="tree_img">{{tree.id}}</div>
                </router-link>
                <b-col sm="8">
                    <b-row>ID: {{tree.id}}</b-row>
                    <b-row>Имя: {{tree.name}}</b-row>
                    <b-row>Дата изменения: {{tree.updated_at}}</b-row>
                    <b-row>Описание: {{tree.description}}</b-row>
                    <b-row>
                        <b-button class="my-2" variant="primary" v-on:click="setFormParams(tree)" size="sm"
                                  v-b-toggle.sidebar__right_tree>
                            Редактировать
                        </b-button>
                    </b-row>

                </b-col>
            </b-row>
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
    data() {
      return {
        sidebarTitle: 'Добавить дерево',
        treeList: {},
      }
    },
    methods: {
      setFormParams(tree = null) {
        let data = {};

        if (tree != null) {
          this.$store.dispatch('setTypeChange', 'update');
          data = tree;
        } else {
          this.$store.dispatch('setTypeChange', 'create');
        }

        this.$store.dispatch('setTreeForm', data)
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
      this.$store.dispatch('changeHeaderText', 'Список деревьев');
    },
    components: {
      treeForm,
    }
  }
</script>

<style scoped>
    .tree_img {
        height: 3em;
        width: 3em;
        margin: 0 15px;
        background: crimson;
        text-align: center;
        font-size: 3em;
        line-height: 1.5em
    }
</style>