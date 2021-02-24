<template>
  <div class="index">
    <div class="time">
      距{{ holiday }}倒计时：
      <span class="time__day">{{ day }}</span>天
      <span class="time__hour">{{ hour }}</span>时
      <span class="time__minute">{{ minute }}</span>分
      <span class="time__second">{{ second }}</span>秒
      <img class="time__speak" :src="require('@/assets/img/speak.png')" @click="playVoice" alt="">
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { formatDate } from '@/utils/utils'
const synth = window.speechSynthesis
const msg = new SpeechSynthesisUtterance()
export default defineComponent({
  data () {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      holiday: ''
    }
  },
  computed: {
  },
  mounted () {
    this.computedTime()
  },
  methods: {
    async computedTime () {
      let res: any = await this.getHoliday()
      const time = +new Date(res.holiday.date)
      this.holiday = res.holiday.name
      setInterval(() => {
        const nowTimes = +new Date()
        const times = (time - nowTimes) / 1000
        this.day = Math.floor(times / 60 / 60 / 24) // 天
        this.hour = Math.floor(times / 60 / 60 % 24) // 时
        this.minute = Math.floor(times / 60 % 60) // 分
        this.second = Math.floor(times % 60) // 秒
      }, 1000)
    },
    getHoliday () {
      return new Promise(resolve => {
        let today: string = formatDate(new Date(), 1)
        fetch(`https://timor.tech/api/holiday/next/${today}`)
          .then(res => {
            resolve(res.json())
          })
      })
    },
    getHoliadyText () {
      return new Promise(resolve => {
        fetch('http://timor.tech/api/holiday/tts')
          .then(res => {
            resolve(res.json())
          })
      })
    },
    async playVoice () {
      // let res: any = await this.getHoliadyText()
      let text = `距离${this.holiday}, 还有${this.day}天${this.hour}时${this.minute}分`
      this.handleSpeak(text) // 传入需要播放的文字
    },
    handleSpeak (text: string) {
      msg.text = text // 文字内容
      msg.lang = 'zh-CN' // 使用的语言:中文
      msg.volume = 1 // 声音音量：1
      msg.rate = 1 // 语速：1
      msg.pitch = 1 // 音高：1
      synth.speak(msg) // 播放
    },
    stopSpeak (e: string) {
      msg.text = e
      msg.lang = 'zh-CN'
      synth.cancel()
    }
  }
})
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
