<template>
  <RouterView name="HeaderView" />
  <n-scrollbar 
    style="max-height: 100vh"
    @scroll="handleScroll">
      <RouterView></RouterView>
  </n-scrollbar>
</template>

<script setup>
import { useHeaderStore } from '@/stores'

const headerStore = useHeaderStore()
const offsetY = 300  // 最大偏移量

/* 监听鼠标滚动 header 折叠 */
function handleScroll(e) {
  let scrollTop = document.querySelector('.n-scrollbar-container').scrollTop  // 获取当前滚动距离

  let opacity = scrollTop / offsetY    // 根据滚动距离实时计算透明度
  if (opacity > 1) {   // 边界情况：最大透明度为 1
    opacity = 1
  }
  document.querySelector('.header').style.setProperty('background', `rgba(255, 255, 255, ${opacity})`)

  if (scrollTop > offsetY) {   // 当滚动距离超过设定最大偏移量，触发 header 折叠
    headerStore.collapsedChange(true)
  } else {
    headerStore.collapsedChange(false)
  }
}
</script>
