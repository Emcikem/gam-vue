<template>
  <div id="app">
    <create-user v-if="showCreateUserModal"></create-user>
    <router-link to="/text">测试</router-link>
    <router-link to="/create">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import createUser from '../src/components/CreateUser.vue'
import myTest from '../src/components/MyTest.vue'

export default {
  name: 'App',
  components: {
    createUser,
    myTest
  },
  data () {
    return {
      showCreateUserModal: false
    }
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
