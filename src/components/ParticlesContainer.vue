<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'

interface Props {
  numberOfParticles?: number
}

const props = withDefaults(defineProps<Props>(), { numberOfParticles: 30 })

const particles = computed(() =>
  [...Array(props.numberOfParticles + 1).keys()].slice(1)
)

onBeforeMount(() => {
  document.body.style.setProperty(
    '--number-of-particles',
    `${props.numberOfParticles}`
  )
})
</script>

<template>
  <div class="particle-container">
    <div class="particles">
      <div
        class="particle"
        v-for="particle of particles"
        :class="`particle-${particle}`"
      ></div>
    </div>
    <div class="particle-content"><slot /></div>
  </div>
</template>

<style scoped lang="scss">
$numberOfParticles: 100;
$particleColor: #5dacbd;

.particle-container {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;

  .particles {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    .particle {
      border-radius: 1px;
      position: absolute;
      background-color: $particleColor;
      box-shadow: $particleColor 1px 1px 1px;
      height: 2px;
      width: 6px;
    }

    @for $i from 1 through $numberOfParticles {
      @-webkit-keyframes particle-animation-#{$i} {
        0% {
          -webkit-transform: translate3d(
              (random(110) * 1vw),
              (random(100) * 1vh),
              (random(400) * 1px)
            )
            rotate(random(90) + deg);
          transform: translate3d(
              (random(110) * 1vw),
              (random(100) * 1vh),
              (random(400) * 1px)
            )
            rotate(random(90) + deg);
        }
        100% {
          -webkit-transform: translate3d(
              (random(110) * 1vw),
              (random(100) * 1vh),
              (random(400) * 1px)
            )
            rotate(random(180) + deg);
          transform: translate3d(
              (random(110) * 1vw),
              (random(100) * 1vh),
              (random(400) * 1px)
            )
            rotate(random(180) + deg);
        }
      }
      @keyframes particle-animation-#{$i} {
        0% {
          -webkit-transform: translate3d(
              (random(110) * 1vw),
              (random(100) * 1vh),
              (random(110) * 1px)
            )
            rotate(random(90) + deg);
          transform: translate3d(
              (random(110) * 1vw),
              (random(100) * 1vh),
              (random(400) * 1px)
            )
            rotate(random(90) + deg);
        }
        100% {
          -webkit-transform: translate3d(
              (random(110) * 1vw),
              (random(100) * 1vh),
              (random(400) * 1px)
            )
            rotate(random(180) + deg);
          transform: translate3d(
              (random(110) * 1vw),
              (random(100) * 1vh),
              (random(400) * 1px)
            )
            rotate(random(180) + deg);
        }
      }

      .particle-#{$i} {
        -webkit-animation: particle-animation-#{$i} 10s ease-in infinite,
          fade-frames 10s ease-in-out infinite;
        animation: particle-animation-#{$i} 10s ease-in infinite,
          fade-frames 10s ease-in-out infinite;
        height: #{random(2)}px;
        width: #{random(6)}px;
        -webkit-animation-delay: -$i + s;
        animation-delay: -$i + s;
        // -webkit-transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
        // transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
      }
    }

    @-webkit-keyframes fade-frames {
      0% {
        opacity: 0;
      }
      25% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
      75% {
        opacity: 0.5;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes fade-frames {
      0% {
        opacity: 0;
      }
      25% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
      75% {
        opacity: 0.5;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>
