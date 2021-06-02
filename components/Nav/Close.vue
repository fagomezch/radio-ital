<template>
  <div class="nav__close" @click="burgerMenuRemove();">
    <IconClose />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import IconClose from '../Icons/Close'

export default ({
  components: {
    IconClose
  },
  methods: {
    ...mapActions([
      'burgerMenuRemove'
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
