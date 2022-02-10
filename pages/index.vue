<template>
  <div class="buttonPage">
    <h2>Buttons</h2>
    <div class="groups">
      <div class="group">
        <Button>Default</Button>
      </div>
      <div class="group">
        <Button variant="outline">Default</Button>
        <Button variant="text">Default</Button>
      </div>
      <div class="group">
        <Button disable-shadow>Default</Button>
      </div>
      <div class="group">
        <Button disabled>Default</Button>
        <Button variant="text" disabled>Default</Button>
      </div>
      <div class="group">
        <Button start-icon="settings">Default</Button>
        <Button end-icon="waving_hand" type-icon="outlined">Default</Button>
        <Button end-icon="dark_mode" type-icon="two-tone">Default</Button>
      </div>
      <div class="group">
        <Button size="sm" color="primary">Default</Button>
        <Button size="md" color="primary">Default</Button>
        <Button size="lg" color="primary">Default</Button>
      </div>
      <div class="group">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
      </div>
    </div>
  </div>
</template>

<script>

import Button from "../components/button"

export default {
  components: { Button },
  head: {
    title: "buttons"
  }
}
</script>
