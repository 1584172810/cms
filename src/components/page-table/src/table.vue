<template>
  <div class="table">
    <Table v-bind="tableConfig">
      <template #header>用户列表</template>
      <template #address="scope">
        <el-button>{{ scope.row.address }}</el-button>
      </template>
      <template #handle>
        <el-button align="center" type="primary">
          <el-icon><EditPen /></el-icon>
          编辑
        </el-button>
        <el-button align="center" type="primary">
          <el-icon><Delete /></el-icon>
          删除
        </el-button>
      </template>
      <template #footer>
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        />
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Table from '@/base-ui/table'
export default defineComponent({
  props: {
    tableConfig: {
      type: Object
    }
  },
  components: {
    Table
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.table {
  margin-top: 20px;
  background-color: #fff;
  line-height: 37.74px;
}
</style>
