import Vue from 'vue';
import uView from './uview-ui';
import App from './App.vue';

import store from './store';
import http from './setup/http';
import utils from './utils';

Vue.prototype.$http = http;
Vue.prototype.$utils = utils;

Vue.config.productionTip = false;

console.log('process.env :>>>>>>>>>>>> ', process.env);

Vue.use(uView);

new App({
  store,
}).$mount();
