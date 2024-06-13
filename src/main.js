import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'

import App from './App.vue'
import router from './router'

import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/typography.css'

// router.beforeEach((to, from, next) => {
//   return (insert relevant condition here)
//     ? next()
//     : next(new Error('Navigation aborted'))
// })

router.onError((error) => {
  console.log('Router error:', error)
})

const app = createApp(App).use(IonicVue)
app.use(router)

app.config.errorHandler = (error, compInstance, info) => {
  console.error('Error:', error)
  console.error('Component Instance:', compInstance)
  console.error('Error Info:', info)
}

app.mount('#app')

// router.isReady().then(() => {
//   app.mount('#app')
// })
