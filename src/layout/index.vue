<template>
    <div>
        <nav-bar></nav-bar>
        <router-view />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/layout/components/NavBar.vue'
export default defineComponent({
  name: 'layout',
  components: {
    NavBar
  },
  data () {
    return {
      str: 'wwww',
      img: require('@/assets/logo.png')
    }
  }
})
</script>
<style lang="less" scoped>
</style>
