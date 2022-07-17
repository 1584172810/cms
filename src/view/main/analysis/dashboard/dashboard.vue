<template>
  <div class="dashboard">
    <SCCFrom v-bind="formConfig" v-model="formData">
      <template #header>
        <h1>高级</h1>
      </template>
      <template #footer>
        <div class="button">
          <el-button color="#626aef">重置</el-button>
          <el-button color="#626aef">搜索</el-button>
        </div>
      </template>
    </SCCFrom>
    <div class="table">
      <PageTable :tableConfig="tableConfig"></PageTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { formConfig } from './fromDashboard.config'

import PageTable from '@/components/page-table'
import { tableConfig } from './tableDashboard.config'

import SCCFrom from '@/base-ui/from'
export default defineComponent({
  components: {
    SCCFrom,
    PageTable
  },
  name: 'dashboard',
  setup() {
    const formData = ref({
      id: '',
      name: '',
      sport: '',
      password: ''
    })

    return {
      formData,
      formConfig,
      tableConfig
    }
  }
})
</script>

<style scoped>
.button {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
