<template>
  <router-view id="body" />
</template>

<script>
export default {
  name: "Blog",
  metaInfo: {
    title: "Blog",
    meta: [
      { name: "description", content: "" },
      { name: "keywords", content: "" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/blog" }
    ]
  }
}
</script>

<style lang="scss">
#body {
  #subtitle {
    display: inline-block;
    font-size: 26px;
    font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
    background-color: $white;
    color: darken($white, 45%);
  }
  #cover-photo {
    width: calc(100vw - 200px);
    margin-left: -40px;
  }
  #text {
    width: 700px;
    margin: 2em auto;
    h1 {
      font-size: 38px;
      display: inline;
      background-color: $white;
    }
    .paragraph {
      font-size: 21px;
      line-height: 1.5em;
      background-color: $white;
      margin-bottom: 2em;
    }
    .quote {
      font-size: 21px;
      line-height: 1.5em;
      padding-left: 1em;
      margin-left: 2em;
      border-left: 5px solid darken($white, 40%);
      border-radius: 3px;
      margin-bottom: 15px;
      background-color: $white;
      display: inline-block;
      &.last {
        margin-bottom: 2em;
      }
    }
    img {
      width: 100%;
      margin-bottom: 10px;
    }
    .image-description {
      text-align: right;
      font-size: 18px;
      color: darken($white, 55%);
      background-color: $white;
      margin-bottom: 30px;
    }
  }
}
</style>