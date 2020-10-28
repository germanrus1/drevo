<template>
    <b-card bg-variant="light">
        <b-button variant="primary" v-b-toggle.sidebar__right_tree_item v-on:click="setFormParams">Добавить человека</b-button>
        <b-card bg-variant="light" v-for="(generate, name, index) in trees" :key="index">
            <template v-slot:header>
                <h4 class="mb-0">{{name}}-ое поколение</h4>
            </template>
            <div class="generation">
                <div v-for="(item, index) in generate" :key="index" class="generation__item">
                    <Tree_item v-bind:form="item"/>
                </div>
            </div>
        </b-card>
        <b-sidebar id="sidebar__right_tree_item" v-bind:title="sidebarTitle" right shadow>
            <div class="px-3 py-2">
                <treeItemForm></treeItemForm>
            </div>
        </b-sidebar>
    </b-card>
</template>

<script>
  import Tree_item from "./Tree_item";
  import treeItemForm from "./Tree_item_form";

  export default {
    name: "Tree",
    data() {
      return {
        form: {
          name: '',
          avatar_url: '',
          created_at: '',
          updated_at: '',
          description: '',
        },
        sidebarTitle: 'Форма заполнения',
        trees: { // Тестовое
          1: { // Первое поколение
            1: { // индекс соответствует id человека
              id: 1,
              name: 'Николай',
              last_name: 'Салюкин',
              data_of_birth: '04.12.1964',
              patronymic: 'Иванович',
              data_of_death: '',
              gender: 0,
              father_parent_id: '',
              mother_parent_id: '',
              adopted: false,
              avatar_url: '',
              description: 'Мой отец',
            },
            2: {
              id: 2,
              name: 'Вера',
              last_name: 'Салюкина',
              data_of_birth: '16.03.1963',
              patronymic: 'Ивановна',
              data_of_death: '',
              gender: 1,
              father_parent_id: '',
              mother_parent_id: '',
              adopted: false,
              avatar_url: '',
              description: 'Моя мама',
            },
            3: {
              id: 3,
              name: 'Герман',
              last_name: 'Салюкин',
              data_of_birth: '08.10.1996',
              patronymic: 'Николаевич',
              data_of_death: '',
              gender: 0,
              father_parent_id: 1,
              mother_parent_id: 2,
              adopted: false,
              avatar_url: '',
              description: 'Я',
            },
            4: {
              id: 4,
              name: 'Иван',
              last_name: 'Глухов',
              data_of_birth: '08.10.1928',
              patronymic: 'Абрамович',
              data_of_death: '09.06.2010',
              gender: 0,
              father_parent_id:'',
              mother_parent_id: '',
              adopted: false,
              avatar_url: '',
              description: 'Дедушка, отец мамы',
            }
          }
        }
      }
    },
    methods: {
      setFormParams() {
        this.$store.dispatch('setForm', {})
      }
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