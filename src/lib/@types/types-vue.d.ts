import Http from '@/lib/http';

type utils = typeof import('@/utils').default;

declare const $http = new Http();

declare module 'vue/types/vue' {
  interface Vue {
    _uid: number;
    $http: typeof $http;
    $utils: utils;
  }
}
