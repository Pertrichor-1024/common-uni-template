import packageJson from "./package.json";

const config = {
  /** 版本号 */
  version: packageJson.version,
  /** 项目名 */
  name: packageJson.name,
  /** 项目 logo 路径 在 /assets/images/ 目录下 */
  logo: "/static/images/logo.png",
  /** 开发静态资源路径 为空则是测试服链接 */
  devAssetsPath: "", // ../assets'
  /** 本地环境是否切换到正式服 */
  isUseEnvPro: false,
  /** 环境配置 */
  envConfig: {},
  // 插件密钥key
  pluginKey: {},
};

export default config;
