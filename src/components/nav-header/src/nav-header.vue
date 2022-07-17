<template>
  <div class="nav-header">
    <i class="icon">
      <el-icon size="30px" @click="handleIcon">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </i>
    <div class="content">
      <div>
        <s-c-c-bread-crumb :msg="msg"></s-c-c-bread-crumb>
      </div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

import userInfo from './user-info.vue'

import SCCBreadCrumb from '@/base-ui/breadCrumb'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default defineComponent({
  emits: ['handleFoldChange'],
  components: {
    Expand,
    Fold,
    userInfo,
    SCCBreadCrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleIcon = () => {
      isFold.value = !isFold.value
      emit('handleFoldChange', isFold.value)
    }

    const getUrl = (userMenu: any[], userUrl: string): any => {
      let name = ''
      let childrenName = ''
      userMenu.forEach((menu) => {
        menu.children.forEach((item: any) => {
          if (item.url === userUrl) {
            if (!name && !childrenName) {
              console.log(name)

              name = menu.pmsProductCategory.name
              childrenName = item.name
            }
          }
        })
      })
      return [name, childrenName]
    }
    const store = useStore()
    const route = useRoute()
    const msg = computed(() => {
      return getUrl(store.state.login.userMenus.data.items, route.path)
    })

    return {
      handleIcon,
      isFold,
      msg
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  .icon {
    display: flex;
    align-items: center;
  }
  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 0 10px;
  }
}
</style>
