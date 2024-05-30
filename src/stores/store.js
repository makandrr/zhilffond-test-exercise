import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const searchResult = ref([])
  const selectedEmployee = ref(null)
  const queryError = ref('')
  const isLoading = ref(false)
  const isNothingFound = ref(false)

  function setQueryError(error) {
    queryError.value = error
  }
  function setSearchResult(result) {
    searchResult.value = result
  }
  function setIsLoading(newIsLoading) {
    isLoading.value = newIsLoading
  }
  function setIsNothingFound(newNothingFound) {
    isNothingFound.value = newNothingFound
  }
  function setSelectedEmployee(employee) {
    selectedEmployee.value = employee
  }

  return {
    setQueryError,
    setSearchResult,
    setIsLoading,
    setIsNothingFound,
    setSelectedEmployee,
    searchResult,
    selectedEmployee,
    queryError,
    isLoading,
    isNothingFound
  }
})
