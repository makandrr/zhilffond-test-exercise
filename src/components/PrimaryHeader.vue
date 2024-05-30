<script setup></script>

<template>
  <header class="header">
    <h1 class="logo"><a href="/">Жилфонд</a></h1>
    <a class="user" href="#">Пользователь</a>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}
.logo a {
  text-decoration: none;
  color: var(--c-primary);
  font-weight: 700;
  font-size: 2rem;
}

.user {
  text-decoration: none;
  color: var(--c-text-dark);
}
</style>
