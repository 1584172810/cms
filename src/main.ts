import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './router/index'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './service/axios_demo'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, { locale: zhCn })
app.use(store)

setupStore()
app.use(router)

app.mount('#app')
