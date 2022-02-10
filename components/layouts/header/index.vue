<template>
  <header>
    <div class="title">
      <span>Dev</span>challenges.io
    </div>
    <nav>
      <ul>
        <li><nuxt-link to="/colors" exact active-class="isOnPage">Colors</nuxt-link></li>
        <li><nuxt-link to="/typography" exact active-class="isOnPage">Typography</nuxt-link></li>
        <li><nuxt-link to="/spaces" exact active-class="isOnPage">Spaces</nuxt-link></li>
        <li><nuxt-link to="/" exact active-class="isOnPage">Buttons</nuxt-link></li>
        <li><nuxt-link to="/inputs" exact  active-class="isOnPage">Inputs</nuxt-link></li>
        <li><nuxt-link to="/grid" exact  active-class="isOnPage">Grid</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "style";
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: "Header"
})
</script>
