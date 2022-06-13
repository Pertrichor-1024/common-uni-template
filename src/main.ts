import Vue from 'vue';
import App from './App.vue';

import http from './setup/http';
import utils from './utils';

Vue.config.productionTip = false;

Vue.prototype.$http = http;
Vue.prototype.$utils = utils;

const app = new App({
  ...App,
});

app.$mount();
