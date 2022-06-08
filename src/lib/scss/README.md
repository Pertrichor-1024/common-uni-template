# 类名说明

> <code style="color:red;">**注意**</code> 需要使用 `dart-sass`

## 配置说明

### 设置自定义配置和颜色路径

#### `小程序` 项目

- [参考文档](https://sass-lang.com/documentation/at-rules/import#load-paths)
- 可以通过命令行参数设置

```sh
# sass -h 查询具体说明
sass --load-path=<PATH> <input> [output]

npx sass --load-path=<PATH> <input> [output]
```

#### `vue` 项目

- [参考文档](https://github.com/webpack-contrib/sass-loader#resolving-import-at-rules)
- 可通过 `vue.config.js` 配置中的 `sass-loader` 设置绝对路径

```js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ['src/styles'], // 自定义查找绝对路径
        },
      },
    },
  },
};
```

## 起步

> 使用前需要依赖几个文件

- `theme.scss`
  - 基础常量
  - 定义单位基本数据
  - 基础颜色
  - 覆盖默认[主题色](./variables.scss)

### 基础常量

> 用于定义变量使用

- `theme.scss`

```scss
$unitType: <单位>; // px rpx ...等
$unitSize: <计算倍数>; // 浏览器为1 小程序为2
```

## 导出 js 数据类型

- 导出 [variables.scss](./variables.scss) 文件中定义的变量
- 支持外部修改，参考[起步](##起步)
- 会添加包含 `var.scss` `theme.scss` 两个文件中的变量

```sh
sass --load-path=<PATH> export-js.scss <input> --no-source-map --no-charset &&
sed -i '' "s/-/_/g; s/;/,/g" <input>

# 如
sass --load-path=src/styles export-js.scss ./src/utils/color.ts  --no-source-map --no-charset &&
sed -i '' "s/-/_/g; s/;/,/g" ./src/utils/color.ts &&
eslint ./src/utils/color.ts --fix
```

```js
// 导出格式
export default {
  BLACK: '#000',
  WHITE: '#fff',
  ...
}
```

## mixins

### `unit` (计算单位)

> 用于兼容不同端的单位和大小

- 示例

```scss
/* 小程序 */
// var.scss`
$unitType: 'rpx';
$unitSize: 2;

// mixins.scss
unit(10) => 20rpx;
unit(11) => 22rpx;

// css
.font-10 => font-size: 20rpx;
.font-11 => font-size: 22rpx;


/* 浏览器 */
//  var.scss`
$unitType: 'px';
$unitSize: 1;

// mixins.scss
unit(10) => 10px;
unit(11) => 11px;

// css
.font-10 => font-size: 10px;
.font-11 => font-size: 11px;
```

## base

```scss
.box-border => box-sizing: border-box;
.box-content => box-sizing: content-box;

.overflow-hidden => overflow: hidden;
.overflow-auto => overflow: auto;
.overflow-scroll => overflow: scroll;
.overflow-visible => overflow: visible;

/* display */
.block => display: block;
.inline => display: inline;
.inline-block => display: inline-block;
.hidden => display: none;
.table => display: table;
.grid => display: grid;

/* position */
.relative => position: relative;
.absolute => position: absolute;
.fixed => position: fixed;
.static => position: static;
.sticky => position: sticky;

```

## flex

```scss
.flex => display: flex;

.flex-1 => flex: 1;
.flex-2 => width: 50%;flex: 0 0 50%;
.flex-3 => width: 33.333%;flex: 0 0 33.333%;
.flex-4 => width: 25%;flex: 0 0 25%;

/* 下面样式都包含 .flex */
.flex-column => flex-direction: column;

.flex-wrap => flex-wrap: wrap;

.flex-ac => align-items: center;,
.flex-ae => align-items: flex-end;
.flex-as => align-items: stretch;

.flex-jc => justify-content: center;
.flex-je => justify-content: flex-end;
.flex-jsb => justify-content: space-between;
.flex-jsa => justify-content: space-around;

.flex-jc-ac => justify-content: center;align-items: center;

```

## font

> 10, 11, 12, ... 39, 40 从 10 开始每次+1<br>

```scss
.font-0 => font-size: 0;
.font-10 => font-size: unit(10);
.font-11 => font-size: unit(11);
... +1
.font-40 => font-size: unit(40);
```

## text

```scss
.text-left => text-align: left;
.text-right => text-align: right;
.text-center => text-align: center;
.text-justify => text-align: justify;
.text-nowrap => text-align: nowrap;
.text-lowercase => text-transform: lowercase;
.text-uppercase => text-transform: uppercase;
.text-capitalize => text-transform: capitalize;
.text-ellipsis => 1行溢出隐藏
.text-ellipsis-2  => 2行溢出隐藏
.text-ellipsis-3  => 3行溢出隐藏
```

## border

```scss
.border-top => 上边框
.border-top--none => 隐藏上边框

.border-bottom => 下边框
.border-bottom--none => 隐藏下边框

.border-left => 左边框
.border-left--none => 隐藏左边框

.border-right => 右边框
.border-right--none => 隐藏右边框

.border-horizontal => 左右边框
.border-horizontal--none => 隐藏左右边框

.border-vertical => 上下边框
.border-vertical--none => 隐藏上下边框

.border-solid => 全边框
.border-solid--none => 隐藏全边框

.border-color => $border-color;
.border-black => $black;
.border-white => $white;
.border-primary => $primary;
.border-green => $green;
.border-orange => $orange;
.border-yellow => $yellow;
.border-red => $red;
.border-gray => $gray-8;
.border-light => $gray-6;
.border-lighter => $gray-4;

.border-radius => border-radius: unit(5);
.border-radius-0 => border-radius: 0;
.border-radius-10 => border-radius: unit(10);
.border-radius-15 => border-radius: unit(15);
... +5
.border-radius-40 => border-radius: unit(40);

.border-radius-circle => border-radius: 100%;
```

## color

- 颜色默认配置文件请参考 [variables.scss](./variables.scss)
- 可以通过外部 `theme.scss` 改变默认配置，配置方法参考前面[配置说明](##配置说明)

> `xx-` 是 `text-` 和 `bg-` <br>
> 如: .xx-white <br>
> .text-white => color: #fff; <br>
> .bg-white => background: #fff; <br>

```scss
.bg-base => background-color: $background-color;

.xx-white => $white;
.xx-black => $black;

// 主题色
.xx-primary => $primary;
.xx-primary-light-1 => $primary-light-1;
.xx-primary-light-2 => $primary-light-2;
...
.xx-primary-light-9 => $primary-light-9;

// 绿色
.xx-green => $green;
.xx-green-soft => $green-soft;
.xx-green-light => $green-light;
.xx-green-lighter => $green-lighter;
.xx-green-extra-light => $green-extra-light;

// 橙色
.xx-orange => $orange;
.xx-orange-soft => $orange-soft;
.xx-orange-light => $orange-light;
.xx-orange-lighter => $orange-lighter;
.xx-orange-extra-light => $orange-extra-light;

// 黄色
.xx-yellow => $yellow;
.xx-yellow-soft => $yellow-soft;
.xx-yellow-light => $yellow-light;
.xx-yellow-lighter => $yellow-lighter;
.xx-yellow-extra-light => $yellow-extra-light;

// 红色
.xx-red => $red;
.xx-red-soft => $red-soft;
.xx-red-light => $red-light;
.xx-red-lighter => $red-lighter;
.xx-red-extra-light => $red-extra-light;

// 灰色
.xx-regular => $gray-8;
.xx-secondary => $gray-7;
.xx-placeholder => $gray-6;
.xx-light => $gray-4;
.xx-lighter => $gray-2;
```

## spacing

> `padding` 和 `margin`

- 规则

> <m|p>\?[t|b|l|r|v|h]-\<num> => 5,10,15,20 ... 45,50。 每次 ＋ 5 最高 50
>
> <m|p>\?[t|b|l|r|v|h]-\<num> => 0,1,2,3,4 支持小于 5 一下的值

```scss
.m-1 => margin: unit(1);
.mt-5 => margin-top: unit(5);
.mr-10 => margin-right: unit(10);
.mb-15 => margin-bottom: unit(15);
.ml-20 => margin-left: unit(20);
.mv-5 => margin-top: unit(5);margin-bottom: unit(5);
.mh-10 => margin-left: unit(10);margin-right: unit(10);

.p-1 => padding: unit(1);
.pt-5 => padding-top: unit(5);
.pr-10 => padding-right: unit(10);
.pb-15 => padding-bottom: unit(15);
.pl-20 => padding-left: unit(20);
.pv-5 => padding-top: unit(5);padding-bottom: unit(5);
.ph-10 => padding-left: unit(10);padding-right: unit(10);

// 兼容iPhone X以上机型 `safe-area-inset-bottom` ios 
.safeArea-p => padding-bottom: safe-area-inset-bottom;
.safeArea-m => margin-bottom: safe-area-inset-bottom;

// 兼容iPhone X以上机型 `safe-area-inset-bottom` ios 
// --footer-button-height 默认为 50px 如果需要修改则在上级class添加(向上查找最近的优先级最高)
// .xxx { --footer-button-height:100px }; 
.safeAreaFooter-p => padding-bottom: --footer-button-height + safe-area-inset-bottom;
.safeAreaFooter-m => margin-bottom: --footer-button-height + safe-area-inset-bottom;
```

## 宽高

> 有 0, 25, 50, 75, 100, auto, screen 的值

```scss
.w-0 => width: 0%;
.h-0 => height: 0%;
.wh-0 => width: 0%;height: 0%;
.w-25 => width: 25%;
.h-25 => height: 25%;
.wh-25 => width: 25%;height: 25%;
... *25%
.w-100 => width: 100%;
.h-100 => height: 100%;
.wh-100 => width: 100%;height: 100%;

.w-auto => width: auto;
.h-auto => height: auto;
.wh-auto => width: auto;height: auto;

.w-screen => width: 100vw;
.h-screen => height: 100vh;
.wh-screen => width: 100vw;height: 100vh;
```

## line-height

> 有 12, 13, 14, ... 24, 25。从 12 开始, 每次＋ 1

```scss
.line-h12 => line-height: 1.2;
.line-h13 => line-height: 1.3;
... +1
.line-h25 => line-height: 2.5;
```

## icon

> 有 20, 21, ... 98, 100。从 12 开始, 每次＋ 2

```scss
.icon-20 => width: unit(20);height: unit(20);
.icon-21 => width: unit(21);height: unit(21);
... +2
.icon-98 => width: unit(98);height: unit(98);
.icon-100 => width: unit(100);height: unit(100);
```

## shadow

```scss
.shadow => 正常阴影
.shadow-mini => 小阴影
.shadow-small => 中阴影
.shadow-large => 大阴影

.shadow-primary => 主色调正常阴影
.shadow-primary-mini => 主色调小阴影
.shadow-primary-small => 主色调中阴影
.shadow-primary-large => 主色调大阴影
/* 还有下面颜色的 */
green、yellow、red、orange

.shadow-inner => 内凹
.shadow-none => 取消阴影
```

## animation

```scss
.loading => 加载动画

#dot => 三个点加载动画
```
