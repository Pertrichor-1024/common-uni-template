import Http from '@/lib/http';
// import api from "@/api";

type utils = typeof import('@/utils').default;

type u = typeof import('@/uview-ui').$u;

declare const $http = new Http();

declare module 'vue/types/vue' {
  interface Vue {
    _uid: number;
    $http: typeof $http;
    // $api: typeof api;
    $utils: utils;
    $u: u;
  }
}
