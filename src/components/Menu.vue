<template lang="html">
  <div id="menu">
    <ul>
      <router-link tag="li" v-for="item in items" :to="{ path: item.url }">
        {{ item.text }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        text: '基础信息',
        url: 'baseinfo'
      }, {
        text: '合作资料',
        url: 'coopeation'
      }, {
        text: '账号管理',
        url: 'account'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  float: left;
  margin-left: 20px;
  padding-left: 0;
  width: 200px;
  list-style: none;
  border-width: 1px 1px 0 1px;
  border-color: #ccc;
  border-style: solid;
  li {
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    &.router-link-active {
      background-color: #f2f2f2;
    }
    &:hover {
      background-color: #f2f2f2;
    }
  }
}
</style>
