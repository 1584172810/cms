export function mapMenusToRoutes(userMenus: any) {
  const routes: any = []
  const allRoutes: any = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 循环拿到所有的路由组件
  routeFiles.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route)
  })
  // 添加到一个对象中，如果后端返回url与前端相同
  const _recurseGetRoute = (menus: any[]) => {
    menus.forEach((menu) => {
      menu.children.forEach((item: any) => {
        if (item.level === 1) {
          const route = allRoutes.find((route: any) => {
            return route.default.path === item.url
          })
          if (route) routes.push(route)
        }
      })
    })
  }
  console.log(routes)

  // 然后用addRoute添加到路由中
  _recurseGetRoute(userMenus.data.items)
  return routes
}
