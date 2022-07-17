<template>
  <div class="common-layout">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '210px'" class="main-aside">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <nav-header @handleFoldChange="foldChange"></nav-header>
        </el-header>
        <el-main class="main-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu/index'
import NavHeader from '@/components/nav-header/index'
export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const foldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }

    return {
      isCollapse,
      foldChange
    }
  }
})
</script>

<style scoped>
.main-container,
.common-layout {
  height: 100%;
}
.main-main {
  background-color: #f0f2f5;
  text-align: center;
}
</style>
