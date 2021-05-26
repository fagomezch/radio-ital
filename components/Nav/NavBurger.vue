<template>
  <div class="nav__burger" @click="addOverflowHtml(); toggleMenu()">
    <IconBurger />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import IconBurger from '@/components/Icons/IconBurger.vue'

export default ({
  name: 'NavBurger',
  components: {
    IconBurger
  },
  methods: {
    ...mapActions([
      'addOverflowHtml',
      'toggleMenu'
    ])
  }
})
</script>
<style lang="scss" scoped>
  .nav__burger {
    position: relative;
    z-index: 1;

    &.hide { display: none; }
  }

  @include desktop {
    .nav__burger { display: none; }
  }
</style>
