<template>
  <div>
    <el-container style="height: 100%">
      <!-- 左侧导航栏 -->
      <nav-menu/>
      <!-- 右侧内容 -->
      <el-container>
        <!-- 右侧头部 -->
        <el-header>
          <breadcrumb/>
        </el-header>
        <!-- 右侧主内容 -->
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from '../components/Menu.vue'
import breadcrumb from '../components/Breadcrumb.vue'
export default {
  components: {
    navMenu,
    breadcrumb
  },
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<style scoped>
.el-header {
  background-color: #ffffff;
  color: #333;
  margin-top: 20px;
}

.el-aside {
  color: #333;
}
</style>
