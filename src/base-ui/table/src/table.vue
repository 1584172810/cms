<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border
    >
      <!-- 选择框 -->
      <el-table-column type="selection" v-if="showSelection"></el-table-column>
      <!-- 序号 -->
      <el-table-column
        type="index"
        label="序号"
        align="center"
        width="60"
        v-if="showSelection"
      ></el-table-column>
      <!-- 内容 -->
      <template v-for="propItem in tableStyle" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
      <!-- 操作 -->
    </el-table>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    tableData: {
      type: Array
    },
    tableStyle: {
      type: Array
    },
    showSelection: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const handleSelectionChange = (value: any) => {
      console.log(value)
    }
    return {
      handleSelectionChange
    }
  }
})
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
}
</style>
