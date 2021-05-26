<template>
  <router-link to="/" @click="virtualPageViewGTM()">
    <img class="nav__logo" alt="Radio Ital Logo" src="@/assets/images/logo.png">
    <img class="nav__logo--small" alt="Radio Ital Logo" src="@/assets/images/logo-small.png">
  </router-link>
</template>

<script>
export default ({
  name: 'NavLogo',
  methods: {
    virtualPageViewGTM () {
      window.dataLayer.push({
        event: 'virtualPageview',
        pageUrl: '/',
        pageTitle: 'Home'
      })
    }
  }
})
</script>

<style lang="scss" scoped>
a {
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

  .nav__logo--small { display: none; }
}

@include desktop {
  a {
    .nav__logo {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover {
      &:after,
      .nav__logo,
      .nav__logo--small {
        opacity: 0.7;
        transition: opacity 0.3s ease-in-out;
      }
    }
  }
}
</style>
