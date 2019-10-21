<template>
  <div>
    <div id="topic">Frozen 2 Countdown</div>
    <div id="line"></div>
    <div id="particles-js">
      <div id="timer">{{ days }} Day{{ dayUnit }} {{ hours }} Hour{{ hourUnit }} {{ minutes }} Minute{{ minuteUnit }} {{ seconds }} Second{{ secondUnit }}</div>
    </div>
  </div>
</template>

<script>
import "particles.js";

export default {
  name: "FrozenCountdown",
  metaInfo: {
    title: "Frozen 2 Countdown Timer",
    meta: [
      { name: "description", content: "Who's ready for Frozen 2? A countdown timer that shows the time remaining until Frozen 2 to be released for the first time in forever!" },
      { name: "keywords", content: "Frozen, Frozen 2, Elsa, Anna, Disney, release date, how long, when, countdown timer, Olaf" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/frozen-countdown" }
    ]
  },
  data() {
    return {
      frozenRelease: new Date("Nov 22 2019"),
      countdown: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  computed: {
    dayUnit() {
      return this.days === 1 ? "" : "s";
    },
    hourUnit() {
      return this.hours === 1 ? "" : "s";
    },
    minuteUnit() {
      return this.minutes === 1 ? "" : "s";
    },
    secondUnit() {
      return this.seconds === 1 ? "" : "s";
    }
  },
  mounted() {
    this.initParticles();
    this.count();
    setInterval(this.count.bind(this), 1000);
  },
  methods: {
    initParticles() {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "image",
            image: {
              src: require("@/assets/icons/snow.png"),
              width: 100,
              height: 100
            }
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: false,
              speed: 14,
              size_min: 8,
              sync: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 3,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: false
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 100,
              size: 24,
              duration: 0.3,
              speed: 3
            }
          }
        }
      });
    },
    count() {
      this.countdown = this.frozenRelease - Date.now();
      this.days = Math.floor(this.countdown / 24 / 60 / 60 / 1000);
      this.hours = Math.floor(this.countdown / 60 / 60 / 1000 - this.days * 24);
      this.minutes = Math.floor(this.countdown / 60 / 1000 - this.days * 24 * 60 - this.hours * 60);
      this.seconds = Math.floor(this.countdown / 1000 - this.days * 24 * 60 * 60 - this.hours * 60 * 60 - this.minutes * 60);
    }
  }
};
</script>

<style lang="scss" scoped>
#particles-js {
  position: relative;
  width: calc(100% - 20px);
  height: 300px;
  background-color: #1faed9;
  border: 10px solid #d32b92;
  border-radius: 8px;
  margin-bottom: 30px;
  #timer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: calc(100% - 20px);
    text-align: center;
    font-family: PoetsenOne, Impact, Arial Black, sans-serif;
    font-size: 48px;
    color: black;
  }
}
</style>