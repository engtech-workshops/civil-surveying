import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const showDisplayZone = ref(false)
  function toggleDisplayZone() {
    showDisplayZone.value = !showDisplayZone.value
    console.log(showDisplayZone.value)
  }
  return {
    showDisplayZone,
    toggleDisplayZone,
  }
})
