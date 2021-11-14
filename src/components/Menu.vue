<template>
  <el-aside width="200px">
    <el-menu default-active="1" class="el-menu-vertical-demo" router>
      <!-- 无子集 -->
      <el-menu-item index="/service">
        <i class="el-icon-menu"></i>
        <span slot="title">服务管理</span>
      </el-menu-item>

      <!-- 无子集 -->
      <el-menu-item index="/create">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i> 设备管理
        </template>
        <el-menu-item index="/text">列表管理</el-menu-item>
      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
