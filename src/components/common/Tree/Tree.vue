<template>
    <b-card bg-variant="light">
        <Tree_item_form/>
        <template v-slot:header>
            <h4 class="mb-0">Редактор дерева</h4>
        </template>

        <b-card bg-variant="light">
            <template v-slot:header>
                <h4 class="mb-0">Блок "Человек"</h4>
            </template>
            <Tree_item/>
        </b-card>
        <b-card bg-variant="light">
            <template v-slot:header>
                <h4 class="mb-0">Блок "Поколение"</h4>
            </template>
            <Tree_generation/>
        </b-card>
    </b-card>
</template>

<script>
  import Tree_item from "./Tree_item";
  import Tree_item_form from "./Tree_item_form";
  import Tree_generation from "./Tree_generation";

  export default {
    name: "Tree",
    components: {
      Tree_item,
      Tree_item_form,
      Tree_generation,
    }
  }
</script>

<style scoped>

</style>