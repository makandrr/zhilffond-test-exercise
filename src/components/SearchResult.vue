<script setup>
import { useStore } from '@/stores/store'

const store = useStore()

function onSelectEmployee(user) {
  store.setSelectedEmployee(user)
}
</script>

<template>
  <ul>
    <li
      :class="{ active: store.selectedEmployee && user.id === store.selectedEmployee.id }"
      v-for="user in store.searchResult"
      :key="user.id"
      @click="onSelectEmployee(user)"
    >
      <div class="avatar">
        <img src="/userPlaceholder.png" alt="" />
      </div>
      <div class="info">
        <p class="name">{{ user.name }}</p>
        <p class="email">{{ user.email }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  overflow-y: auto;
  padding: 10px;
  min-height: 30rem;
}
li {
  display: flex;
  box-shadow: 0px 0px 10px 0px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
}
li.active {
  background-color: var(--c-white-dark);
  outline: 1px solid var(--c-white-dark);
}
li + li {
  margin-top: 1.2rem;
}
.avatar {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.1rem;
  border-radius: 10px 0 0 10px;
  border-right: 1px solid var(--c-divider);
  background-color: #fff;
  & > img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }
}
.info p {
  line-height: 1;
  font-size: 0.8rem;
}
.info .name {
  font-weight: 600;
  color: var(--c-heading);
}
.info .email {
  margin-top: 0.5rem;
}
</style>
