<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="resigter-box">
      <el-form-item label-width="0px">
        <h1> {{titleText}} </h1>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input show-password v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phonenumber"></el-input>
      </el-form-item>
      <el-form-item label="充值金额">
        <el-input v-model="form.money"></el-input>
      </el-form-item>
      <el-form-item label="会员">
        <el-radio-group v-model="form.isVip">
          <el-radio :label="1">会员</el-radio>
          <el-radio :label="0">非会员</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label-width="0px">
        <el-button plain @click="onResigter">注册</el-button>
        <el-button @click="cancel">取消</el-button>
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
      titleText: '创建用户',
      form: {
        username: '',
        password: '',
        phonenumber: '',
        isVip: 1,
        money: null
      }
    }
  },
  methods: {
    onResigter () {
      axios.post('api/user/add', {
        username: this.form.username,
        password: this.form.password,
        phonenumber: this.form.phonenumber,
        isVip: this.form.isVip,
        money: Number(this.form.money)
      }).then(res => {
        if (res.data) {
          this.$notify({
            message: this.$createElement('i', {style: 'color: teal'}, res.data.message)
          })
        }
      }).catch(err => console.log(err))
    },
    cancel () {
      this.$emit('transfer', false)
    }
  }
}
</script>

<style scoped>
.resigter-box {
  border: 1px solid #DCDFE6;
  width: 400px;
  margin: 10px auto;
  padding: 35px 20px 15px 20px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
</style>
