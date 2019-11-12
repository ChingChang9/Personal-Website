<template>
  <router-view id="body" />
</template>

<script>
export default {
  name: "Blog",
  metaInfo: {
    title: "",
    titleTemplate: (title) => {
      return title ? `${ title } — Blog | Ching Chang's Personal Website` : "Blog — Ching Chang's Personal Website";
    },
    meta: [
      { name: "description", content: "Ching Chang writes about his high school life. Including funny short stories, teenage problems, philosophy, and whatever is in his mind! Basically Ching's public diary." },
      { name: "keywords", content: "Ching Chang, blog, story, funny, personal, examples, site, high school, ideas, life" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/blog" }
    ]
  }
}
</script>

<style lang="scss">
#body {
  #subtitle, #date-written {
    display: table;
    margin-left: 10px;
    font-size: 26px;
    font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
    background-color: $white;
    color: darken($white, 45%);
  }
  #date-written {
    color: darken($white, 52%);
    font-size: 18px;
    margin: -0.5em 0 1em 10px;
  }
  #cover-photo {
    width: calc(100vw - 200px);
    margin-left: -40px;
  }
  #text {
    width: 700px;
    font-size: 21px;
    background-color: $white;
    margin: 2em auto;
    h1 {
      font-size: 38px;
      margin: 0;
      background-color: $white;
    }
    .paragraph {
      text-indent: 2em;
      line-height: 1.5em;
      margin-bottom: 2em;
    }
    .quote {
      line-height: 1.5em;
      padding-left: 1em;
      margin-left: 2em;
      border-left: 5px solid darken($white, 40%);
      border-radius: 4px;
      margin-bottom: 15px;
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
      margin-bottom: 30px;
      a {
        color: darken($white, 55%);
        &:hover {
          color: $primary-colour;
        }
      }
    }
  }
}

@media (max-width: 980px) {
  #body #text {
    width: 100%;
    font-size: 18px;
    .image-description {
      font-size: 16px;
    }
  }
}
@media (max-width: 750px) {
  #body #cover-photo {
    width: 100vw;
  }
}
@media (max-width: 540px) {
  #body #subtitle {
    font-size: 22px;
  }
}
</style>