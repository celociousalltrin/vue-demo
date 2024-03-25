<template>
  <div class="container">
    <div class="child-container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;
}
.child-container {
  display: flex;
  justify-content: center;
  box-shadow: 7px 8px 5px 3px black;
  border-radius: 10px;
  background-color: blanchedalmond;
  min-width: 30em;
  padding: 3em;
}
</style>
