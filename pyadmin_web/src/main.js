import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入element plus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// 引入图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus,{ size: 'small', zIndex: 3000 })
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
