<template lang="html">
  <div id="info">
    <my-header />
    <div class="layout">
      <my-menu></my-menu>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './Header'
import MyMenu from './Menu'
export default {
  components: {
    MyHeader,
    MyMenu
  }
}
</script>

<style lang="less" scoped>
#info {
  .content {
    margin: 16px;
    float: left;
  }
}
</style>
