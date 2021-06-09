<template>
  <header>
    <div class="container flex align-center justify-space-between">
      <Logo />
      <NavBar />
      <div class="flex align-center">
        <Player />
        <NavBurger />
      </div>
      <NavClose />
    </div>
    <div @click="openPlayer()" class="icon-radio hide">
      <IconRadio />
    </div>
  </header>
</template>

<script>
import IconRadio from '../Icons/Radio'
import NavBar from '../Nav/NavBar'
import NavBurger from '../Nav/Burger'
import NavClose from '../Nav/Close'
import Player from '../Player/Player'
import Logo from './Logo.vue'

export default {
  components: {
    IconRadio,
    Logo,
    NavBar,
    NavBurger,
    NavClose,
    Player
  },
  methods: {
    openPlayer () {
      const playerElement = document.querySelector('.player')
      playerElement.classList.remove('hide')
    }
  }
}
</script>

<style lang="scss">
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

  .icon-radio {
    background: $contrast;
    cursor: pointer;
    padding: rem(10);
    position: fixed;
    right: 0;
    top: rem(85);
    &.hide { display: none; }
  }

  @include desktop {
    .container {
      min-height: rem(106);
      max-width: rem(1200);
    }
    .icon-radio {
      top: 0;
      .svg-icon {
        path,
        polygon,
        rect {
          fill: $white;
          transition: all 0.3s ease-in-out;
        }
      }
      &:hover {
        .svg-icon {
          transition: all 0.3s ease-in-out;
          path,
          polygon,
          rect {
            fill: $primary;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }
</style>
