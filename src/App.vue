<template>
  <div id="app">
    <button v-on:click="greet">创建用户</button>
    <create-user v-if="showCreateUserModal"></create-user>
    <button @click="goto">测试</button>
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
  methods: {
    greet: function () {
      this.showCreateUserModal = true
    },
    goto: function () {
      console.log('1')
      // this.$router.push({ path: '/' })
    }
  }
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
