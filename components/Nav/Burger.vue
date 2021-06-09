<template>
  <div class="nav__burger" @click="burgerMenuToggle();">
    <IconBurger />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import IconBurger from '../Icons/Burger'

export default ({
  components: {
    IconBurger
  },
  methods: {
    ...mapActions([
      'burgerMenuToggle'
    ])
  }
})
</script>
<style lang="scss" scoped>
  .nav__burger {
    cursor: pointer;
    position: relative;
    z-index: 1;

    &.hide { display: none; }
  }

  @include desktop {
    .nav__burger { display: none; }
  }
</style>
