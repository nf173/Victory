import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', () => {
  let isCollapsed = ref(false)
  let isSticky = ref(false)

  function collapsedChange(is) {
    isCollapsed.value = is
  }

  function stickyChange(is) {
    isSticky.value = is
  }

  return { isCollapsed, isSticky, collapsedChange, stickyChange }
})