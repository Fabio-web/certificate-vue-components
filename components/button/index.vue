<template>
   <button ref="button" :class="[
         'button',
         variant,
         size,
         color,
         disableShadow && 'disableShadow'
     ]" :disabled="disabled">
      <span :class="getTypeIcon()" v-if="startIcon">{{ startIcon }}</span>
      <slot/>
      <span :class="getTypeIcon()" v-if="endIcon">{{ endIcon }}</span>
   </button>
</template>

<style scoped lang="scss">
@import "style";
</style>

<script>
import Vue from "vue"

export default Vue.extend({
   name: "Button",
   props: {
      disabled: Boolean,
      disableShadow: Boolean,
      startIcon: String,
      endIcon: String,
      typeIcon: {
         type: String,
         validator(val) {
            return ["", "outlined", "round", "sharp", "two-tone"].includes(val)
         }
      },
      variant: {
         type: String,
         validator(val) {
            return ["outline", "text"].includes(val)
         }
      },
      size: {
         type: String,
         validator(val) {
            return ["sm", "md", "lg"].includes(val)
         }
      },
      color: {
         type: String,
         default: () => "default",
         validator(val) {
            return ["default", "primary", "secondary", "danger"].includes(val)
         }
      }
   },
   methods: {
      getTypeIcon() {
         return "material-icons" + (typeof this.typeIcon != "undefined" && this.typeIcon.length !== 0 ? "-" + this.typeIcon : "")
      }
   }
})
</script>
