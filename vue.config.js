console.log('打包平台: >>>>>>>>>>>>>>>', process.env.VUE_APP_PLATFORM);
console.log(
  '打包环境：>>>>>>>>>>>>>>>',
  `${process.env.NODE_ENV === 'development' ? '开发' : '正式'}环境`,
);

module.exports = {
  lintOnSave: false,
};
