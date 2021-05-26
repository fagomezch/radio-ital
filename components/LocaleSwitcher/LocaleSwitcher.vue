<template>
  <ul class="locale-switcher">
    <li
      v-for="locale in locales"
      :key="locale"
      class="locale-switcher__item"
      :class="{active: $i18n.locale === locale}"
      @click="switchLocale(locale); localeSwitcherGTM(locale)"
    >
      {{ locale }}
    </li>
  </ul>
</template>

<script>
export default ({
  name: 'LocaleSwitcher',
  data () {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    }
  },
  methods: {
    switchLocale (locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale
      }
    },
    localeSwitcherGTM (locale) {
      window.dataLayer.push({
        event: 'localeSwitcher',
        pageUrl: this.$route.path,
        localeName: locale
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  .locale-switcher {
    color: $text;
    display: flex;
    font-family: $font-primary;
    font-size: rem(28);
    justify-content: center;
    line-height: rem(28);
    padding: rem(40);

    &__item {
      align-items: center;
      background: transparent;
      border-radius: 50%;
      display: flex;
      height: 40px;
      justify-content: center;
      width: 40px;
      vertical-align: middle;
      transition: background 0.3s ease-in-out;

      &.active {
        background: $white;
        transition: background 0.3s ease-in-out;
      }
    }
  }

  @include desktop {
    .locale-switcher {
      padding: 0 0 0 rem(30);

      &__item {
        color: $white;
        cursor: pointer;
        font-size: rem(18);
        height: rem(22);
        opacity: 1;
        transition: all 0.3s ease-in-out;
        width: rem(22);

        &.active {
          background: $white;
          color: $black;

          &:hover {
            color: $black;
            opacity: 1;
          }
        }

        &:hover {
          color: $primary;
          opacity: 0.8;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
</style>
