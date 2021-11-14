<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <nav-menu/>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王虎</span>
        </el-header>

        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from '../components/Menu.vue'

export default {
  components: {
    navMenu
  },
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
