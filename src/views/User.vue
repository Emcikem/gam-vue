<template>
  <el-form label-width="80px">
    <el-form-item label-width="0px">
        <user-table @transferedit="getShowable"></user-table>
        <create-user v-if="showCreateUser" @transfer="getShowable" class="pop"></create-user>
    </el-form-item>
    <el-form-item label-width="0px">
        <el-button type="primary" round @click="createUser">添加用户</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import CreateUser from '../components/CreateUser.vue'
import UserTable from '../components/UserTable.vue'
export default {
  name: 'User',
  components: {
    UserTable,
    CreateUser
  },
  data () {
    return {
      showCreateUser: false
    }
  },
  methods: {
    createUser () {
      this.showCreateUser = true
    },
    getShowable (msg) {
      this.showCreateUser = msg
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
