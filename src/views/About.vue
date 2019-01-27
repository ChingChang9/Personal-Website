<template>
  <div>
    <div id="topic">About Me</div>
    <div id="line"></div>
    <a id="plant-forever" href="http://plantforever.org/" target="_blank">
      <img src="@/assets/plantForever.jpg" />
      Support our nonprofit organization to fight deforestation, global warming, and deterioration of biodiversity!
    </a>
    <p>This is just a website I made for fun</p>
    <p>My name is Ching Chang</p>
    <p>I am a grade 11 student living in Edmonton, Alberta</p>
    <p>I live with my aunt's family and my sister who is 4 years older than me</p>
    <p>I can speak English, Mandarin, and a little Taiwanese</p>
    <p>I want to be a software engineer when I grow up</p>
    <p>I know HTML, CSS, JS, jQuery, Vue, Python, C#, and Java</p>
    <p>I am interested in AI and web development</p>
    <p>The text editor I use for web developing is Atom</p>
    <p>I love going to school because I love learning new things (except for social studies),</p>
    <p>and my friends and teachers are all awesome</p>
    <p>Math is my strongest subject</p>
    <img id="charming" src="@/assets/about/charming.jpg" draggable="false" />
    <p>I play piano at university level, and used to play violin and mayonnaise at intermediate level</p>
    <p>I have finished harmony, counterpoint, and music history at university level</p>
    <p>My piano teacher's piano teacher's piano teacher's piano teacher's piano teacher is <em>Frédéric Chopin</em></p>
    <p>So I guess you can call me <em>Frédéric Chopin <span>VI</span></em></p>
    <p>My favourite sport is basketball, and I was in my junior high school team for 3 years</p>
    <p>My favourite basketball team is the Lakers</p>
    <p>My favourite basketball player is Kobe Bryant</p>
    <p>I find ping pong interesting and I have won a ping pong tournament in my school</p>
    <p>My favourite genre of book is fiction</p>
    <p>My favourite food is salad</p>
    <p>My favourite colour is green</p>
    <p>My favourite animal is dog</p>
    <p>My favourite movies are <em>Tangled</em>, <em>Frozen</em>, <em>Monsters University</em>, and <em>Monsters, Inc.</em></p>
    <p>My favourite TV show is Spongebob Squarepants</p>
    <p>My favourite music artists are Eminem, and Fréderic Chopin of course</p>
    <p>I care a lot about our environment</p>
    <p>If you also care about our environment, you can join our nonprofit organization <a href="http://plantforever.org/" target="_blank">right here</a></p>
    <p>I love watching depressing memes because they are accurately relatable</p>
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
  mounted() {
    this.$nextTick(function() {
      document.getElementById("plant-forever").classList.add("mounted");
      setTimeout(function() {
        document.getElementById("plant-forever").style.transitionDuration = "0.25s";
      }, 1500);
    });
    this.charmingScroll();
    this.sleepyScroll();
    window.addEventListener("resize", this.charmingScroll);
    window.addEventListener("resize", this.sleepyScroll);
    window.addEventListener("scroll", this.sleepyScroll);
    window.addEventListener("scroll", this.charmingScroll);
    while (this.slide > 0) {
      this.slide--;
      if (this.slide === 0) {
        document.getElementById("plant-forever").style.transitionDuration = "0s";
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.charmingScroll);
    window.removeEventListener("resize", this.sleepyScroll);
    window.removeEventListener("scroll", this.sleepyScroll);
    window.removeEventListener("scroll", this.charmingScroll);
  },
  methods: {

    charmingScroll() {
      if (window.scrollY + window.innerHeight * 0.8 > document.getElementById("charming").getBoundingClientRect().top + window.scrollY && window.scrollY + window.innerHeight * 0.8 < document.getElementById("charming").getBoundingClientRect().top + window.scrollY + 800) {
        document.getElementById("charming").style.transform = `translateX(${(document.getElementById("charming").getBoundingClientRect().top + window.scrollY + 800 - window.scrollY - window.innerHeight * 0.8) * (450 / 800)}px)`;
      } else if (window.scrollY + window.innerHeight * 0.8 > document.getElementById("charming").getBoundingClientRect().top + window.scrollY + 800) {
        document.getElementById("charming").style.transform = "translateX(0px)";
        window.removeEventListener("scroll", this.charmingScroll);
      }
    },
    sleepyScroll() {
      if (window.scrollY + window.innerHeight * 0.8 > document.getElementById("sleepy-trigger").getBoundingClientRect().top + window.scrollY && window.scrollY + window.innerHeight * 0.8 < document.getElementById("sleepy-trigger").getBoundingClientRect().top + window.scrollY + 230) {
        document.getElementById("sleepy").style.transform = `translateX(${(document.getElementById("sleepy-trigger").getBoundingClientRect().top + window.scrollY + 230 - window.scrollY - window.innerHeight * 0.8) * (-100 / 230)}px)`;
        document.getElementById("sleepy").style.opacity = (window.scrollY + window.innerHeight * 0.8 - document.getElementById("sleepy-trigger").getBoundingClientRect().top - window.scrollY) / 230;
      } else if (
        window.scrollY + window.innerHeight * 0.8 > document.getElementById("sleepy-trigger").getBoundingClientRect().top + window.scrollY + 230) {
        document.getElementById("sleepy").style.transform = "translateX(0px)";
        document.getElementById("sleepy").style.opacity = (window.scrollY + window.innerHeight * 0.8 - document.getElementById("sleepy-trigger").getBoundingClientRect().top - window.scrollY) / 230;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  display: table;
  a {
    color: black;
    &:hover {
      color: #00adb5;
    }
  }
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
#plant-forever {
  transform: translateX(250px);
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0, 0.85, 1, 1);
  box-shadow: 0px 4px 6px 0px rgba(67, 160, 71, 0.3);
  border: 3px solid #43a047;
  padding: 10px 0px;
  border-radius: 5px;
  width: 175px;
  float: right;
  text-align: center;
  text-decoration: none;
  color: black;
  img {
    margin: auto;
    margin-bottom: 5px;
    display: block;
    width: 100px;
  }
  &.mounted {
    transform: translateX(0px);
  }
  &:hover {
    box-shadow: 0px 6px 16px 0px rgba(67, 160, 71, 0.7);
    transform: translateY(-3px);
  }
}
@media (max-width: 750px) {
  #charming {
    transform: translateX(0px);
  }
  #sleepy {
    width: 20vw;
    padding-right: 15px;
  }
}
</style>
