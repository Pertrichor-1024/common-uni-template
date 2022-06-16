import { GetterTree, MutationTree } from 'vuex';

interface UserInfo {
  id: string;
  name?: string;
  nickName?: string;
}

export interface LoginState {
  userInfo?: UserInfo;
  token?: string;
}

const type = {
  SET_USERINFO: 'SET_USERINFO',
  SET_TOKEN: 'SET_TOKEN',
};

const state: LoginState = {};

const getters: GetterTree<LoginState, any> = {
  userInfo: (state) => state.userInfo,
  token: (state) => state.token,
};

const mutations: MutationTree<LoginState> = {
  [type.SET_USERINFO]: (state, data: LoginState['userInfo']) => {
    state.userInfo = data;
  },
  [type.SET_USERINFO]: (state, data: LoginState['token']) => {
    state.token = data;
  },
};

export const moduleName = 'login';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
