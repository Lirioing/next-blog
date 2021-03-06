import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/less/common.less'
import App from './App.vue'
import router from './router'
import store from './store'
import { getTheme } from '@/utils/theme'
getTheme()
createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
