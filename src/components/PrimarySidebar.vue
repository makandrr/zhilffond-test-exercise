<script setup>
import SearchResult from './SearchResult.vue'
import debounce from 'lodash.debounce'
import axios from 'axios'
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'

const searchInput = ref('')
const store = useStore()
const search = debounce(async () => {
  const searchPrompt = searchInput.value.trim()
  try {
    const result1 = (
      await axios.get(`https://jsonplaceholder.typicode.com/users?username=${searchPrompt}`)
    ).data
    const result2 = (
      await axios.get(`https://jsonplaceholder.typicode.com/users?id=${searchPrompt}`)
    ).data
    const result3 = (
      await axios.get(`https://jsonplaceholder.typicode.com/users?name=${searchPrompt}`)
    ).data
    const finalResult = [...result1, ...result2, ...result3]
    if (finalResult.length === 0) store.setIsNothingFound(true)
    else store.setSearchResult(finalResult)
  } catch (_) {
    store.setQueryError('Ошибка')
    store.setIsLoading(false)
  }
  store.setIsLoading(false)
}, 400)
watch(searchInput, () => {
  store.setSelectedEmployee(null)
  store.setSearchResult([])
  store.setIsNothingFound(false)
  if (!searchInput.value.trim()) return
  store.setIsLoading(true)
  search()
})
</script>

<template>
  <sidebar>
    <section class="search-section">
      <h1>Поиск сотрудников</h1>
      <input
        class="search-input"
        name="search"
        type="search"
        placeholder="Введите id или имя"
        v-model="searchInput"
      />
    </section>
    <section class="results-section">
      <h1>Результаты</h1>
      <p v-if="store.queryError" class="error">{store.queryError}</p>
      <p v-else-if="store.isLoading">Загрузка...</p>
      <p v-else-if="store.isNothingFound">Ничего не найдено</p>
      <search-result v-else-if="store.searchResult.length > 0" class="search-result" />
      <p v-else>Начните поиск</p>
    </section>
  </sidebar>
</template>

<style scoped lang="scss">
sidebar {
  padding: 1.7rem 1.25rem;
  background-color: var(--c-white-soft);
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}
h1 {
  font-weight: 600;
  font-size: 1rem;
}
.search-input {
  margin-top: 1rem;
}
.results-section {
  flex: 1 1 0;
  flex-direction: column;
  display: flex;
  .search-result {
    flex: 1 1 0;
  }
}
</style>
