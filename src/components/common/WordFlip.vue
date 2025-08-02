<template>
  <div class="header">
    <app-text size="xl" weight="600" class="title">WordFlip</app-text>
    <app-text color="primary">Вивчайте англійські слова з легкістю</app-text>
  </div>
</template>

<script setup>
import { AppText } from '../base';
</script>

<style scoped>
.header {
  text-align: center;
}
.title {
  margin-bottom: 5px;
}
</style>
