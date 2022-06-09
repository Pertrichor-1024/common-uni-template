import packageJson from './package.json';

const config = {
  /** 版本号 */
  version: packageJson.version,
  /** 项目名 */
  name: packageJson.name,
  /** 项目 logo 路径 在 /assets/images/ 目录下 */
  logo: '/static/images/logo.png',
  /** 开发静态资源路径 为空则是测试服链接 */
  devAssetsPath: '', // ../assets'
  /** oss 项目路径 */
  ossProjectPath: 'app/mini-programs-recycle',
  /** 本地环境是否切换到正式服 */
  isUseEnvPro: false,
  /** 环境配置 */
  envConfig: {
    dev: {},
    uat: {},
    pro: {},
  },
  /* 插件Key */
  pluginKey: {},
  /** 开启 `vConsole`
   * 用户生成环境调试
   * 可以根据`手机号`或者`openid`来指定开启
   * open 默认 true;
   */
  debug: {
    open: false,
    phone: [],
    openid: [],
  },
};

export default config;
