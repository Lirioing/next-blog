<template>
  <div class="index">
    <div>{{ str }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      str: 'about'
    }
  }
})
</script>
