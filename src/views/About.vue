<template>
  <div>
    <div id="topic">About Me</div>
    <div id="line"></div>
    <a id="plant-forever" class="advertisement" href="https://plantforever.org/" target="_blank">
      <img src="@/assets/about/plantforever.jpg" alt="PlantForever" />
      <div id="name">PlantForever</div>
      <div id="description">
        Support our nonprofit organization to fight deforestation, global warming, and deterioration of biodiversity!
      </div>
    </a>
    <p>This is just a website I made for fun</p>
    <p>To practice my programming skills</p>
    <p>My name is Ching Chang</p>
    <p>I am a grade 12 student living in Edmonton, Alberta</p>
    <p>I live with my aunt's family and my sister who is 4 years older than me</p>
    <p>I can speak English, Mandarin, and a little Taiwanese</p>
    <p>I am interested in web development, AI, and digital forensics</p>
    <p>I use HTML, CSS, JS, and Vue extensively,</p>
    <p>but I also have experiences with jQuery, Java, Python, C#, C++, and C</p>
    <p>The text editor I use for web development is Atom</p>
    <p>I love going to school because I love learning new things (except for social studies),</p>
    <p>and my friends and teachers are all awesome</p>
    <p>Math is my strongest subject</p>
    <p>I play piano at university level, and used to play violin and mayonnaise at intermediate level</p>
    <img id="charming" src="@/assets/about/charming.jpg" draggable="false" />
    <p>My piano teacher's piano teacher's piano teacher's piano teacher's piano teacher is <em>Frédéric Chopin</em></p>
    <p>So I guess you can call me <em>Frédéric Chopin VI</em></p>
    <p>My favourite sport is basketball</p>
    <p>My favourite basketball team is the Lakers</p>
    <p>My favourite basketball player is Kobe Bryant</p>
    <p>I find ping pong interesting and I won a ping pong tournament in my school</p>
    <p>My favourite genre of book is fiction</p>
    <p>My favourite food is salad</p>
    <p>My favourite colour is green</p>
    <p>My favourite animal is dog</p>
    <p>My favourite movies are <em>Tangled</em>, <em>Frozen</em>, <em>Monsters University</em>, and <em>Monsters, Inc.</em></p>
    <p>My favourite TV show is Spongebob Squarepants</p>
    <p>My favourite music artists are Eminem, and Frédéric Chopin of course</p>
    <p>I care a lot about our environment</p>
    <p>If you also care about our environment, you can join our nonprofit organization <a href="http://plantforever.org/" target="_blank">right here</a></p>
    <p>I love looking at memes (who doesn't?)</p>
    <p>I honestly don't know what else to put on here,</p>
    <p>but I want to make this page look longer,</p>
    <p>so I'm just gonna type my thoughts out,</p>
    <p>like what I'm doing right now</p>
    <p id="sleepy-trigger">By the way, do you guys even care about what you just read?</p>
    <p>Or did you even read what I just wrote?</p>
    <p>I mean, sharing my life is pretty lame</p>
    <img id="sleepy" src="@/assets/about/sleepy.jpg" draggable="false" />
    <p>It's not your life after all, why bother to know mine? ¯\_(ツ)_/¯</p>
    <p>Okay, I feel like it is almost enough</p>
    <p>Just need a few more lines, like about 1~2</p>
    <p>I really want to go to sleep now</p>
    <p>It's currently 2:06am, what am I doing with my life....</p>
    <p>Just finished proofreading it, looks alright</p>
    <p>Gonna publish it now</p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      timeoutID: 0,
      charmingSlide: 450,
      sleepySlide: -100
    };
  },
  watch: {
    charmingSlide() {
      document.querySelector("#charming").style.transform = `translateX(${ this.charmingSlide }px)`;
    },
    sleepySlide() {
      document.querySelector("#sleepy").style.transform = `translateX(${ this.sleepySlide }px)`;
      document.querySelector("#sleepy").style.opacity = (window.scrollY + window.innerHeight * 0.8 - document.querySelector("#sleepy-trigger").getBoundingClientRect().top - window.scrollY) / 230;
    }
  },
  mounted() {
    this.$nextTick(() => document.querySelector("#plant-forever").classList.add("mounted"));
    this.$nextTick(() => document.querySelector("#wread").classList.add("mounted"));
    this.timeoutID = setTimeout(() => document.querySelector("#plant-forever").style.transitionDuration = "0.25s", 1500);
    this.animateText();
    this.charmingScroll();
    this.sleepyScroll();
    window.addEventListener("resize", this.animateText);
    window.addEventListener("resize", this.charmingScroll);
    window.addEventListener("resize", this.sleepyScroll);
    window.addEventListener("scroll", this.animateText);
    window.addEventListener("scroll", this.sleepyScroll);
    window.addEventListener("scroll", this.charmingScroll);
  },
  beforeDestroy() {
    clearTimeout(this.timeoutID);
    window.removeEventListener("resize", this.animateText);
    window.removeEventListener("resize", this.charmingScroll);
    window.removeEventListener("resize", this.sleepyScroll);
    window.removeEventListener("scroll", this.animateText);
    window.removeEventListener("scroll", this.charmingScroll);
    window.removeEventListener("scroll", this.sleepyScroll);
  },
  methods: {
    animateText() {
      for (let index = 0; index < document.querySelectorAll("p").length; index++) {
        if (window.innerHeight > document.querySelectorAll("p")[index].getClientRects()[0].top + 50) {
          document.querySelectorAll("p")[index].classList.add("slide-up");
        }
      }
    },
    charmingScroll() {
      if (window.scrollY + window.innerHeight * 0.8 > document.querySelector("#charming").getBoundingClientRect().top + window.scrollY
      && window.scrollY + window.innerHeight * 0.8 < document.querySelector("#charming").getBoundingClientRect().top + window.scrollY + 800
      && (document.querySelector("#charming").getBoundingClientRect().top + window.scrollY + 800 - window.scrollY - window.innerHeight * 0.8) * (450 / 800) < this.charmingSlide) {
        this.charmingSlide = (document.querySelector("#charming").getBoundingClientRect().top + window.scrollY + 800 - window.scrollY - window.innerHeight * 0.8) * (450 / 800);
      } else if (window.scrollY + window.innerHeight * 0.8 > document.querySelector("#charming").getBoundingClientRect().top + window.scrollY + 800) {
        this.charmingSlide = 0;
        window.removeEventListener("scroll", this.charmingScroll);
      }
    },
    sleepyScroll() {
      if (window.scrollY + window.innerHeight * 0.8 > document.querySelector("#sleepy-trigger").getBoundingClientRect().top + window.scrollY
      && window.scrollY + window.innerHeight * 0.8 < document.querySelector("#sleepy-trigger").getBoundingClientRect().top + window.scrollY + 230
      && (document.querySelector("#sleepy-trigger").getBoundingClientRect().top + window.scrollY + 230 - window.scrollY - window.innerHeight * 0.8) * (-100 / 230) > this.sleepySlide) {
        this.sleepySlide = (document.querySelector("#sleepy-trigger").getBoundingClientRect().top + window.scrollY + 230 - window.scrollY - window.innerHeight * 0.8) * (-100 / 230);
      } else if (window.scrollY + window.innerHeight * 0.8 > document.querySelector("#sleepy-trigger").getBoundingClientRect().top + window.scrollY + 230) {
        this.sleepySlide = 0;
        window.removeEventListener("scroll", this.sleepyScroll);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$green: #4cb852;
$dark-blue: #262767;
@font-face {
  font-family: Montserrat;
  src: url("../assets/fonts/Montserrat-Bold.ttf");
  font-weight: 800;
}

p {
  display: table;
}
#charming {
  user-select: none;
  float: right;
  width: 25vw;
  display: inline-block;
  position: relative;
  transform: translateX(450px);
}
#sleepy {
  user-select: none;
  padding-right: 2.5vw;
  margin-bottom: 5px;
  float: left;
  width: 15vw;
  transform: translateX(-100px);
  opacity: 0;
}
.advertisement {
  float: right;
  transform: translateX(250px);
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0, 0.85, 1, 1);
  padding: 10px 5px;
  margin-left: 5px;
  border-radius: 5px;
  width: 175px;
  right: 0px;
  text-align: center;
  text-decoration: none;
  &#plant-forever {
    background-color: $shaded-white;
    box-shadow: inset -2px -2px 5px $green, 0px 6px 15px rgba($green, 0.4);
    border: 3px solid $green;
    #name {
      color: $green;
    }
    #description {
      color: $dark-blue;
    }
    &:hover {
      box-shadow: inset -2px -2px 5px $green, 0px 8px 15px rgba($green, 0.6);
      transform: translateY(-3px);
    }
  }
  #name {
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 800;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  #description {
    font-size: 18px;
  }
  img {
    margin: auto;
    margin-bottom: 5px;
    display: block;
    width: 100px;
  }
  &.mounted {
    transform: translateX(0px);
  }
}

@media (max-width: 750px) {
  #charming {
    transform: translateX(0px) !important;
  }
  #sleepy {
    width: 20vw;
    padding-right: 15px;
  }
}
@media (max-width: 450px) {
  .advertisement {
    width: 40vw;
    img {
      width: 30vw;
    }
  }
}
@media (max-width: 400px) {
  #description {
    display: none;
  }
}
</style>