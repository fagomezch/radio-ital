<template>
  <div class="player">
    <audio class="player__audio">
      <source src="https://colombiawebs.com.co/proxy/radioita?mp=/stream" type="audio/mp3">
    </audio>
    <button class="player__play" @click="playAudio()">
      Play Audio
    </button>
    <button class="player__pause" @click="pauseAudio()">
      Pause Audio
    </button>
    {{ trackTitle }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      trackTitle: ''
    }
  },
  created () {
    setInterval(async () => {
      const response = await fetch('https://colombiawebs.com.co:2199/rpc/radioita/streaminfo.get')
      const data = await response.json()
      this.trackTitle = data.data[0].track.title
    }, 32000)
  },
  async mounted () {
    const response = await fetch('https://colombiawebs.com.co:2199/rpc/radioita/streaminfo.get')
    const data = await response.json()
    this.trackTitle = data.data[0].track.title
  },
  methods: {
    pauseAudio () {
      const playerPause = document.querySelector('.player__audio')
      playerPause.pause()
    },
    playAudio () {
      const playerPlay = document.querySelector('.player__audio')
      playerPlay.play()
    }
  }
}
</script>

<style>

</style>
