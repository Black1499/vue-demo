import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/theme-chalk/index.css';
import echarts from 'echarts';
import Axios from 'axios';


Vue.prototype.$echarts = echarts;



Vue.use(Avue);
Vue.use(ElementUI);
Vue.use(echarts);
Vue.use(Axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

Vue.prototype.$http = Axios;
  
Vue.config.productionTip = false;
