<template>
  <div class="radio-ital">
    <Header />
    <Slider />
    <Uvp />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Slider from '@/components/Home/Slider.vue'
import Uvp from '@/components/Home/Uvp.vue'

export default {
  components: {
    Header,
    Slider,
    Uvp
  }
}
</script>
