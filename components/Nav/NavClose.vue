<template>
  <div class="nav__close" @click="removeOverflowHtml(); toggleMenu()">
    <IconClose />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import IconClose from '@/components/Icons/IconClose.vue'

export default ({
  name: 'NavClose',
  components: {
    IconClose
  },
  methods: {
    ...mapActions([
      'removeOverflowHtml',
      'toggleMenu'
    ])
  }
})
</script>
<style lang="scss" scoped>
  .nav__close {
    display: none;
    position: relative;
    z-index: 100;

    &.show { display: block; }
  }

  @include desktop {
    .nav__close.show { display: none; }
  }
</style>
