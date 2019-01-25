<template>
  <div>
    <div id="topic">Frozen 2 Countdown</div>
    <div id="line"></div>
    <div id="timer">{{days}} Day{{dayUnit}} {{hours}} Hour{{hourUnit}} {{minutes}} Minute{{minuteUnit}} {{seconds}} Second{{secondUnit}}</div>
    <div id="particles-js"></div>
  </div>
</template>

<script>
import "particles.js";
export default {
  name: "FrozenCountdown",
  data() {
    return {
      frozenRelease: new Date("Nov 22 2019"),
      countdown: Number,
      days: Number,
      hours: Number,
      minutes: Number,
      seconds: Number
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
    // this.initParticles();
    this.count();
    setInterval(this.count.bind(this), 1000);
  },
  methods: {
    // initParticles() {
    //   particlesJS("particles-js", {
    //     particles: {
    //       number: {
    //         value: 30,
    //         density: {
    //           enable: true,
    //           value_area: 900
    //         }
    //       },
    //       color: {
    //         value: "#ffffff"
    //       },
    //       shape: {
    //         type: "image",
    //         image: {
    //           src: require("@/assets/projects/frozen/snow.png"),
    //           width: 100,
    //           height: 100
    //         }
    //       },
    //       size: {
    //         value: 20,
    //         random: true,
    //         anim: {
    //           enable: false,
    //           speed: 14,
    //           size_min: 8,
    //           sync: false
    //         }
    //       },
    //       line_linked: {
    //         enable: false
    //       },
    //       move: {
    //         enable: true,
    //         speed: 3,
    //         direction: "bottom",
    //         random: false,
    //         straight: false,
    //         out_mode: "out",
    //         bounce: false,
    //         attract: {
    //           enable: false,
    //           rotateX: 600,
    //           rotateY: 1200
    //         }
    //       }
    //     },
    //     interactivity: {
    //       detect_on: "canvas",
    //       events: {
    //         onhover: {
    //           enable: true,
    //           mode: "bubble"
    //         },
    //         onclick: {
    //           enable: false
    //         },
    //         resize: true
    //       },
    //       modes: {
    //         bubble: {
    //           distance: 100,
    //           size: 24,
    //           duration: 0.3,
    //           speed: 3
    //         }
    //       }
    //     }
    //   });
    // },
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

<style scoped>
#particles-js {
  width: calc(100% - 20px);
  height: 36vh !important;
  background-color: #1faed9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 10px solid #d32b92;
  border-radius: 8px;
  margin-bottom: 50px;
}
#timer {
  position: absolute;
  width: calc(100% - 19vw - 100px);
  text-align: center;
  margin-top: calc(18vh - 30px);
  font-size: calc(20px + 2vw);
}

@media (max-width: 750px) {
  #timer {
    width: calc(100% - 50px);
  }
}
</style>
