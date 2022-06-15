# common-uni-template

## 参考资料

- [路由使用](https://hhyang.cn/v2/start/applets/explian.html)
- [uni-ui 演示地址](https://hellouniapp.dcloud.net.cn/pages/component/view/view)
- [uni-app 自定义组件说明](https://uniapp.dcloud.io/vue-components)
- [uview-ui](https://www.uviewui.com/components/intro.html)
- [husky 配置](https://juejin.cn/post/6982192362583752741)

## TODO-Custom

- 全局搜索 TODO-Custom 即可找到需要自定义配置的位置

## husky

- 依赖安装完毕后，使用`git add .husky/commit-msg`添加 git hook

## 请求

### Header 设置

| 属性 | 说明 | 类型 | 可选项 | 默认 |
| ---- | ---- | ---- | ------ | ---- |

## 微信开发者工具问题

- 初次将包导入开发者工具时,需要将开发者工具 **_详情-->本地设置-->ES6 转 ES5_** 勾选框取消勾选

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
