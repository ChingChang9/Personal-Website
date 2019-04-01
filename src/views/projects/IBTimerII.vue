<template>
  <div>
    <div id="topic">Time Since Last Sleep</div>
    <div id="line"></div>
    <div id="timer">{{ daysAwake }} Day{{ dayAwakeUnit }} {{ hoursAwake }} Hour{{ hourAwakeUnit }} {{ minutesAwake }} Minute{{ minuteAwakeUnit }} {{ secondsAwake }} Second{{ secondAwakeUnit }}</div>
    <div id="particles-js"></div>
  </div>
</template>

<script>
import "particles.js";

export default {
  name: "IBTimerII",
  data() {
    return {
      lastSleep: new Date(2019, 2, 31, 11, 4, 24, 0),
      timeAwake: 0,
      daysAwake: 0,
      hoursAwake: 0,
      minutesAwake: 0,
      secondsAwake: 0
    };
  },
  computed: {
    dayAwakeUnit() {
      return this.daysAwkae === 1 ? "" : "s";
    },
    hourAwakeUnit() {
      return this.hoursAwake === 1 ? "" : "s";
    },
    minuteAwakeUnit() {
      return this.minutesAwake === 1 ? "" : "s";
    },
    secondAwakeUnit() {
      return this.secondsAwake === 1 ? "" : "s";
    },
    hourSleptUnit() {
      return this.hoursSlept === 1 ? "" : "s";
    },
    minuteSleptUnit() {
      return this.minutesSlept === 1 ? "" : "s";
    },
    secondSleptUnit() {
      return this.secondsSlept === 1 ? "" : "s";
    }
  },
  mounted() {
    this.initParticles();
    this.countAwake();
    setInterval(this.countAwake.bind(this), 1000);
  },
  methods: {
    initParticles() {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 18,
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: "#f5f0f4"
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: false,
              speed: 14,
              size_min: 12,
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
    countAwake() {
      this.timeAwake = Date.now() - this.lastSleep;
      this.daysAwake = Math.floor(this.timeAwake / 24 / 60 / 60 / 1000);
      this.hoursAwake = Math.floor(this.timeAwake / 60 / 60 / 1000 - this.daysAwake * 24);
      this.minutesAwake = Math.floor(this.timeAwake / 60 / 1000 - this.daysAwake * 24 * 60 - this.hoursAwake * 60);
      this.secondsAwake = Math.floor(this.timeAwake / 1000 - this.daysAwake * 24 * 60 * 60 - this.hoursAwake * 60 * 60 - this.minutesAwake * 60);
    }
  }
};
</script>

<style lang="scss" scoped>
#timer {
  position: absolute;
  width: calc(#{$content-width} * 0.92);
  text-align: center;
  margin-top: calc(18vh - 30px);
  font-size: calc(20px + 2vw);
  color: $white;
}
#particles-js {
  width: calc(100% - 20px);
  height: 36vh;
  background-color: $black;
  border: 10px solid $secondary-colour;
  border-radius: 8px;
  margin-bottom: 25px;
}

@media (max-width: 750px) {
  #timer {
    width: calc(100% - 50px);
  }
}
</style>