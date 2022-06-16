import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';
import login, { moduleName as loginName } from './login';
import { RootState } from './type.d';

const state = {
  [loginName]: login.state,
};

const mutations = {};

const actions = {};

const modules = {
  [loginName]: login,
};

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store<RootState>({
  state,
  mutations,
  actions,
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
