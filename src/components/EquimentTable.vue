<template>
  <div>
    <el-table
      :data="equipmentData"
      class="service-table">
      <el-table-column
        label="设备"
        width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="库存"
        width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row.stock }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="描述"
        width="200px">
        <template slot-scope="scope">
          <span>{{ scope.row.desc }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="是否可用"
        width="200px">
        <template slot-scope="scope">
          <span>{{ formatUsable(scope.row.usable) }}</span>
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
import { eventBus } from '../main'

export default {
  tag: 'EquipmentTable',
  data () {
    return {
      equipmentData: []
    }
  },
  created: function () {
    axios.get('/api/equipment/queryAll')
      .then(res => {
        if (res.data) {
          this.equipmentData = res.data.data
        }
      })
      .catch(err => console.log(err))
  },
  methods: {
    formatUsable (usable) {
      return usable === 1 ? '可用' : '不可用'
    },
    handleEdit (index, row) {
      eventBus.$emit('updateLister', row.id, row)
      this.$emit('transferEdit', true)
      console.log(index, row)
    },
    handleDelete (index, row) {
      axios.delete('api/equipment/delete', {
        params: {id: row.id}
      }).then(res => {
        if (res.data) {
          this.$notify({
            message: this.$createElement('i', {style: 'color: teal'}, res.data.message)
          })
          delete this.equipmentData[index]
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
  width: 100%;
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
}
</style>
