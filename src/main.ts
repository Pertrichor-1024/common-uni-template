import Vue from 'vue';
import App from './App.vue';

import http from './setup/http';

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new App().$mount();
