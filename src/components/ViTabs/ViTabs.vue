<template>
  <div class="v-tabs">
    <div class="tabs-header">
      <div class="tabs-header_item" :class="{ 'active': currentIndex == i }" v-for="(tab, i) in tabs" :key="i"
        @click="tabsClick(i)">{{ tab.title }}</div>
    </div>
    <div class="tabs-content">
      <div class="tabs-content_item" :class="{ 'active': currentIndex == i }" v-for="(tab, i) in tabs" :key="i">
        <a :href="pane.href" v-for="pane in tab.pane" class="ctab">{{ pane.value }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  tabs: Array
})
const currentIndex = ref(0)

const tabsClick = (i) => {
  currentIndex.value = i
}
</script>

<style lang="scss" scoped>
.v-tabs {
  margin-top: 15px;

  .tabs-header {
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #ececec;

    .tabs-header_item {
      cursor: pointer;
      background: #e5e5e5;
      color: #666;
      padding: 5px 10px;
      font-size: 14px;
      transition: background .2s ease, color .2s ease;

      &:nth-child(1) {
        padding-right: 25px;
        clip-path: polygon(100% 0, 85% 100%, 0 100%, 0 0);
      }

      &:nth-child(2) {
        padding-left: 25px;
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 15% 0);
        transform: translateX(-15px);
      }

      &.tabs-header_item.active {
        background: #37ac4a;
        color: #fff;
      }
    }


  }

  .tabs-content {
    margin: 20px 0;

    .tabs-content_item {
      display: none;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      max-height: 140px;
      overflow: auto;

      &.tabs-content_item.active {
        display: flex;
      }

      .ctab {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: calc((100% - 40px) / 5);
        height: 25px;
        margin-right: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        box-sizing: border-box;
        border: 1px solid #ececec;
        border-radius: 4px;
        padding: 2px 10px;
        font-size: 14px;
        color: #666;
        transition: border .2s ease;

        &:hover {
          border: 1px solid #23ac38;
        }

        &:nth-child(5n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>