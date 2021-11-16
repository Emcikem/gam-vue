<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ inputName }} </h1>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  name: 'com1',
  props: {
    inputName: String
  },
  data () {
    return {
      msg: '1'
    }
  },
  mounted () {
    eventBus.$on('jianting', (msg) => {
      this.msg += msg
    })
  }
}
</script>

<style scoped>
</style>
