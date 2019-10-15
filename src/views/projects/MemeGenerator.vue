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

export default {
  name: "MemeGenerator",
  metaInfo: {
    title: "Spongebob Mocking Meme Generator",
    meta: [
      { name: "description", content: "An online spongebob mocking meme maker. No watermark, 100% free, super easy to use, pre-made template, and quick download with just a click of a button." },
      { name: "keywords", content: "spongebob, mocking, meme, alternating case, meme maker, photoshop, online, template, generator, text" }
    ],
    link: [
      { rel: "canonical", href: "https://chingchang.netlify.com/projects/spongebob-meme-generator" }
    ]
  },
  data() {
    return {
      input: ""
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
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Impact;
  src: url("../../assets/fonts/Impact.ttf");
}

input {
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
  z-index: -1;
  div {
    user-select: none;
    position: absolute;
    top: calc(2% - 200px);
    width: 100%;
    text-align: center;
    font-family: Impact;
    color: white;
    font-size: 60px;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    line-height: 450px;
  }
  img {
    width: 100%;
    margin-bottom: -5px;
  }
}
#button-container {
  text-align: center;
  #save-button {
    user-select: none;
    background-color: $secondary-colour;
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
</style>