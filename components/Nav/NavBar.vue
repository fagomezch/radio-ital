<template>
  <ul class="navbar">
    <li class="navbar__item" @click="burgerMenuRemove();">
      <LanguageSelector />
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
import LanguageSelector from '../Header/LanguageSelector'

export default {
  components: {
    LanguageSelector
  },
  methods: {
    ...mapActions([
      'burgerMenuRemove'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
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

    &__item {
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
      }
    }
  }

  @include desktop {
    .navbar {
      align-items: center;
      background: transparent;
      flex-direction: row;
      height: auto;
      justify-content: flex-end;
      left: 0;
      opacity: 1;
      position: relative;

      &__item {
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
        }
      }
    }
  }
</style>
