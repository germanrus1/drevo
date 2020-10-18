<template>
    <div class="generation">
        <div class="generation__item"><Tree_item/></div>
        <div class="generation__item"><Tree_item/></div>
        <div class="generation__item"><Tree_item/></div>
    </div>
</template>

<script>
    import Tree_item from "./Tree_item";

  export default {
    name: "Tree",
    components: {
      Tree_item,
    }
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