<template>
  <div>
    <el-button @click="dianji">点击</el-button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  name: 'com2',
  data () {
    return {}
  },
  methods: {
    dianji () {
      eventBus.$emit('jianting', 10000)
    }
  }
}
</script>

<style scoped>
</style>
