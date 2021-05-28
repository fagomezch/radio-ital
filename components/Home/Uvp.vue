<template>
  <div class="home__uvp">
    <h1>
      <span class="home__uvp-first home__uvp-span">{{ $t(uvpFirst) }}</span>
      <span class="home__uvp-second home__uvp-span">{{ $t(uvpSecond) }}</span>
      <span class="home__uvp-third home__uvp-span">{{ $t(uvpThird) }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      uvpFirst: this.$store.state.uvp.first,
      uvpSecond: this.$store.state.uvp.second,
      uvpThird: this.$store.state.uvp.third
    }
  }
}
</script>

<style lang="scss" scoped>
.home__uvp {
  color: $primary;
  left: 50%;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 1;

  &-first { font-size: rem(36); }

  &-second {
    color: $secondary;
    font-size: rem(60);
    margin-top: rem(10);
  }

  &-span { display: block; }

  &-third {
    color: $white;
    font-size: rem(48);
  }
}

@include desktop {
  .home__uvp {
    width: auto;

    &-second { font-size: rem(120); }
    &-third {
      font-size: rem(80);
      transform: translate(0, -35px);
    }
  }
}
</style>
