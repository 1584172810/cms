<template>
  <div>
    <el-form label-width="60xp" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="get-code">
          <el-input v-model="phone.password"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/phone-config'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import localCatch from '@/utils/cache'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      password: ''
    })
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginPhone = (isKeepPassword: boolean) => {
      console.log(formRef)

      formRef.value?.validate((valid) => {
        //判断表单验证
        if (valid) {
          //判断记住密码
          if (isKeepPassword) {
            localCatch.setCatch('name', phone.number)
            localCatch.setCatch('password', phone.password)
            store.dispatch('login/phoneLoginAction', { ...phone })
          }
        }
      })
    }

    return {
      phone,
      rules,
      loginPhone,
      formRef
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
