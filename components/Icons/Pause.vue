<template>
  <svg class="svg-icon" height="24" viewBox="0 0 24 24" width="24">
    <circle
      cx="12"
      cy="12"
      fill="none"
      r="10"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <line
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      x1="10"
      x2="10"
      y1="15"
      y2="9"
    />
    <line
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      x1="14"
      x2="14"
      y1="15"
      y2="9"
    />
  </svg>
</template>
<style lang="scss" scoped>
  circle,
  line {
    stroke: $white;
    transition: all 0.3s ease-in-out;
  }
  @include desktop {
    svg:hover {
      circle,
      line {
        stroke: $primary;
        transition: all 0.3s ease-in-out;
      }
    }
  }
</style>
