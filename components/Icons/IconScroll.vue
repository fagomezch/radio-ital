<template>
  <div class="icon-scroll" />
</template>

<script>
export default {
  name: 'IconScroll'
}
</script>
<style lang="scss" scoped>
  .icon-scroll,
  .icon-scroll:before {
    left: 50%;
    position: absolute;
  }

  .icon-scroll {
    border-radius: 25px;
    box-shadow: inset 0 0 0 1px $white;
    cursor: pointer;
    height: 70px;
    margin-left: -20px;
    margin-top: -35px;
    opacity: 1;
    top: 90%;
    transition: opacity 0.3s ease-in-out;
    width: 40px;

    &:before {
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-name: scroll;
      background: $white;
      border-radius: 4px;
      content: '';
      height: 8px;
      margin-left: -4px;
      top: 8px;
      width: 8px;
    }

    &.hide {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }

  @keyframes scroll {
    0% { opacity: 1; }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }

  @include desktop {
    .icon-scroll {
      &:hover {
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
      }
    }
  }
</style>
