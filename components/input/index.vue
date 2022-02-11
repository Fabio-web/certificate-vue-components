<template>
   <label :class="[
      'input',
      error && 'input-error',
      fullWidth && 'input-fw',
      !!startIcon && 'input-icon-start',
      !!endIcon && 'input-icon-end',
      size
   ]">
      <span class="label">{{ label }}</span>
      <textarea v-if="multiline" :name="name"
                class="item"
                :rows="row" :placeholder="placeholder"
      >{{ value }}</textarea>
      <input class="item" v-else type="text" label=""
             :placeholder="placeholder"
             :disabled="disabled" :rows="row"
             :name="name" :value="value"/>
      <span :class="getTypeIcon()" v-if="startIcon">{{ startIcon }}</span>
      <span :class="[getTypeIcon(), 'end']" v-else-if="endIcon">{{ endIcon }}</span>
      <span class="helper" v-if="helperText">{{ helperText }}</span>
   </label>
</template>

<style scoped lang="scss">
@import "style";
</style>

<script>
import Vue from "vue"

export default Vue.extend({
   name: "Input",
   props: {
      error: Boolean,
      disabled: Boolean,
      fullWidth: Boolean,
      startIcon: String,
      endIcon: String,
      multiline: Boolean,
      row: String,
      label: {
         type: String,
         required: true,
      },
      value: {
         type: String,
         required: true,
      },
      placeholder: {
         type: String,
      },
      helperText: {
         type: String,
      },
      typeIcon: {
         type: String,
         validator(val) {
            return ["", "outlined", "round", "sharp", "two-tone"].includes(val)
         }
      },
      size: {
         type: String,
         validator(val) {
            return ["sm", "md"].includes(val)
         }
      },
   },
   methods: {
      getTypeIcon() {
         return "material-icons" + (typeof this.typeIcon != "undefined" && this.typeIcon.length !== 0 ? '-'+this.typeIcon : "")
      }
   }
})
</script>
