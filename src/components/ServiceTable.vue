<template>
  <div>
    <el-table
      :data="serviceData"
      class="service-table">
      <el-table-column
        label="名称"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="价格"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.cost }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="标签"
        width="180">
        <template slot-scope="scope">
          <div slot="reference" class="tag-wrapper">
            <el-tag size="medium">{{ scope.row.tag }}</el-tag>
          </div>
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
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  tag: 'ServiceTable',
  data () {
    return {
      serviceData: []
    }
  },
  created: function () {
    axios.get('/api/service/queryAll')
      .then(res => {
        if (res.data) {
          this.serviceData = res.data.data
        }
      })
      .catch(err => console.log(err))
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      axios.delete('api/service/delete', {
        params: {id: row.id}
      }).then(res => {
        if (res.data) {
          this.$notify({
            message: this.$createElement('i', {style: 'color: teal'}, res.data.message)
          })
          delete this.serviceData[index]
          // TODO :组件刷新
          this.$router.go(0)
        }
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.service-table {
  border: 1px solid #DCDFE6;
  width: 800px;
  margin: 10px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
</style>
