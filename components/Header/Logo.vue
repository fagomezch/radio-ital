<template>
  <nuxt-link class="logo" :to="localePath('index')">
    <img class="logo__image" alt="Radio Ital Logo" src="@/assets/images/logo.png">
    <img class="logo__image--small" alt="Radio Ital Logo" src="@/assets/images/logo-small.png">
  </nuxt-link>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  z-index: 1;

  &:after {
    background-image: url('@/assets/images/on-air.gif');
    background-size: contain;
    bottom: 80%;
    content: '';
    height: rem(16);
    left: 104%;
    position: absolute;
    width: rem(64);
  }

  &__image--small { display: none; }
}

@include desktop {
  .logo {
    &:hover {
      &:after,
      .logo__image,
      .logo__image--small {
        opacity: 0.7;
        transition: opacity 0.3s ease-in-out;
      }
    }

    &__image {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
}
</style>
