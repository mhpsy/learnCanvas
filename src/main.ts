import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


for (const key of Object.keys(ElementPlusIconsVue)) {
    //为了不让ts报错，这里使用了类型断言
    app.component(key, ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue])
}

import * as highlight from 'highlight.js'//引入highlight.js
import 'highlight.js/styles/atom-one-dark.css'//引入样式

app.config.globalProperties.$highlight = highlight

app.use(createPinia())
app.use(router)

app.mount('#app')
