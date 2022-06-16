# 集成 Vuex

- 需要在**_type.d.ts_**文件中将各模块 state 声明在 RootState 接口中

```ts
/**
 * moduleName: 模块名
 * moduleState: 模块内的state
 *
 */
interface RootState {
  moduleName: moduleState;
}
```
