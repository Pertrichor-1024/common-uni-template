import Http from '@/lib/http';
import Storage from '@/utils/storage';

const Token = () => {
  const Authorization = Storage.get('token');
  return Authorization ? { Authorization } : {};
};

// TODO-Custom 实现登录函数,用于token失效时重新请求
async function login() {}

const http = new Http({
  header: {}, // TODO-Custom 在这里设置全局自定义请求头
});

http.setInterceptor({
  request: [
    (res) => {
      const header = res.header || {};
      // TODO-Custom token不一定放在Authorization请求头中,需要根据实际情况配置该字段,记得更改@/lib/http/type.d.ts文件的21行字段
      const { Authorization } = header;
      if (Authorization === null || JSON.stringify(Authorization) === '{}') {
        delete header.Authorization;
        return res;
      }

      const token = Token();
      if (!token.Authorization) {
        delete header.Authorization;
      }
      res.header = { ...header, ...token };
      return res;
    },
  ],
  response: [
    (res) => {
      console.log('响应链接 :', res.config.url);
      console.log('响应数据 :', res);
      // TODO-Custom 可在此处添加响应拦截
      return res;
    },
    async (error) => {
      console.log('响应错误 :', error);

      // TODO-Custom token过期处理,默认重新登陆,然后调用之前接口
      if (error.statusCode === 401) {
        Storage.remove('token');
        console.log('------401错误请求重新获取Token------');

        await login();

        if (Object.keys(Token()).length) {
          const request = http.request({
            url: error.config.url,
            method: error.config.method,
            params: error.config.params,
            data: error.config.data,
            header: error.config,
            dataType: error.config.dataType,
          });
          return request;
        }

        return error;
      }

      return error;
    },
  ],
});

export default http;
