<template>
  <div>
    <el-form label-width="60xp" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import localCatch from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAccount = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        //判断表单验证
        if (valid) {
          //判断记住密码
          if (isKeepPassword) {
            localCatch.setCatch('username', account.username)
            localCatch.setCatch('password', account.password)
            store.dispatch('login/accountLoginAction', { ...account })
          }
        }
      })
    }
    const account = reactive({
      username: localCatch.getCatch('username') ?? '',
      password: localCatch.getCatch('password') ?? ''
    })
    return {
      account,
      rules,
      loginAccount,
      formRef
    }
  }
})
</script>

<style scoped></style>
