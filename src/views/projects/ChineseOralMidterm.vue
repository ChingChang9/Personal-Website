<template>
  <div>
    <div id="topic">我的理想職業</div>
  </div>
</template>

<script>
export default {
  name: "ChineseOralMidterm",
  metaInfo: {
    title: "Chinese Oral Midterm",
    titleTemplate: "%s – Ching Chang",
    meta: [
      { name: "description", content: "" },
      { name: "keywords", content: "" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/chinese-oral-midterm" }
    ]
  },
  data() {
    return {
      pause: true,
      scroll: 0,
      intervalID: 0
    };
  },
  watch: {
    scroll() {
      window.scrollTo(0, this.scroll);
    }
  },
  mounted() {
    document.addEventListener("click", this.togglePause);
    document.addEventListener("scroll", this.animateScroll);
    this.animateScroll();
  },
  beforeDestroy() {
    clearInterval(this.intervalID);
    document.removeEventListener("click", this.togglePause);
    document.removeEventListener("scroll", this.animateScroll);
  },
  methods: {
    togglePause() {
      this.pause = !this.pause;
    },
    animateScroll() {
      for (let index = 0; index < document.querySelectorAll("img").length; index++) {
        if (window.innerHeight > document.querySelectorAll("img")[index].getClientRects()[0].top + 60){
          document.querySelectorAll("img")[index].classList.add("slide-up");
        } else {
          document.querySelectorAll("img")[index].classList.remove("slide-up");
        }
      }
      for (let index = 0; index < document.querySelectorAll("p").length; index++) {
        if (window.innerHeight > document.querySelectorAll("p")[index].getClientRects()[0].top + 60){
          document.querySelectorAll("p")[index].classList.add("slide-up");
        } else {
          document.querySelectorAll("p")[index].classList.remove("slide-up");
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>