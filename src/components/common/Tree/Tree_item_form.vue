<template>
    <b-card v-bind:header="this.cardHeader">
        <b-form @submit="changeTreeItem">
            <div v-for="(field, name, index) in form" v-bind:key="index">
                <b-form-group
                        v-if="field.show !== false"
                        :label="field.label"
                        :label-for="'popover-field-' + field.name"
                        label-cols="6"
                        class="mb-1"
                >
                    <b-form-input v-if="field.select === undefined"
                            :id="'popover-field-' + name"
                            size="sm"
                            v-model="field.value"
                    ></b-form-input>
                    <b-form-select v-else
                            id="'popover-field-' + name"
                            :options="field.select"
                            v-model="field.select[field.value]"
                            size="sm"
                    ></b-form-select>
                </b-form-group>
            </div>
            <b-row class="my-3 justify-content-center">
                <b-button variant="danger" class="mx-1" v-b-toggle.sidebar__right_tree_item>Отмена</b-button>
                <b-button v-bind:variant="buttonType"
                          class="mx-1"
                          type="submit"
                >
                    {{(buttonType == 'success') ? 'Сохранить' : 'Добавить'}}
                </b-button>
            </b-row>
        </b-form>
    </b-card>
</template>

<script>


  export default {
    name: "Tree_item_form",
    props: {
      treeId: Number,
    },
    data() {
      return {
        popoverShow: false,
        form: this.$store.getters.getForm,
      }
    },
    methods: {
      changeTreeItem(evt) {
        evt.preventDefault()

        // присваивание полям с undefined пустые значения, что бы на сервер тоже отправлялись
        for (var prop in this.form) {
          this.form[prop].value = (this.form[prop].value === undefined) ? '' : this.form[prop].value;
        }
        if (this.form.id) {
          this.$store.dispatch('updateTreeItem', {form: this.form, id: this.form.id})
        } else {
          this.$store.dispatch('createTreeItem', {form: this.form, tree_id: this.treeId})

        }
      }
    },
    computed: {
      buttonType: function () {
        return this.$store.getters.getTypeChange == 'update' ? 'success' : 'primary'
      },
      cardHeader: function () {
        return this.$store.getters.getTypeChange == 'update' ? 'Изменить данные' : 'Добавить человека'
      },
    }
  }
</script>

<style scoped>
</style>