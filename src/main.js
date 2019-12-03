/* eslint-disable no-multi-spaces */
import Vue from 'vue'
import App from './App.vue'

import 'materialize-css'                            // imports materialize javascript
import 'materialize-css/dist/css/materialize.css'   // imports materialize css

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
