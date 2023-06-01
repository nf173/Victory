import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  let isThemeDark = ref(false)

  function setThemeMode(to) {
    if(to.meta.is_header_dark === true) {
        isThemeDark.value = true
    } else {
        isThemeDark.value = false
    }
  }

  return { isThemeDark, setThemeMode }
})