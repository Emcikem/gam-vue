<template>
  <div>
    <el-table
      :data="userData"
      class="user-table">
      <el-table-column
        label="用户名"
        width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="服务内容"
        width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row.serviceName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="价格"
        width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row.serviceCost }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="服务时间"
        width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row.serviceTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="是否使用"
        width="200px">
        <template slot-scope="scope">
          <span>{{ formatVip(scope.row.isUsed) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            slot="reference"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import { eventBus } from '../main.js'
export default {
  name: 'UserServiceTable',
  props: ['currentUsername'],
  data () {
    return {
      userData: []
    }
  },
  created: function () {
    axios.get('/api/userService/query', {
      params: {username: this.currentUsername}
    }).then(res => {
      if (res.data) {
        this.userData = res.data.data
      }
    }).catch(err => console.log(err))
  },
  methods: {
    formatVip (isVip) {
      return isVip === 1 ? '是' : '否'
    },
    handleEdit (index, row) {
      eventBus.$emit('updateLister', row.id, row)
      this.$emit('transferedit', true) // 父子组件
    },
    handleDelete (index, row) {
      axios.delete('api/userService/delete', {
        params: {id: row.id}
      }).then(res => {
        if (res.data) {
          this.$notify({
            message: this.$createElement('i', {style: 'color: teal'}, res.data.message)
          })
          delete this.userData[index]
          // TODO :组件刷新
          this.$router.go(0)
        }
      }).catch(err => console.log(err))
    }
  },
  watch: {
    currentUsername: function (val) {
      axios.get('/api/userService/query', {
        params: {username: val}
      }).then(res => {
        if (res.data) {
          this.userData = res.data.data
        }
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.user-table {
  border: 1px solid #DCDFE6;
  width: 100%;
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
}
</style>
