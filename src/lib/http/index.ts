import Request from 'luch-request';
import Loading from '@/utils/loading';
import type { HttpConfig, RequestCallback } from './types.d';

export default class Http {
  private header = <HttpConfig['header']>{};

  private http!: Request;

  constructor(options: HttpConfig) {
    const { header, interceptors } = options;
    this.header = header;
    this.init();
    if (interceptors) this.setInterceptor(interceptors);
  }

  private init() {
    if (this.http) return this.http;
    this.http = new Request({ header: this.header });
    return this.http;
  }

  setInterceptor(interceptors: HttpConfig['interceptors']) {
    if (!this.http) return;
    if (interceptors?.request) {
      this.http.interceptors.request.use(...interceptors.request);
    }
    if (interceptors?.response) {
      this.http.interceptors.response.use(...interceptors.response);
    }
  }

  baseHttp: RequestCallback = async (u, d, c = {}) => {
    const http = this.init();
    const load = { isShow: false, title: '加载中...', ...c.loading };
    if (load.isShow) Loading.show(load);
    return new Promise((resolve, reject) => {
      http
        .request({ url: u, ...d, ...c })
        .then((res) => {
          if (res.statusCode === 200) {
            resolve(res.data);
            return;
          }
          reject(res.data);
        })
        .catch(reject)
        .finally(() => {
          Loading.hide();
        });
    });
  };

  get: RequestCallback = (u, d = {}, c) => this.baseHttp(u, { params: d }, { ...c, method: 'GET' });

  post: RequestCallback = (u, d = {}, c) => {
    return this.baseHttp(u, { params: d }, { ...c, method: 'POST' });
  };

  request(...args: Parameters<Request['request']>) {
    return this.http?.request(...args);
  }
}
