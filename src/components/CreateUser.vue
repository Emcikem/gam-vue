<template>
  <div class="hello">
    <el-form ref="form" :model="form" label-width="100px" class="resigter-box">

      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input show-password v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phonenumber"></el-input>
      </el-form-item>

      <el-form-item label="是否是会员">
        <el-radio-group v-model="form.isVip">
          <el-radio :label="1">会员</el-radio>
          <el-radio :label="0">非会员</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button plain @click="onResigter">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateUser',
  data () {
    return {
      form: {
        username: '',
        password: '',
        phonenumber: '',
        isVip: 1
      }
    }
  },
  methods: {
    onResigter () {
      const h = this.$createElement
      axios
        .post('/api/user/add', { // 创建用户
          username: this.form.username,
          password: this.form.password,
          phone: this.form.phoneNumber,
          isVip: this.form.isVip
        })
        .then(function (response) {
          this.$notify({
            title: '提示',
            message: h('i', {style: 'color: teal'}, response.statusText)
          })
        })
        .catch(function (error) {
          this.$notify({
            title: '提示',
            message: h('i', {style: 'color: teal'}, error)
          })
        })
    }
  }
}
</script>

<style scoped>
.resigter-box {
  border: 1px solid #DCDFE6;
  width: 400px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
</style>
