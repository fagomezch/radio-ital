<template>
  <nav class="language-selector">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="language-selector__item"
    >
      {{ locale.name }}
    </nuxt-link>
  </nav>
</template>

<script>
export default ({
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
})
</script>

<style lang="scss" scoped>
  .language-selector {
    color: $text;
    display: flex;
    font-family: $font-primary;
    font-size: rem(28);
    justify-content: center;
    line-height: rem(28);
    padding: rem(40);
    position: relative;
    z-index: 1;

    &__item {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0 rem(10);
      text-decoration: none;
      vertical-align: middle;
    }
  }

  @include desktop {
    .language-selector {
      padding: 0 0 0 rem(30);

      &__item {
        color: $white;
        cursor: pointer;
        font-size: rem(18);
        height: rem(22);
        opacity: 1;
        transition: all 0.3s ease-in-out;
        width: rem(22);

        &:hover {
          color: $primary;
          opacity: 0.8;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
</style>
