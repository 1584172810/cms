<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTap">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="actionLogin">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login.phone.vue'
export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    let isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()
    let currentTap = ref('account')
    const actionLogin = () => {
      if (currentTap.value === 'account') {
        accountRef.value?.loginAccount(isKeepPassword.value)
      } else {
        phoneRef.value?.loginPhone(isKeepPassword.value)
      }
    }
    return {
      isKeepPassword,
      actionLogin,
      accountRef,
      phoneRef,
      currentTap
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 8px;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
