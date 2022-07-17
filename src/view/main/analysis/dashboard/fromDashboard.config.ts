import { IForm } from '@/base-ui/from'
export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入用密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        {
          title: '篮球',
          value: 'baskboll'
        },
        {
          title: '足球',
          value: 'ball'
        }
      ]
    },
    {
      field: 'createTime',
      type: 'detepicher',
      label: '创建时间',
      placeholder: '请选择时间',
      otherOptions: {
        startPlaceholder: '开始时间'
      }
    }
  ],
  labelWidth: '150px',
  itemStyle: { padding: '10px 20px' },
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 12,
    xs: 24
  }
}
