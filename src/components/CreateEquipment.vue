<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="resigter-box">
      <el-form-item label-width="0px">
        <h1> {{titleText}} </h1>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="库存">
        <el-input v-model="form.stock" oninput="value=value.replace(/[^\d]/g,'')"></el-input>
      </el-form-item>
      <el-form-item label="是否可用">
        <el-radio-group v-model="form.usable">
          <el-radio :label="1">可用</el-radio>
          <el-radio :label="0">不可用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc" type="textarea" :rows="5" maxlength="100" show-word-limit></el-input>
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
  name: 'CreateEquipment',
  data () {
    return {
      titleText: '创建设备',
      buttonText: '创建',
      form: {
        id: null,
        name: '',
        stock: null,
        usable: 1,
        desc: ''
      }
    }
  },
  methods: {
    /**
     * 创建
     */
    resigter () {
      axios.post('api/equipment/add', {
        name: this.form.name,
        stock: Number(this.form.stock),
        usable: this.form.usable,
        desc: this.form.desc
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
      axios.post('api/equipment/change', {
        id: this.form.id,
        name: this.form.name,
        stock: Number(this.form.stock),
        usable: this.form.usable,
        desc: this.form.desc
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
      this.id = null
      this.$emit('transfer', false)
      this.titleText = '创建设备'
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
    eventBus.$on('updateLister1', (msg, baseData) => {
      this.form.id = msg
      this.titleText = '更新服务'
      this.buttonText = '更新'
      this.form = {
        id: baseData.id,
        name: baseData.name,
        stock: baseData.stock,
        usable: baseData.usable,
        desc: baseData.desc
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
