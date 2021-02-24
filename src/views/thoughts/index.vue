<template>
  <div class="index">
    <div>{{ str }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'thoughts',
  data () {
    return {
      str: 'thoughts'
    }
  }
})
</script>
