<template>
  <router-view id="blog" />
</template>

<script>
export default {
  metaInfo: {
    title: "Blog",
    titleTemplate: (title) => {
      return title === "Blog" ? "Blog — Ching Chang's Personal Website" : `${ title } — Blog | Ching Chang's Personal Website`;
    }
  }
}
</script>

<style lang="scss">
#blog {
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
      margin: 0 0 5px;
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
      border-left: 5px solid $secondary-colour;
      border-radius: 4px;
      margin-bottom: 15px;
      &.last {
        margin-bottom: 2em;
      }
    }
    sup {
      font-size: 12px;
    }
    cite {
      font-style: normal;
      div {
        margin-bottom: 10px;
        a {
          word-break: break-all;
          &:hover {
            color: $secondary-colour;
          }
        }
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
      a:not(:hover) {
        color: darken($white, 55%);
      }
    }
  }
}

@media (max-width: 980px) {
  #blog #text {
    width: 100%;
    font-size: 18px;
    .image-description {
      font-size: 16px;
    }
  }
}
@media (max-width: 750px) {
  #blog #cover-photo {
    width: 100vw;
  }
}
@media (max-width: 540px) {
  #blog #subtitle {
    font-size: 22px;
  }
}
@media (max-width: 375px) {
  #blog #cover-photo {
    margin-left: -15px;
  }
}
@media (max-width: 320px) {
  #blog {
    #right-side main #topic {
      font-size: 50px;
    }
    #date-written {
      margin: -0.2em 0 0.7em 10px;
    }
    #text {
      h1 {
        font-size: 33px;
      }
      .quote {
        margin-left: 1em;
      }
    }
  }
}
</style>