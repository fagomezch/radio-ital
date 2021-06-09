<template>
  <div class="player__radio">
    <div v-if="!streamOffline" class="player__nav">
      <button class="player__play player__control" @click="playAudio(); openPlayer()">
        <IconPlay />
      </button>
      <button class="player__pause player__control hide" @click="pauseAudio();">
        <IconPause />
      </button>
    </div>
    <div class="player hide">
      <div class="container player__container">
        <div class="player__close" @click="closePlayer()">
          <IconClose />
        </div>
        <audio class="player__audio">
          <source v-if="!streamOffline" :src="streamProxyUrl">
        </audio>
        <button class="player__play player__control" @click="playAudio()">
          <IconPlay />
        </button>
        <button class="player__pause player__control hide" @click="pauseAudio()">
          <IconPause />
          <div class="boxContainer">
            <div class="box box1" />
            <div class="box box2" />
            <div class="box box3" />
            <div class="box box4" />
            <div class="box box5" />
          </div>
        </button>
      </div>
      <div class="track">
        <div class="track__info">
          <div class="track__info-heading">
            <span>{{ $t('currentTrack') }}</span>
          </div>
          <div v-if="trackTitle" class="track__info-title">
            {{ trackTitle }}
          </div>
          <div v-if="trackArtist" class="track__info-artist">
            {{ trackArtist }}
          </div>
          <div v-if="trackAlbum" class="track__info-album">
            {{ trackAlbum[1] }}
          </div>
          <div v-if="trackAlbum" class="track__info-label">
            {{ trackAlbum[0] }}
          </div>
          <div v-if="trackBuyUrl" class="track__info-buy">
            <a :href="trackBuyUrl" target="_blank">{{ $t('buyTrack') }}</a>
          </div>
        </div>
        <div v-if="trackImageUrl" class="track__info-image-container">
          <img class="track__info-image" :src="trackImageUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from '../Icons/Close'
import IconPause from '../Icons/Pause'
import IconPlay from '../Icons/Play'

export default {
  components: {
    IconClose,
    IconPause,
    IconPlay
  },
  data () {
    return {
      streamOffline: true,
      streamInfoUrl: 'https://colombiawebs.com.co:2199/rpc/radioita/streaminfo.get/?',
      streamProxyUrl: 'https://colombiawebs.com.co/proxy/radioita?mp=/stream',
      trackAlbum: '',
      trackArtist: '',
      trackBuyUrl: '',
      trackImageUrl: '',
      trackTitle: ''
    }
  },
  created () {
    this.getStreamStatus()
  },
  methods: {
    closePlayer () {
      const playerElement = document.querySelector('.player')
      const playerNavElement = document.querySelector('.player__nav')
      const playerIconRadio = document.querySelector('.icon-radio')
      playerElement.classList.toggle('hide')
      playerNavElement.classList.remove('hide')
      playerIconRadio.classList.remove('hide')
    },
    async getStreamInfo () {
      const response = await fetch(this.streamInfoUrl + String(Math.random()))
      const data = await response.json()
      if (data.data[0].track.album !== null) {
        this.trackAlbum = data.data[0].track.album
          .split('-')
      } else {
        this.trackAlbum = ''
      }
      this.trackArtist = data.data[0].track.artist
      if (data.data[0].track.imageurl !== null) {
        this.trackImageUrl = data.data[0].track.imageurl
          .replace('http://', 'https://')
          .replace('colombiawebs.com.co:2197/static/radioita/covers/nocover.png', 'radioital.s3.us-east-2.amazonaws.com/covers/nocover.jpg')
      }
      this.trackTitle = data.data[0].track.title
      this.trackBuyUrl = data.data[0].track.buyurl
    },
    async getStreamStatus () {
      const response = await fetch(this.streamInfoUrl + String(Math.random()))
      const data = await response.json()
      this.streamOffline = data.data[0].offline
    },
    openPlayer () {
      const pauseElement = document.querySelector('.player__nav .player__pause')
      const playElement = document.querySelector('.player__nav .player__play')
      const playerElement = document.querySelector('.player')
      pauseElement.classList.remove('hide')
      playElement.classList.add('hide')
      playerElement.classList.remove('hide')
      this.playAudio()
    },
    pauseAudio () {
      const pauseElement = document.querySelector('.player .player__pause')
      const playElement = document.querySelector('.player .player__play')
      const playerPause = document.querySelector('.player .player__audio')
      const pauseNavElement = document.querySelector('.player__nav .player__pause')
      const playNavElement = document.querySelector('.player__nav .player__play')
      const iconRadioElement = document.querySelector('.icon-radio')
      playerPause.pause()
      pauseElement.classList.add('hide')
      playElement.classList.remove('hide')
      pauseNavElement.classList.add('hide')
      playNavElement.classList.remove('hide')
      iconRadioElement.classList.add('hide')
    },
    playAudio () {
      const pauseElement = document.querySelector('.player .player__pause')
      const playElement = document.querySelector('.player .player__play')
      const playerPlay = document.querySelector('.player .player__audio')
      const pauseNavElement = document.querySelector('.player__nav .player__pause')
      const playNavElement = document.querySelector('.player__nav .player__play')
      playerPlay.play()
      pauseElement.classList.remove('hide')
      playElement.classList.add('hide')
      this.getStreamInfo()
      setInterval(this.getStreamInfo, 10000)
      pauseNavElement.classList.remove('hide')
      playNavElement.classList.add('hide')
    }
  }
}
</script>

