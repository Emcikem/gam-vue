<template>
  <div>
    <com-1 inputName="namexxxx"></com-1>
    <com-2></com-2>
    <el-button @click="chec">xx</el-button>
  </div>
</template>

<script>
import Com1 from '../components/com1.vue'
import Com2 from '../components/com2.vue'

export default {
  components: {
    Com1,
    Com2
  },
  name: 'Test',
  data () {
    return {}
  },
  methods: {
    chec () {
      alert('点击成功')
    }
  }
}
</script>

<style scoped>
</style>
