import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', () => {
  let isCollapsed = ref(false)

  function collapsedChange(is) {
    isCollapsed.value = is
  }

  return { isCollapsed, collapsedChange }
})