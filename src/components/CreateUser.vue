<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <label>用户名: </label><input type="text" v-model.trim="username" /> <br />
    <label>密码: </label><input type="password" v-model.trim="password" />
    <br />
    <label>手机号: </label><input type="text" v-model.trim="phoneNumber" />
    <br />
    <input type="checkbox" id="isVipCheckBox" v-model="isVip" /><label
      >isVip
    </label>
    <br />
    <button v-on:click="register">注册</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateUser',
  data () {
    return {
      msg: '创建用户',
      username: '',
      password: '',
      phoneNumber: '',
      isVip: false
    }
  },
  methods: {
    register: function () {
      // this.$Message.info('查询')

      axios
        .post('/api/user/add', { // 创建用户
          username: this.username,
          password: this.password,
          phone: this.phoneNumber,
          isVip: this.isVip ? 1 : 0
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
