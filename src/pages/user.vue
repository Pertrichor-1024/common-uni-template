<template>
  <div>
    <p>{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'User' })
export default class User extends Vue {
  title = '用户';
}
</script>

<style lang="scss">
</style>
