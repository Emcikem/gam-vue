<template>
  <el-form label-width="80px">
    <el-form-item label-width="0px">
        <equipment-table @transferedit="getShowable"></equipment-table>
        <create-equipment v-show="showCreateEquipment" @transfer="getShowable" class="pop"></create-equipment>
    </el-form-item>
    <el-form-item label-width="0px">
        <el-button type="primary" round @click="createEquipment">添加设备</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import CreateEquipment from '../components/CreateEquipment.vue'
import EquipmentTable from '../components/EquimentTable.vue'
export default {
  name: 'Equipment',
  components: {
    EquipmentTable,
    CreateEquipment
  },
  data () {
    return {
      showCreateEquipment: false
    }
  },
  methods: {
    createEquipment () {
      this.showCreateEquipment = true
    },
    getShowable (msg) {
      this.showCreateEquipment = msg
    }
  }
}
</script>

<style scoped>
.pop {
  background-color: #fff;
  position: fixed;
  top: 15%;
  left: 35%;
  z-index: 2
}
</style>
