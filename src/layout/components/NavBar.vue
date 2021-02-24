<template>
    <div class="header">
        <div class="logo">1</div>
        <div class="router">2</div>
        <div class="login">3</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
})
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eee;
}
.logo {
    width: 20%;
}
.router {
    width: 50%;
}
.login {
    width: 30%;
}
</style>
