<template>
  <main>
    <section>
      <Uvp />
    </section>
  </main>
</template>

<script>
import Uvp from '@/components/Home/Uvp.vue'

export default {
  components: {
    Uvp
  },
  transition: {
    beforeEnter () {
      this.$i18n.finalizePendingLocaleChange()
    }
  }
}
</script>
