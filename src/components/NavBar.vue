<template>
    <div class="header">
      <div class="header__box">
          <div class="logo">lirioing</div>
          <el-row class="row" :gutter="20">
            <el-col :span="24">
              <div class="router">
                <div
                  class="router__item"
                  :class="path == '/index' ? 'router__item--active' : ''"
                  @click="toPage('/index')">
                  首页
                </div>
                <div
                  class="router__item"
                  :class="path == '/articles' ? 'router__item--active' : ''"
                  @click="toPage('/articles')">
                  文章
                </div>
                <div
                  class="router__item"
                  :class="path == '/thoughts' ? 'router__item--active' : ''"
                  @click="toPage('/thoughts')">
                  感想
                </div>
                <div
                  class="router__item"
                  :class="path == '/about' ? 'router__item--active' : ''"
                  @click="toPage('/about')">
                  关于
                </div>
              </div>
            </el-col>
          </el-row>
          <div class="login">
            <el-button class="login__btn" type="primary">登录</el-button>
            <el-popover
              placement="bottom"
              :width="200"
              trigger="click"
            >
              <el-tag class="tags" :class="{active: activeTheme}" @click="changeTheme('default')">默认</el-tag>
              <el-tag class="tags" :class="{active: !activeTheme}" @click="changeTheme('black')">黑色</el-tag>
              <template #reference>
                <el-button class="login__theme" type="text">主题</el-button>
              </template>
            </el-popover>
          </div>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { setTheme } from '@/utils/theme'
export default defineComponent({
  name: 'NarBar',
  data () {
    return {
      path: '',
      activeTheme: true
    }
  },
  watch: {
    $route (to) {
      this.path = to.fullPath
    }
  },
  methods: {
    toPage (path: string) {
      this.$router.push({
        path: path
      })
    },
    changeTheme (theme: string) {
      let flag = false
      if (theme == 'default') flag = true
      this.activeTheme = flag
      setTheme(theme)
    }
  },
  mounted () {
    let theme = localStorage.getItem('theme') || 'default'
    if (theme == 'default') this.activeTheme = true
    let path: string = this.$route.fullPath
    if (path === '/') path = '/index'
    this.path = path
  }
})
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  width: 100%;
  background: @bg-white;
  border-bottom: 1px solid #eee;
  &__box {
    max-width: 960px;
    margin: auto;
    display: flex;
  }
}
.logo {
  width: 100px;
  text-align: left;
}
.row {
  width: calc(100% - 200px);
}
.router {
  display: flex;
  text-align: left;
  &__item {
    width: 70px;
    text-align: center;
    &--active {
      color: @primary;
    }
  }
  &__item:hover {
    color: @primary;
    cursor: pointer;
  }
}
.login {
  width: 200px;
  text-align: right;
  &__btn {
    padding: 10px 20px;
    font-size: 14px;
    background: @primary;
    border-color: @primary;
  }
  &__theme {
    width: 60px;
    color: @primary;
  }
}
.tags {
  color: @primary;
  background: @border-linght;
  border-color: @border-linght;
  margin-right: 10px;
  cursor: pointer;
}
</style>
