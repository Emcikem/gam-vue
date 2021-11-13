<template>
  <div id="app">
    <!-- <router-view/> -->
    <button v-on:click="greet">创建用户</button>
    <create-user v-if="showCreateUserModal"></create-user>
  </div>
</template>

<script>

import createUser from '../src/components/Create.vue'

export default {
  name: 'App',
  components: {
    createUser
  },
  data () {
    return {
      showCreateUserModal: false
    }
  },
  methods: {
    greet: function () {
      this.showCreateUserModal = true
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
