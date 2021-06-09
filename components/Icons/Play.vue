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
    <polygon
      fill="none"
      points="10 8 16 12 10 16 10 8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>
<style lang="scss" scoped>
  circle {
    stroke: $white;
    transition: all 0.3s ease-in-out;
  }
  polygon { transition: all 0.3s ease-in-out; }
  @include desktop {
    svg:hover {
      circle {
        stroke: $primary;
        transition: all 0.3s ease-in-out;
      }
      polygon {
        fill: $primary;
        transition: all 0.3s ease-in-out;
      }
    }
  }
</style>
