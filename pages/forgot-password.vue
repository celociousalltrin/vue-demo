<template>
  <div>
    <h1>Hi from {{ route.name }}</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
