# common-uni-template

## TODO-Custom

- 全局搜索 TODO-Custom 即可找到需要自定义配置的位置

## 参考资料

- [路由使用](https://hhyang.cn/v2/start/applets/explian.html)
- [uni-ui 演示地址](https://hellouniapp.dcloud.net.cn/pages/component/view/view)
- [uni-app 自定义组件说明](https://uniapp.dcloud.io/vue-components)
- [uview-ui](https://www.uviewui.com/components/intro.html)

## 请求

### Header 设置

| 属性            | 说明     | 类型   | 可选项 | 默认 |
| --------------- | -------- | ------ | ------ | ---- |
| `Authorization` | 权限令牌 | String | -      | -    |

## 各平台差异判断

### 环境判断

> process.env.VUE_APP_PLATFORM

| 属性        | 说明         |
| ----------- | ------------ |
| `h5`        | h5           |
| `app-plus`  | app          |
| `mp-alipay` | 支付宝小程序 |
| `mp-weixin` | 微信小程序   |
| `mp-baidu`  | 百度小程序   |

### 编译判断

- [platform 参考](https://uniapp.dcloud.io/platform)

## 踩坑指南

- `span` 标签不支持点击事件，可使用 `text`

- 事件传参问题

使用 `for` 循环时， `key` 值必须有值，否则接收参数为 `undefined`

```xml
<view v-for="item in list" :key="item.id" @click="onClick(item)">
  <view>{{item.id}}</view>
</view>
```

```js
list = [{ a: 1 }, { b: 2 }];

onClick(item){
  console.log(item); // undefined;
}
```

- 组件上 `class` 问题

## Mixins

### ListMixins

### ListTabsMixins

## 常用写法

- 表单

```xml
<uni-forms border ref="form">
  <uni-forms-item name="mobile"
                  :error-message="mobile.error">
    <div class="flex-ac">
      <span class="text-red">*</span>
      <div class="cell-label-70">{{mobile.label}}</div>
      <uni-easyinput v-model="mobile.value"
                     :inputBorder="false"
                     :placeholder="mobile.placeholder" />
    </div>
  </uni-forms-item>

  <uni-forms-item name="mobile"
                  :error-message="mobile.error">
    <div class="flex-ac h-100">
      <span class="text-red">*</span>
      <div class="cell-label-70">{{school.label}}</div>
      <div :class="{'text-placeholder': !school.value}"
           class="flex-1 pl-10 ml-3">
        {{school.value || '请输入学校或搜索筛选学校'}}
      </div>
      <sc-icon class="pr-10 pl-10 text-placeholder flex-ac"
               name="search"
               size="20" />
    </div>
  </uni-forms-item>
</uni-forms>
```

- 设置图片

```js
async setImages(content: Dictionary[]) {
  try {
    const key = 'pic';
    const ids = content.map((v) => v[key] && v[key].split(',')[0]).filter(Boolean);

    if (!ids.length) return;

    const imgUrls = (await this.$utils._GetImg(ids)) || [];

    this.list = this.list.map((e) => {
      const img = imgUrls.find((v) => e[key] && e[key].includes(v.id)) || {};
      if (!img) return e;
      return {
        ...e,
        remoteUrl: img.remoteUrl ? img.remoteUrl + ossImgZoom : '/static/images/logo.png',
      };
    });
  } catch (error) {
    this.$utils._GlobalHandleError(error);
  }
}
```

## 支付宝定位

- 存在定位异常情况
  1. 用户是否授权定位
  2. 手机是否给 app 定位权限
  3. 手机是否开定位

1. 先检测是否开启定位(`getSetting`)

2. 出现 `1` 的情况需要使用 `openSetting` 开启授权

3. 出现 `2`、`3` 的情况需要使用 `my.showAuthGuide` 提示开启权限
