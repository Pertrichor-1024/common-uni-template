declare module 'uview-ui';

type u = typeof import('@/uview-ui').$u;
declare namespace UniApp {
  interface Uni {
    $u: u;
  }
}
