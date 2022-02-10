<template>
  <div id="app">
    <Header/>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/app.scss";

#app {
  display: grid;
  grid-template-columns: 237px auto;
  grid-gap: 83px;

  .container {
    padding-top: 55px;
  }
}
</style>

<script>
import Vue from "vue"
import Header from "../components/layouts/header"

export default Vue.extend({
  layout: "default",
  components: {Header}
})
</script>
