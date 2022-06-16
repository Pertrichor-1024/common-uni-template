import * as login from './login';

export interface RootState {
  [login.moduleName]: login.LoginState;
}
