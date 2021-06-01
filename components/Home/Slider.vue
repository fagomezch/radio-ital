<template>
  <div class="slider">
    <div
      v-for="(slide, index) in sliderImages"
      :key="index"
      class="slider__item fade"
    >
      <img :alt="$t(slide.alt)" class="slider__image" :src="slide.img">
      <img :alt="$t(slide.alt)" class="slider__image slider__image--xs" :src="slide.imgXs">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sliderImages: this.$store.state.homeSlider,
      slideIndex: 1
    }
  },
  mounted () {
    this.showSlides(this.slideIndex)

    setInterval(() => {
      this.plusSlides(1)
    }, 5000)
  },
  methods: {
    plusSlides (n) {
      this.showSlides(this.slideIndex += n)
    },

    showSlides (n) {
      let i
      const slides = document.getElementsByClassName('slider__item')

      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }

      for (i = 0; i < slides.length; i += 1) {
        slides[i].style.display = 'none'
      }

      if (slides[this.slideIndex - 1]) {
        slides[this.slideIndex - 1].style.display = 'block'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slider__item {display: none}

.slider {
  height: 100vh;
  margin: auto;
  max-width: 100%;
  overflow: hidden;

  &:after {
    background-image: url('@/assets/images/slider-dots.png');
    background-repeat: repeat;
    content: '';
    height: 100vh;
    left: 0;
    opacity: .7;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &__image {
    animation: zoom 35s;
    display: none;
    height: 100vh;
    object-fit: cover;
    width: 100%;

    &--xs { display: block; }
  }
}

.fade {
  animation-duration: 1.5s;
  animation-name: fade;
}

@keyframes fade {
  from {opacity: .4 }
  to {opacity: 1 }
}

@keyframes zoom {
  from { transform: scale(1.1, 1.1) }
  to { transform: scale(1.8, 1.8) }
}

@include desktop {
  .slider {
    &__image {
      display: block;

      &--xs { display: none; }
    }
  }
}
</style>