<style lang="scss">
.player {
  background-color: $contrast;
  color: $white;
  height: 100vh;
  right: 0;
  max-width: rem(450);
  opacity: 1;
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 999;
  &__close {
    background-color: $contrast;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    padding: rem(10);
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
  }
  &__container {
    display: flex;
    height: rem(600);
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
  }
  &__control {
    margin: auto;
    position: relative;
    z-index: 3;
    &.hide { display: none; }
    .svg-icon {
      height: rem(96);
      width: rem(96);
      circle { stroke-width: 3; }
    }
  }
  &.hide {
    right: -100%;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  &__nav {
    position: absolute;
    right: rem(70);
    top: rem(20);
    &.hide { display: none; }
    .svg-icon {
      height: rem(40);
      width: rem(40);
    }
  }
}
.track {
  padding: rem(24);
  &__info {
    overflow: hidden;
    position: relative;
    z-index: 3;
    width: 100%;
    transform: translate(0, -240px);
    &:after {
      background: $white;
      content: " ";
      height: rem(25);
      display: block;
      margin: rem(15) 0;
      opacity: 0.10;
      width: 100%;
    }
    &-artist {
      font-family: $font-primary;
      font-size: rem(20);
      text-transform: uppercase;
      line-height: 1;
    }
    &-buy {
      display: flex;
      justify-content: flex-end;
      margin: rem(10) 0;
    }
    &-heading {
      margin-bottom: rem(15);
      opacity: 0.75;
      span {
        display: table;
        font-family: $font-primary;
        font-size: rem(20);
        text-transform: uppercase;
        white-space: nowrap;
        width: auto;
        &:after {
          background:$white;
          bottom: rem(5);
          content: " ";
          display: table-cell;
          left: rem(10);
          margin-left: rem(10);
          opacity: 0.35;
          position: relative;
          width: 100%;
        }
      }
    }
    &-image {
      left: 50%;
      height: rem(600);
      max-width: rem(450);
      object-fit: cover;
      object-position: center;
      position: absolute;
      transform: translate(-50%, 0);
      top: 0;
      width: 100%;
      z-index: 1;
      &-container {
        &:after {
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 50%, rgba(39,39,39,1) 100%);
          content: '';
          height: rem(600);
          left: 0;
          position: absolute;
          top: 0;
          width: 101%;
          z-index: 2;
        }
      }
    }
    &-title {
      font-family: $font-primary;
      font-size: rem(26);
      line-height: 1;
      text-transform: uppercase;
    }
  }
}
@keyframes quiet {
  25%{
    transform: scaleY(.6);
  }
  50%{
    transform: scaleY(.4);
  }
  75%{
    transform: scaleY(.8);
  }
}

@keyframes normal {
  25%{
    transform: scaleY(1);
  }
  50%{
    transform: scaleY(.4);
  }
  75%{
    transform: scaleY(.6);
  }
}
@keyframes loud {
  25%{
    transform: scaleY(1);
  }
  50%{
    transform: scaleY(.4);
  }
  75%{
    transform: scaleY(1.2);
  }
}
.boxContainer{
  display: flex;
  justify-content: space-between;
  height: 24px;
  position: absolute;
  left: rem(20);
  --boxSize: 7px;
  --gutter: 4px;
  width: calc((var(--boxSize) + var(--gutter)) * 5);
}

.box{
  transform: scaleY(.4);
  height: 100%;
  width: var(--boxSize);
  background: $primary;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  border-radius: 8px;
  margin: auto;
}

.box1{
  animation-name: quiet;
}

.box2{
  animation-name: normal;
}

.box3{
  animation-name: quiet;
}

.box4{
  animation-name: loud;
}

.box5{
  animation-name: quiet;
}
@include desktop {
  .player {
    &__close {
      .svg-icon {
        path,
        polygon,
        rect {
          fill: $white;
          transition: all 0.3s ease-in-out;
        }
      }
      &:hover {
        .svg-icon {
          transition: all 0.3s ease-in-out;
          path,
          polygon,
          rect {
            fill: $primary;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
    &__nav { top: rem(33); }
  }
  .track {
    &__info {
      &-buy {
        a {
          transition: all 0.3s ease-in-out;
          &:hover {
            color: $primary;
            transition: all 0.3s ease-in-out;
          }
        }
      }
      &-image { width: rem(450); }
    }
  }
}
</style>
