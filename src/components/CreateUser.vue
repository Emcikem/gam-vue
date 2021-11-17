<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="resigter-box">
      <el-form-item label-width="0px">
        <h1> {{titleText}} </h1>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
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
        <el-button plain @click="onSubmit">{{ buttonText }}</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import axios from 'axios'
import { eventBus } from '../main'

export default {
  name: 'CreateUser',
  data () {
    return {
      titleText: '创建用户',
      buttonText: '创建',
      form: {
        id: null,
        username: '',
        phone: '',
        isVip: 1,
        money: null
      }
    }
  },
  methods: {
    /**
     * 创建
     */
    resigter () {
      axios.post('api/user/add', {
        username: this.form.username,
        phone: this.form.phone,
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
    /**
     * 更新
     */
    update () {
      axios.post('api/user/change', {
        id: this.form.id,
        username: this.form.username,
        phone: this.form.phone,
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
    /**
     * 复用组件，添加和更新
     */
    onSubmit () {
      if (this.form.id === null) {
        this.resigter()
      } else {
        this.update()
      }
    },
    /**
     * 取消按钮后，进行初始化，并且和父亲组件通信，关闭当前页面
     */
    cancel () {
      this.$emit('transfer', false)
      this.titleText = '创建用户'
      this.buttonText = '创建'
      this.form = {
        id: null,
        name: '',
        stock: null,
        usable: 1,
        desc: ''
      }
    }
  },
  created () {
    /**
     * 子组件通信，采用eventBus进行监听
     * 获取id，从列表页获取id
     * 同时进行更新窗口数据
     */
    eventBus.$on('updateLister', (baseData) => {
      this.titleText = '更新用户'
      this.buttonText = '更新'
      this.form = {
        id: baseData.id,
        username: baseData.username,
        phone: baseData.phone,
        isVip: baseData.isVip,
        money: baseData.money
      }
    })
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
.desc-input {
  height: 1px;
}
</style>
