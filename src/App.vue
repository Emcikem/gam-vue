<template>
  <div id="app">
    <router-link to="/createservice">添加服务</router-link>
    <router-link to="/create">注册</router-link>
    <router-link to="/service">服务列表</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
