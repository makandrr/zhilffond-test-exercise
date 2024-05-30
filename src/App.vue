<script setup>
import PrimaryHeader from './components/PrimaryHeader.vue'
import MainContent from './components/MainContent.vue'
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="content">
    <primary-header />
    <main-content />
  </div>
  <!-- <RouterView /> -->
</template>

<style lang="scss" scoped>
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
