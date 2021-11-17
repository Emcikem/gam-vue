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
        label="手机号"
        width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="余额"
        width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row.money }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="是否vip"
        width="200px">
        <template slot-scope="scope">
          <span>{{ formatVip(scope.row.isVip) }}</span>
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
  tag: 'UserTable',
  data () {
    return {
      userData: []
    }
  },
  created: function () {
    axios.get('/api/user/queryAll')
      .then(res => {
        if (res.data) {
          this.userData = res.data.data
        }
      })
      .catch(err => console.log(err))
  },
  methods: {
    formatVip (isVip) {
      return isVip === 1 ? '是' : '否'
    },
    handleEdit (index, row) {
      eventBus.$emit('updateLister', row)
      this.$emit('transferedit', true) // 父子组件
    },
    handleDelete (index, row) {
      axios.delete('api/user/delete', {
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
