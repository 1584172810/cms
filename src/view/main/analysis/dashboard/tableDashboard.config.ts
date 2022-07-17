export const tableConfig = {
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-02',
      name: 'Tom2',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-04',
      name: 'Tom3',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-01',
      name: 'Tom4',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2020-05-01',
      name: '成成',
      address: 'No. 189, Grove St, Los Angeles'
    }
  ],
  tableStyle: [
    { prop: 'date', label: '时间', slotName: 'date' },
    { prop: 'address', label: '地址', slotName: 'address' },
    { prop: 'name', label: '姓名', slotName: 'name' },
    { prop: 'handle', label: '操作栏', slotName: 'handle' }
  ],
  showSelection: true
}
