<template>
   <div class="inputsPage">
      <h2>Inputs</h2>
      <div class="groups">
         <div class="group">
            <Input value="" :label="label" placeholder="Placeholder"/>
         </div>
         <div class="group">
            <Input value="" error :label="label" placeholder="Placeholder"/>
         </div>
         <div class="group">
            <Input value="" disabled :label="label" placeholder="Placeholder"/>
         </div>
         <div class="group">
            <Input value="" :label="label" placeholder="Placeholder" helper-text="Some interesting text"/>
            <Input value="" :label="label" placeholder="Placeholder" error helper-text="Some interesting text"/>
         </div>
         <div class="group">
            <Input label="" value="Text" :label="label" placeholder="Placeholder" type-icon="outlined"
                   start-icon="person"/>
            <Input label="" value="Text" :label="label" placeholder="Placeholder" type-icon="outlined"
                   end-icon="phone"/>
         </div>
         <div class="group">
            <Input label="" value="Text" :label="label" placeholder="Placeholder" size="sm" start-icon="person"/>
            <Input label="" value="Text" :label="label" placeholder="Placeholder" size="md"/>
         </div>
         <div class="group">
            <Input label="" value="Text" :label="label" placeholder="Placeholder"/>
         </div>
         <div class="group">
            <Input value="" :label="label" placeholder="Placeholder" full-width/>
         </div>
         <div class="group">
            <Input value="" :label="label" placeholder="Placeholder" multiline row="4"/>
         </div>
      </div>
   </div>
</template>

<script>
import Vue from "vue"
import Input from "../components/input"

export default Vue.extend({
   components: { Input },
   head: {
      title: "inputs"
   },
   data() {
      return {
         label: "Label"
      }
   },

})
</script>
