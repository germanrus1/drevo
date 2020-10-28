<template>
    <b-card v-bind:header="cardHeader">
        <b-form @submit="addTree">
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
                <b-button variant="danger" class="mx-1" v-b-toggle.sidebar__right_tree>Отмена</b-button>
                <b-button variant="success"
                          class="mx-1"
                          type="submit"
                >
                    Сохранить
                </b-button>
            </b-row>
        </b-form>
    </b-card>
</template>

<script>


  export default {
    name: "Tree_item_form",
    data() {
      return {
        popoverShow: false,
        cardHeader: 'Добавить человека',
        form: this.$store.getters.getTreeForm,
        // buttonType: this.$store.getters.getButtonType, todo доделать
      }
    },
    methods: {
      addTree(evt) {
        evt.preventDefault()
        this.$store.dispatch('createTree', this.form)
      }
    },
  }
</script>

<style scoped>
</style>