<template>
  <ul class="nav__menu">
    <li
      v-for="(item, index) in navItems"
      :key="index"
      class="nav__item"
      @click="
        removeOverflowHtml();
        toggleMenu();
        virtualPageViewGTM($t(item.name));
      "
    >
      <router-link :to="item.url">
        {{ $t(item.name) }}
      </router-link>
    </li>
    <li class="nav__item">
      <LocaleSwitcher />
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher.vue'

export default ({
  name: 'NavItem',
  components: {
    LocaleSwitcher
  },
  props: {
    navItems: Array
  },
  methods: {
    ...mapActions([
      'removeOverflowHtml',
      'toggleMenu'
    ]),
    virtualPageViewGTM (title) {
      window.dataLayer.push({
        event: 'virtualPageview',
        pageUrl: this.$route.path,
        pageTitle: title
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.nav__item {
  margin: 0;
  text-align: center;
  width: 100%;

  a {
    color: $text;
    display: block;
    font-family: $font-primary;
    font-size: rem(28);
    line-height: rem(28);
    padding: rem(18) rem(40);
    position: relative;
    text-transform: uppercase;
    text-decoration: none;

    &:before {
      background: linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,.03) 100%);
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    &.router-link-exact-active { color: $white; }
  }
}

.nav__menu {
  background-color: $third;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 100%;
  opacity: 0;
  position: absolute;
  transition: all 0.3s ease-in-out;
  top: 0;
  width: 100%;
  z-index: 99;

  &.show {
    opacity: 1;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
}

@include desktop {
  .nav__item {
    position: relative;
    width: auto;

    a {
      color: $white;
      font-size: rem(18);
      padding: 0 rem(14);
      transition: color 0.3s ease-in-out;

      &:before { display: none; }

      &:hover {
        color: $primary;
        transition: color 0.3s ease-in-out;
      }

      &.router-link-exact-active {
        color: $primary;

        &::after {
          background-image: url('../../assets/images/disco.gif');
          bottom: -2px;
          content: '';
          height: rem(5);
          left: 50%;
          position: absolute;
          transform: translateX(-51%);
          width: rem(35);
        }
      }
    }
  }

  .nav__menu {
    align-items: center;
    background: transparent;
    flex-direction: row;
    height: auto;
    justify-content: flex-end;
    left: 0;
    opacity: 1;
    position: relative;
  }
}
</style>
