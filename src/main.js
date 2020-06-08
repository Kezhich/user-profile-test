import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VTooltip from 'v-tooltip'
import VueMask from 'v-mask'

Vue.use(VTooltip)
Vue.use(VueMask)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
