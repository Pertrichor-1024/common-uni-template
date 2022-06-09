import type Request, { HttpResponse, HttpRequestConfig } from 'luch-request';
import { Dictionary } from '@/@types/index.d';

// TODO-Custom 后端API自定义返回数据结构
export interface CustomResponse<T> {
  data: T;
  errcode: string;
  errmsg: string;
}

// 缓冲动画显示控制配置
interface Loading {
  loading?: {
    isShow?: boolean;
    title?: string;
  };
}

// TODO-Custom 自定义全局请求头
interface Header extends Dictionary {
  Authorization?: string | null; // 一般用此字段存Token,根据实际情况更改,和@/setup/http.ts为文件中的23行字段保持一致
}

interface RequestConfig extends HttpRequestConfig<UniApp.RequestTask>, Loading {
  header?: Header;
}

type PromiseRequest<T> = Promise<HttpResponse<CustomResponse<T>>['data']>;

export interface RequestCallback {
  <T = any>(u: string, d?: Dictionary, c?: RequestConfig): PromiseRequest<T>;
}

export interface HttpConfig {
  header: Header;
  interceptors?: {
    request?: Parameters<Request['interceptors']['request']['use']>;
    response?: Parameters<Request['interceptors']['response']['use']>;
  };
}
