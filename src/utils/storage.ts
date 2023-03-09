import { name } from '@/lib/config/base';

interface IStorages {
  name: string;
  _get(key: string): string | null;
  _set(key: string, value: string): void;
  _remove(key: string): void;
  _clear(): void;
  _keys: string[];
}

class BaseStorage {
  protected _prefix = 'company_'; // TODO-Custom 自定义前缀 一般为公司名成缩写

  protected _local: IStorages;

  constructor(protected local: IStorages) {
    this._local = local;

    if (local.name) this._prefix += `${local.name}_`;
  }

  protected _handleData(data: string | null, key: string) {
    const value = data ? JSON.parse(data) : null;
    if (!value) return null;

    if (value.time) {
      const now = new Date().getTime(); // 当前时间
      if (Number(value.time) < now) {
        this._local._remove(this._prefix + key);
        return null;
      }
      return value.value;
    }
    return value.value;
  }

  /**
   * 存数据
   *
   * time (默认永久)
   * ```js
   * set(key, data, 10); => 10分钟
   * ```
   */
  set<T = any>(key: string, value: T, time = 0) {
    const H = time * 1000 * 60;
    const now = new Date().getTime() + H;
    const data = JSON.stringify({ time: time ? String(now) : null, value });
    return this._local._set(this._prefix + key, data);
  }

  /**
   * 获取本地存储
   */
  get<T = any>(key: string): T | null {
    try {
      const data = this._local._get(this._prefix + key);

      return this._handleData(data, key);
    } catch (error) {
      console.log(`getStorage fail: ${key}--------->`, error);
      return null;
    }
  }

  /**
   * 删除本地存储
   *
   * @param {string} key 存储名称
   */
  remove(key: string) {
    this._local._remove(this._prefix + key);
  }

  clear(isAllIn = false) {
    if (isAllIn) {
      this._local._clear();
      return;
    }

    const lasting = 'lasting_';
    const reg = new RegExp(`^${lasting}`);

    this.keys().forEach((key) => {
      if (!reg.test(key)) this.remove(key);
    });
  }

  /**
   * 获取本地存储所有key
   */
  keys() {
    return this._local._keys
      .map((key) => key.replace(new RegExp(`^${this._prefix}`), ''))
      .filter(Boolean);
  }

  protected _removeData(prefix: string) {
    const reg = new RegExp(`^${this._prefix}${prefix}`);
    const data_keys = this.keys().filter((key) => reg.test(key));
    data_keys.forEach((key) => {
      this.remove(key);
    });
  }

  /**
   *  移除所有以 prefix 开头的数据
   *
   *  @param {String} prefix 前缀
   *  ```js
   *    removeAll('user'); 移除所有以user开头的本地缓存
   *  ```
   * */
  removeAll(prefix: string) {
    this._removeData(`${prefix}_`);
  }
}

class Storages extends BaseStorage {
  constructor() {
    super({
      name,
      _get: uni.getStorageSync,
      _set: uni.setStorageSync,
      _clear: uni.clearStorageSync,
      _remove: uni.removeStorageSync,
      _keys: uni.getStorageInfoSync().keys,
    });
  }
}

const _Storage = new Storages();

export default _Storage;
