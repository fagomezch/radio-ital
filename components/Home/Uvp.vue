<template>
  <div class="uvp">
    <h1>
      <span class="uvp__first">{{ $t(uvpFirst) }}</span>
      <span class="uvp__second">{{ $t(uvpSecond) }}</span>
      <span class="uvp__third">{{ $t(uvpThird) }}</span>
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
.uvp {
  color: $primary;
  left: 50%;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 1;

  &__first { font-size: rem(36); }

  &__second {
    color: $secondary;
    font-size: rem(60);
    margin-top: rem(10);
  }

  &__third {
    color: $white;
    font-size: rem(48);
  }

  &__first,
  &__second,
  &__third { display: block; }
}

@include desktop {
  .uvp {
    width: auto;

    &__second { font-size: rem(120); }
    &__third {
      font-size: rem(80);
      transform: translate(0, -35px);
    }
  }
}
</style>
