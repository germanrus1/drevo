<template>
    <b-progress v-model="progressStatus.value" :variant="'danger'"
                striped animated
                class="progress-status"
                :class="{active: progressStatus.isActive}"
    ></b-progress>
</template>

<script>
  export default {
    name: "loadStatus",
    data() {
      return {
        progressStatus: {
          value: 100,
          isActive: false
        },
      }
    },
    methods: {
      // вынести в общий модуль
      showProgressStatus() {
        this.progressStatus.isActive = true;
        let progressStatus = setInterval(() => {
            this.progressStatus.isActive = false;
            console.log(this.progressStatus.isActive);
            clearInterval(progressStatus);
        }, 1500);
      }
    }
  }
</script>

<style>
    .progress-status {
        width: 100%;
        height: 2px;
        opacity: 0;
        transition: opacity .1s;
    }
    .progress-status.active{
        opacity: 1;
    }

</style>