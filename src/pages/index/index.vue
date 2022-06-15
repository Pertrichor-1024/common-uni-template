<template>
  <view class="p-10">
    <text>{{ title }}</text>
    <u-input placeholder="请输入"
             border></u-input>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Home' })
export default class Home extends Vue {
  title = 'Hello World';
}
</script>

<style lang="scss">
</style>
