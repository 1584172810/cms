<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import addRoutes from '@/utils/addRoute'

export default defineComponent({
  name: 'App',
  setup() {
    addRoutes()
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
