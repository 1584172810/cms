<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        个人空间
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item>
            <el-icon><CircleClose /></el-icon>
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>
<style scoped></style>
