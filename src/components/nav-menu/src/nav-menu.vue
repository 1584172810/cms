<template>
  <div class="nav-menu">
    <div class="logo">
      <span class="title">Vue3+TS</span>
    </div>

    <el-menu
      class="el-menu-vertical-demo"
      default-active="2"
      background-color="#0c2135"
      :collapse="collapse"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :unique-opened="true"
      :collapse-transition="false"
    >
      <template v-for="item in userMenus" :key="item.pmsProductCategory.id">
        <!-- 一级标题 -->
        <el-sub-menu :index="item.pmsProductCategory.id">
          <template #title>
            <el-icon>
              <CopyDocument />
            </el-icon>
            <span>{{ item.pmsProductCategory.name }}</span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.id">
            <!-- 二级标题 -->
            <el-menu-item
              :index="subItem.id"
              @click="handleMenuItemClick(subItem)"
            >
              <span>{{ subItem.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from 'vuex'

import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter()

    const store = useStore()

    const handleMenuItemClick = (item: any) => {
      router.push(item.url)
    }

    const userMenus = computed(() => store.state.login.userMenus.data.items)

    return {
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  width: 210px;
  background-color: #001529;

  .el-menu-vertical-demo {
    box-sizing: border-box;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>
