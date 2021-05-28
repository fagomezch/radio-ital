<template>
  <header class="header">
    <div class="container flex align-center justify-space-between">
      <Logo />
      <LanguageSelector />
    </div>
  </header>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue'
import Logo from './Logo.vue'

export default {
  components: {
    LanguageSelector,
    Logo
  }
}
</script>

<style lang="scss" scoped>
  .container {
    min-height: rem(85);
    max-width: 100%;
  }

  .header {
    position: absolute;
    width: 100%;
  }

  @include desktop {
    .container {
      min-height: rem(106);
      max-width: rem(1200);
    }
  }
</style>
