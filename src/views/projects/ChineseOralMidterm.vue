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
      scroll: 0
    };
  },
  watch: {
    scroll() {
      window.scrollTo(0, this.scroll);
    }
  },
  mounted() {
    document.addEventListener("click", this.togglePause);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.togglePause);
  },
  methods: {
    togglePause() {
      this.pause = !this.pause;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>