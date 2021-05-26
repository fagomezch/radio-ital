<template>
  <nav class="nav">
    <NavContainer />
  </nav>
</template>

<script>
import NavContainer from './NavContainer.vue'

export default ({
  name: 'Nav',
  components: {
    NavContainer
  }
})
</script>

<style lang="scss">
  .nav {
    background-color: rgba(3, 5, 26, 0);
    border-bottom: 1px solid rgba(255, 255, 255, .05);
    position: relative;
    z-index: 2;

    &.scroll {
      background-color: rgba(3, 5, 26, 0.6);
      position: fixed;
      width: 100%;
      .nav__container {
        min-height: 40px;
        > a:after {
          bottom: 40%;
          left: 102%;
        }
        .nav__close.show {
          margin-top: rem(20);
        }
        .nav__logo { display: none; }
        .nav__logo--small { display: block; }
      }
    }
  }
</style>
