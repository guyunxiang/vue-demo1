<template lang="html">
  <div id="baseinfo">
    <h1>baseinfo</h1>
    {{ message.toFixed(0) }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.message = Math.random(10) * 100
    }
  }
}
</script>

<style lang="css">
</style>
