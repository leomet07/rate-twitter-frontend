import Vue from 'vue'
import App from './App.vue'
import store from "./store"
//import firebase from "firebase"
import router from "./routes/index";

Vue.config.productionTip = false
Vue.config.devtools = false
new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      test_con: "hello"

    }

  }
}).$mount('#app')