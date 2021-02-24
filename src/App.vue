<template>
  <div>
    <nav-bar></nav-bar>
    <router-view class="container" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }
})
</script>
<style lang="less" secoped>
.container {
  position: relative;
  margin: 20px auto;
  width: 100%;
  max-width: 960px;
  min-height: calc(100vh - 101px);
  background: @bg-white;
}
</style>
