<template>
    <div id="tree-item__form_continer">
        <div class="my-3">
            <b-button id="tree-item__form" variant="primary" ref="button">
                Reactive Content Using Slots
            </b-button>
        </div>

        <b-card title="Returned values:" v-if="input1Return && input2Return">
            <p class="card-text" style="max-width: 20rem;">
                Name: <strong>{{ input1Return }}</strong><br>
                Color: <strong>{{ input2Return }}</strong>
            </p>
        </b-card>

        <b-popover
                target="tree-item__form"
                triggers="click"
                :show.sync="popoverShow"
                placement="auto"
                container="tree-item__form_continer"
                ref="popover"
                @show="onShow"
                @shown="onShown"
                @hidden="onHidden"
        >
            <template v-slot:title>
                <b-button @click="onClose" class="close" aria-label="Close">
                    <span class="d-inline-block" aria-hidden="true">&times;</span>
                </b-button>
                Редактировать
            </template>
            <div>
                <b-form-group
                        label="Color"
                        label-for="popover-input-2"
                        label-cols="3"
                        class="mb-1"
                        description="Pick a color"
                        invalid-feedback="This field is required"
                >
                    <b-form-select
                            id="popover-input-2"
                            :options="{test:'Муж', test2:'Жен'}"
                            size="sm"
                    ></b-form-select>
                </b-form-group>
                <b-button size="sm" variant="danger">Отмена</b-button>
                <b-button size="sm" variant="primary">Ok</b-button>
            </div>
        </b-popover>
    </div>
</template>

<script>
  export default {
    name: "Tree_item",
    data() {
      return {}
    },
    methods: {
      onClose() {
        this.popoverShow = false
      },
      onOk() {
        if (!this.input1) {
          this.input1state = false
        }
        if (!this.input2) {
          this.input2state = false
        }
        if (this.input1 && this.input2) {
          this.onClose()
          // Return our popover form results
          this.input1Return = this.input1
          this.input2Return = this.input2
        }
      },
      onShow() {
        // This is called just before the popover is shown
        // Reset our popover form variables
        this.input1 = ''
        this.input2 = ''
        this.input1state = null
        this.input2state = null
        this.input1Return = ''
        this.input2Return = ''
      },
      onShown() {
        // Called just after the popover has been shown
        // Transfer focus to the first input
        this.focusRef(this.$refs.input1)
      },
      onHidden() {
        // Called just after the popover has finished hiding
        // Bring focus back to the button
        this.focusRef(this.$refs.button)
      },
      focusRef(ref) {
        // Some references may be a component, functional component, or plain element
        // This handles that check before focusing, assuming a `focus()` method exists
        // We do this in a double `$nextTick()` to ensure components have
        // updated & popover positioned first
        this.$nextTick(() => {
          this.$nextTick(() => {
            (ref.$el || ref).focus();
          })
        })
      }
    }
  }
</script>

<style scoped>
</style>