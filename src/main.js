import Vue from 'vue'
import App from './App.vue'

// 2.导入store
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),

    // 3. 使用，这样就可以在任意的组件里面使用store了
    store: store
}).$mount('#app')
