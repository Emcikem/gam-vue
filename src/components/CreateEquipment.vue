<template>
  <div>
    <el-form ref="form" :model="form" label-width="70px" class="resigter-box">
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
        <el-button plain @click="onResigter">添加</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateEquipment',
  data () {
    return {
      titleText: '创建设备',
      form: {
        name: '',
        stock: null,
        usable: 1,
        desc: ''
      }
    }
  },
  methods: {
    onResigter () {
      axios.post('api/equipment/add', {
        name: this.form.name,
        stock: Number(this.form.stock),
        desc: this.form.desc,
        usable: this.form.usable
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
.desc-input {
  height: 1px;
}
</style>
