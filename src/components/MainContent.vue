<script setup>
import PrimarySidebar from './PrimarySidebar.vue'
import EmployeeInfo from './EmployeeInfo.vue'
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template>
  <main>
    <primary-sidebar class="sidebar" />
    <div class="content">
      <employee-info v-if="store.selectedEmployee" :employee="store.selectedEmployee" />
      <p class="invitation" v-else>Выберите сотрудника чтобы посмотреть его профиль</p>
    </div>
  </main>
</template>

<style scoped lang="scss">
$border-radius: 10px;
main {
  display: block;
  box-shadow: 0px 0px 10px 0px #0000001a;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex: 1;
  border-radius: $border-radius;
  .sidebar {
    flex-basis: 21rem;
    flex-grow: 1;
    border-radius: $border-radius 0 0 $border-radius;
    border-right: 1px solid var(--c-divider);
  }
  .content {
    padding: 1.7rem 0;
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 60%;
  }
}

.invitation {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
