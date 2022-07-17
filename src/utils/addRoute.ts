import { mapMenusToRoutes } from '@/utils/map-menu'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

// 修改路由里面的userMenus的数据，惊醒匹配路由
const addRoutes = function () {
  const store = useStore()
  const router = useRouter()
  const pathArr: any = [
    '/main/analysis/dashboard',
    '/main/analysis/overview',
    '/main/product/category',
    '/main/product/goods',
    '/main/story/chat',
    '/main/story/list',
    '/main/system/department',
    '/main/system/menu',
    '/main/system/role',
    '/main/system/user'
  ]
  //遍历添加url
  store.state.login.userMenus.data.items.forEach((item: any) => {
    for (let i = 0; i < item.children.length; i++) {
      item.children[i].url = pathArr[i]
    }
  })
  // 遍历添加路由
  const routes = mapMenusToRoutes(store.state.login.userMenus)
  routes.forEach((item: any) => {
    router.addRoute('main', item.default)
  })
}
export default addRoutes
