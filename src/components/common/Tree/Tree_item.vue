<template>
    <b-card border-variant="info" header="Имя Фамилия"
            header-bg-variant="info" footer-bg-variant="warning" header-text-variant="white"
    class="tree-item" >
        <template v-slot:header>
            <b-row>
                <b-col class="text-center" v-b-toggle.sidebar__right_tree_item v-on:click="setFormParams('parent')">
                    <b-button variant="warning">
                        <b-icon icon="plus-square-fill"
                                variant="danger"
                                class="rounded"
                        ></b-icon>
                        Добавить наследника
                    </b-button>
                </b-col>
            </b-row>
        </template>
        <b-row>
            <b-col cols="9">
                <b-row>
                    <b-col class="tree-item__fild-name">Имя:</b-col>
                    <b-col class="tree-item__fild-value">{{form.name}}</b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col class="tree-item__fild-name">Фамилия:</b-col>
                    <b-col class="tree-item__fild-value">{{form.last_name}}</b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col class="tree-item__fild-name">Пол:</b-col>
                    <b-col class="tree-item__fild-value">{{form.gender ? 'Женский' : 'Мужской'}}</b-col>
                </b-row>
                <hr>
                <b-row class="justify-content-center">
                    <b-button variant="primary" v-on:click="setFormParams('self')" v-b-toggle.sidebar__right_tree_item>
                        Редактировать
                    </b-button>
                </b-row>
            </b-col>
            <b-col cols="3">
                <img class="tree-item__photo" src="http://derevo.loc/system_files/default_avatar_incognito.svg">
                <div class="text-center my-3">id: {{form.id}}</div>
            </b-col>
        </b-row>
        <template v-slot:footer>
            <b-row>
                <b-col class="text-center" v-b-toggle.sidebar__right_tree_item v-on:click="setFormParams('child')">
                    <b-button variant="danger">
                        <b-icon icon="plus-square-fill"
                                variant="light"
                                class="rounded"
                        ></b-icon>
                        Добавить родителя
                    </b-button>
                </b-col>
            </b-row>
        </template>
    </b-card>
</template>

<script>

  export default {
    name: "Tree_item",
    props: {
      form: Object,
    },
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
      setFormParams(type) {
        let data = {};

        if (type == 'self') {
          this.$store.dispatch('setTypeChange', 'update');
          data = this.form;
        } else {

          this.$store.dispatch('setTypeChange', 'create');
          if (this.form.gender === 0) {
            data.father_parent_id = this.form.id
          } else {
            data.mother_parent_id = this.form.id
          }
        }

        this.$store.dispatch('setForm', data)
      }
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