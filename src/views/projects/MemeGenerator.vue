<template>
  <div>
    <div id="topic">Meme Generator</div>
    <div id="line"></div>
    <input v-model="input" type="text" placeholder="Text" />
    <div id="canvas">
      <picture>
        <source srcset="@/assets/pictures/spongebob-mocking.webp" type="image/webp" />
        <source srcset="@/assets/pictures/spongebob-mocking.jpg" type="image/jpeg" />
        <img src="@/assets/pictures/spongebob-mocking.jpg" />
      </picture>
      <div>{{ text }}</div>
    </div>
    <div id="button-container">
      <div id="save-button" @click="save">Save Image</div>
      <a ref="download" download="download.jpg"></a>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import ogImage from "@/assets/projects/meme-generator.jpg";

export default {
  name: "MemeGenerator",
  metaInfo: {
    title: "Spongebob Mocking Meme Generator",
    meta: [
      { name: "description", content: "A free, online spongebob mocking meme maker. No watermark, 100% free, super easy to use, pre-made template, and quick download with just a click of a button." },
      { name: "keywords", content: "spongebob, mocking, meme, alternating case, meme maker, no watermark, online, template, generator, free" },
      { property: "og:image", content: `https://www.chingchang.dev${ ogImage }` }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/spongebob-meme-generator" }
    ]
  },
  data() {
    return {
      input: this.$route.params.inputFromLink || ""
    };
  },
  computed: {
    text() {
      let output = "";
      let counter = 0;
      for (let index = 0; index < this.input.length; index++) {
        if (/[A-Za-z]/.test(this.input[index])) counter++;
        if (counter % 2) {
          output += this.input[index].toLowerCase();
        } else {
          output += this.input[index].toUpperCase();
        }
      }
      return output;
    }
  },
  mounted() {
    document.querySelectorAll("input")[0].focus();
    if (this.$route.params.inputFromLink) {
      document.querySelector("#canvas img").addEventListener("load", () => {
        html2canvas(document.querySelector("#canvas")).then((canvas) => {
          document.querySelector("#app").remove();
          let meme = document.createElement("img");
          meme.style.maxWidth = "100vw";
          meme.style.maxHeight = "100vh";
          meme.src = canvas.toDataURL();
          document.body.append(meme);
          document.body.style.background = "black";
          document.body.style.display = "flex";
          document.body.style.height = "100vh";
          document.body.style.justifyContent = "center";
          document.body.style.alignItems = "center";
        });
      });
    }
  },
  methods: {
    save() {
      let currentScroll = window.scrollY;
      window.scroll(0, 0);
      html2canvas(document.querySelector("#canvas")).then((canvas) => {
        this.$refs.download.href = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
        this.$refs.download.click();
      });
      window.scroll(0, currentScroll);
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Impact;
  src: url("../../assets/fonts/Impact.ttf");
  font-display: swap;
}

input {
  position: relative;
  z-index: 1;
  border: 3px solid $grey;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 25px;
  width: calc(100% - 16px);
  font-size: 28px;
  &:focus {
    border-color: $secondary-colour;
  }
}
#canvas {
  position: relative;
  div {
    user-select: none;
    position: absolute;
    top: calc(2% - 260px);
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-family: Impact, "Arial Black", sans-serif;
    color: white;
    font-size: 68px;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    line-height: 565px;
  }
  img {
    width: 100%;
    margin-bottom: -5px;
  }
}
#button-container {
  position: relative;
  text-align: center;
  #save-button {
    user-select: none;
    background-color: darken($secondary-colour, 8%);
    display: inline-block;
    color: $white;
    font-size: 24px;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 25px;
    margin-bottom: 25px;
    cursor: pointer;
    box-shadow: 1px 1px 6px $black;
    &:hover {
      filter: brightness(80%);
    }
  }
}

@media (max-width: 1440px) {
  #canvas div {
    top: calc(2% - 220px);
    font-size: 68px;
    line-height: 490px;
  }
}
@media (max-width: 1024px) {
  #canvas div {
    top: calc(2% - 130px);
    font-size: 42px;
    line-height: 300px;
  }
}
@media (max-width: 768px) {
  #canvas div {
    top: calc(2% - 90px);
    font-size: 28px;
    line-height: 195px;
  }
}
@media (max-width: 414px) {
  #canvas div {
    top: calc(2% - 65px);
    font-size: 19px;
    line-height: 135px;
  }
}
@media (max-width: 320px) {
  #canvas div {
    top: calc(2% - 60px);
    font-size: 16px;
    line-height: 120px;
  }
}
</style>