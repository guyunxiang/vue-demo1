<template lang="html">
  <div class="container-fluid">
    <nav>
      <router-link class="logo" to="/" exact>logo</router-link>
      <ul>
        <li>
          <router-link
            class="item"
            to="/"
            exact
          >
            首页
          </router-link>
        </li>
        <li>
          <router-link
            class="item"
            to="/info"
          >
            咨询
          </router-link>
        </li>
        <li>
          <router-link
            class="item"
            to="/about"
          >
            关于
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
nav {
  height: 80px;
  line-height: 80px;
  background-color: #f2f2f2;
  .logo {
    float: left;
    margin-left: 20px;
  }
  ul {
    list-style: none;
    float: right;
    margin: 0 20px 0 0;
    li {
      float: left;
      width: 80px;
      text-align: center;
      &:hover {
        a {
          padding-bottom: 3px;
          border-bottom: 3px solid #42b983;
        }
      }
      a.router-link-active {
        & {
          padding-bottom: 3px;
          border-bottom: 3px solid #42b983;
        }
      }
    }
  }
}
a {
  color: #333;
  text-decoration: none;
}
</style>
