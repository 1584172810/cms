<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in msg" :key="item">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['msg'],
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
