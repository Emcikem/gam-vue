<template>
  <div>
    <el-form ref="form" :model="form" label-width="50px" class="resigter-box">
      <el-form-item label-width="0px">
        <h1> {{titleText}} </h1>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="form.cost" oninput="value=value.replace(/[^\d]/g,'')"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="form.tag" maxlength="10" show-word-limit></el-input>
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
  name: 'CreateService',
  data () {
    return {
      titleText: '创建服务',
      buttonText: '创建',
      form: {
        id: null,
        name: '',
        cost: null,
        tag: '',
        desc: ''
      }
    }
  },
  methods: {
    /**
     * 创建
     */
    resigter () {
      axios.post('api/service/add', {
        name: this.form.name,
        cost: Number(this.form.cost),
        tag: this.form.tag,
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
      axios.post('api/service/change', {
        id: this.form.id,
        name: this.form.name,
        cost: Number(this.form.cost),
        tag: this.form.tag,
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
    cancel () {
      this.id = null
      this.$emit('transfer', false)
      this.titleText = '创建服务'
      this.buttonText = '创建'
    }
  },
  created () {
    eventBus.$on('jianting', (msg, baseData) => { // 子组件通信，获取id
      this.form.id = msg
      this.titleText = msg
      this.titleText = '更新服务'
      this.buttonText = '更新'
      this.form = {
        id: baseData.id,
        name: baseData.name,
        cost: baseData.cost,
        tag: baseData.tag,
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
