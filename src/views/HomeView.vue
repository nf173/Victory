<template>
  <main class="container">
    <!-- <h1 v-typewriter.loop>测试文本</h1> -->
    <div class="bg"></div>
  </main>
</template>

<style scoped lang="scss">
.container {
  min-height: 200vh;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  .bg {
    width: 100%;
    height: 100vh;
    background: url('../assets/imgs/bg_home_01.png') no-repeat;
    background-size: cover;
  }
}
</style>