/** 支付宝小程序 */
export function isAliPay() {
  return process.env.VUE_APP_PLATFORM === 'mp-alipay';
}
/** H5 */
export function isH5() {
  return process.env.VUE_APP_PLATFORM === 'h5';
}
/** MP-WEIXIN */
export function isWeixin() {
  return process.env.VUE_APP_PLATFORM === 'mp-weixin';
}
/** App */
export function isAppPlus() {
  return process.env.VUE_APP_PLATFORM === 'app-plus';
}
/** 百度小程序 */
export function isBaidu() {
  return process.env.VUE_APP_PLATFORM === 'mp-baidu';
}
/** 微信小程序/支付宝小程序/百度小程序/字节跳动小程序/QQ小程序/360小程序 */
export function isMP() {
  return process.env.VUE_APP_PLATFORM === 'mp';
}
/** 开发环境 */
export function isDev() {
  return process.env.NODE_ENV === 'development';
}
/** 正式环境 */
export function isPro() {
  return process.env.NODE_ENV === 'production';
}
