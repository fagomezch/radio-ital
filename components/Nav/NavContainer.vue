<template>
  <div class="container flex align-center justify-space-between nav__container">
    <NavLogo />
    <NavItem :nav-items="navItems" />
    <NavBurger />
    <NavClose />
  </div>
</template>

<script>
import NavBurger from './NavBurger.vue'
import NavClose from './NavClose.vue'
import NavLogo from './NavLogo.vue'
import NavItem from './NavItem.vue'

export default ({
  name: 'NavBar',
  components: {
    NavBurger,
    NavClose,
    NavLogo,
    NavItem
  },
  data () {
    return {
      navItems: this.$store.state.nav.items
    }
  }
})
</script>

<style lang="scss">
  .nav__container.container {
    min-height: rem(85);
    max-width: 100%;
  }

  @include desktop {
    .nav__container.container {
      min-height: rem(106);
      max-width: rem(1200);
    }
  }
</style>
