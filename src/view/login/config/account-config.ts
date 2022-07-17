export const rules = {
  username: [
    {
      //必选
      required: true,
      //不对时现实的文字
      message: '用户名必须必传~',
      //失去焦点时验证规则
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,11}$/,
      message: '用户名必须是5-11位字母或数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      //必选
      required: true,
      //不对时现实的文字
      message: '密码必须必传~',
      //失去焦点时验证规则
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是5位以上字母或数字~',
      trigger: 'blur'
    }
  ]
}
