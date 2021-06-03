<template>
  <header>
    <div class="container flex align-center justify-space-between">
      <Logo />
      <NavBurger />
      <NavClose />
      <NavBar />
      <Player />
    </div>
  </header>
</template>

<script>
import NavBar from '../Nav/NavBar'
import NavBurger from '../Nav/Burger'
import NavClose from '../Nav/Close'
import Player from '../Player/Player'
import Logo from './Logo.vue'

export default {
  components: {
    Logo,
    NavBar,
    NavBurger,
    NavClose,
    Player
  }
}
</script>

<style lang="scss" scoped>
  .container {
    min-height: rem(85);
    max-width: 100%;
  }

  header {
    background-color: rgba(3, 5, 26, 0);
    border-bottom: 1px solid rgba(255, 255, 255, .05);
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  @include desktop {
    .container {
      min-height: rem(106);
      max-width: rem(1200);
    }
  }
</style>
