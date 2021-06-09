<template>
  <div class="default">
    <Header />
    <Slider />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Slider from '@/components/Home/Slider.vue'

export default {
  components: {
    Header,
    Slider
  }
}
</script>

<style lang="scss" scoped>
  .default { position: relative; }
</style>
