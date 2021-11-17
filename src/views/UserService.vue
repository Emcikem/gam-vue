<template>
  <el-form label-width="80px">
    <el-form-item label-width="0px">
      <user-service-table @transferedit="getShowable" :currentUsername="currentUsername"></user-service-table>
      <create-user-service v-show="showCreateUser" @transfer="getShowable" class="pop"></create-user-service>
    </el-form-item>
    <el-form-item label-width="0px">
      <el-button type="primary" round @click="createUser">添加用户服务</el-button>
    </el-form-item>
    <el-form-item label-width="0px">
      <span>需要付的金额为:{{ totalMoney }}</span>
      <el-button type="primary" @click="onPayMoney">付款</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import axios from 'axios'
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
      totalMoney: 0,
      remindMoney: 0
    }
  },
  methods: {
    createUser () {
      this.showCreateUser = true
    },
    getShowable (msg) {
      this.showCreateUser = msg
    },
    onPayMoney () {
      let msg = ''
      let money = 0.0
      if (this.remindMoney >= this.totalMoney) {
        msg = '支付成功,从会员卡中扣除' + this.totalMoney + '元,还剩余' + (this.remindMoney - this.totalMoney) + '元'
        money = this.remindMoney - this.totalMoney
      } else {
        msg = '用户还需要支付' + (this.totalMoney - this.remindMoney) + '元'
      }
      axios.post('api/userService/payMoney', {
        username: this.currentUsername,
        money: money
      }).then(res => {
        if (res.data) {
          if (res.data.message !== 'success') {
            msg = res.data.message
          }
          this.$notify({
            message: this.$createElement('i', {style: 'color: teal'}, msg)
          })
        }
      }).catch(err => console.log(err))
    }
  },
  created: function () {
    axios.get('/api/userService/queryMoney', {
      params: {username: this.currentUsername}
    }).then(res => {
      if (res.data && res.data.message === 'success') {
        this.totalMoney = res.data.data
      }
    }).catch(err => console.log(err))
    axios.get('/api/user/queryByUsername', {
      params: {username: this.currentUsername}
    }).then(res => {
      if (res.data && res.data.message === 'success') {
        this.remindMoney = res.data.data.money
      }
    }).catch(err => console.log(err))
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
