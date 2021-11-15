<template>
  <el-form label-width="80px">
    <el-form-item label-width="0px">
        <service-table></service-table>
        <create-service v-if="showCreateService" @transfer="getShowable" class="pop"></create-service>
    </el-form-item>
    <el-form-item label-width="0px">
        <el-button type="primary" round @click="createService">添加服务</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import CreateService from '../components/CreateService.vue'
import ServiceTable from '../components/ServiceTable.vue'
export default {
  name: 'Service',
  components: {
    ServiceTable,
    CreateService
  },
  data () {
    return {
      showCreateService: false
    }
  },
  methods: {
    createService () {
      this.showCreateService = true
    },
    getShowable (msg) {
      this.showCreateService = msg
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
