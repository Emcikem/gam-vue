<template>
  <el-form label-width="80px">
    <el-form-item label-width="0px">
        <user-service-table @transferedit="getShowable" :username="username"></user-service-table>
        <create-user-service v-show="showCreateUser" @transfer="getShowable" class="pop"></create-user-service>
    </el-form-item>
    <el-form-item label-width="0px">
        <el-button type="primary" round @click="createUser">添加用户服务</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import CreateUserService from '../components/CreateUserService.vue'
import UserServiceTable from '../components/UserServiceTable.vue'
export default {
  name: 'User',
  props: ['currentUsername'],
  components: {
    UserServiceTable,
    CreateUserService
  },
  data () {
    return {
      showCreateUser: false,
      username: ''
    }
  },
  methods: {
    createUser () {
      this.showCreateUser = true
    },
    getShowable (msg) {
      this.showCreateUser = msg
    }
  },
  created: function () {
    this.username = this.currentUsername
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
