<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
});
</script>

<style lang="scss">
/*每个页面公共css */
@import './uview-ui/index.scss';
@import './lib/scss/index.scss';
</style>
