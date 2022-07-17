export const rules = {
  number: [
    {
      required: true,
      message: '手机号为必填',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '用户名必须是11位数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      //必选
      required: true,
      //不对时现实的文字
      message: '验证码必须必传~',
      //失去焦点时验证规则
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码必须是6位数字~',
      trigger: 'blur'
    }
  ]
}
