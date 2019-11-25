<template>
  <div>
    <div id="topic">Time Since Last Sleep</div>
    <div id="line"></div>
    <div id="particles-js">
      <div id="timer">
        <div>Ended</div>
        <div>Record: {{ daysAwake }} Day{{ dayAwakeUnit }} {{ hoursAwake }} Hour{{ hourAwakeUnit }} {{ minutesAwake }} Minute{{ minuteAwakeUnit }} {{ secondsAwake }} Second{{ secondAwakeUnit }}</div>
        <div>Aftermath Sleep: {{ hoursSlept }} Hour{{ hourSleptUnit }} {{ minutesSlept }} Minute{{ minuteSleptUnit }} {{ secondsSlept }} Second{{ secondSleptUnit }}</div>
      </div>
    </div>
    <div id="reasons">
      Reasons:
      <ul>
        <li>LA Interactive Oral</li>
        <li>Social Socratic Seminar</li>
        <li>Social Presentation</li>
        <li>Social Readings</li>
        <li>TOK Presentation</li>
        <li>JA Production Work</li>
        <li>JA IT Work</li>
        <li>Math Quiz</li>
        <li>Physics Quiz</li>
        <li>Chemistry Quiz</li>
        <li>LA Research Proposal</li>
        <li @click="revealTask">Placeholder</li>
        <li>LA Supervised Writing</li>
        <li>Piano Exam</li>
      </ul>
    </div>
  </div>
</template>

<script>
import "particles.js";

export default {
  name: "IBTimer",
  metaInfo: {
    title: "IB Timer",
    meta: [
      { name: "description", content: "IB and JA have driven a high school student insane! A timer that measures how long grade 11 Ching Chang has been staying up because of all the assignments due." },
      { name: "keywords", content: "Ching, Chang, IB, timer, no sleep, sleep deprivation, stay up, health, student, high school" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/ib-timer" }
    ]
  },
  data() {
    return {
      lastSleep: new Date(2019, 2, 12, 8, 0, 0, 0),
      timeAwake: 0,
      daysAwake: 0,
      hoursAwake: 0,
      minutesAwake: 0,
      secondsAwake: 0,
      timeSlept: 0,
      hoursSlept: 0,
      minutesSlept: 0,
      secondsSlept: 0,
      clicked: 0
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
    this.countSleep();
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
      this.timeAwake = 1552691468496 - this.lastSleep;
      this.daysAwake = Math.floor(this.timeAwake / 24 / 60 / 60 / 1000);
      this.hoursAwake = Math.floor(this.timeAwake / 60 / 60 / 1000 - this.daysAwake * 24);
      this.minutesAwake = Math.floor(this.timeAwake / 60 / 1000 - this.daysAwake * 24 * 60 - this.hoursAwake * 60);
      this.secondsAwake = Math.floor(this.timeAwake / 1000 - this.daysAwake * 24 * 60 * 60 - this.hoursAwake * 60 * 60 - this.minutesAwake * 60);
    },
    countSleep() {
      this.timeSlept = 1552751371738 - 1552691468496;
      let daysSlept = Math.floor(this.timeSlept / 24 / 60 / 60 / 1000);
      this.hoursSlept = Math.floor(this.timeSlept / 60 / 60 / 1000 - daysSlept * 24);
      this.minutesSlept = Math.floor(this.timeSlept / 60 / 1000 - daysSlept * 24 * 60 - this.hoursSlept * 60);
      this.secondsSlept = Math.floor(this.timeSlept / 1000 - daysSlept * 24 * 60 * 60 - this.hoursSlept * 60 * 60 - this.minutesSlept * 60);
    },
    revealTask() {
      this.clicked++;
      if (this.clicked === 1) {
        alert("Come on, i said tHis is just a placEholder. why did you ClicK it anyway? Can you not dO it again please? aNyway, thiS alert bOx is the onLy purpose of the placeholdEr.");
        console.log("Go to the Word Counter and type in the answer of the question below in the larger text area");
      } else if (this.clicked === 2) {
        alert("Stop it. Get some help");
        console.log("What text editor do I use for web developing?");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#particles-js {
  position: relative;
  width: calc(100% - 20px);
  height: 300px;
  background-color: $black;
  border: 10px solid $secondary-colour;
  border-radius: 8px;
  margin-bottom: 25px;
  #timer {
    position: absolute;
    padding: 10px;
    width: calc(100% - 20px);
    height: 280px;
    text-align: center;
    font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
    font-size: 42px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: $white;
  }
}
#reasons {
  font-size: 18px;
}

@media (max-width: 750px) {
  #particles-js #timer {
    font-size: 38px;
  }
}
@media (max-width: 514px) {
  #particles-js #timer {
    font-size: 30px;
  }
}
</style>