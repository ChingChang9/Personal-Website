<template>
  <div>
    <div id="banner">
      <picture>
        <source media="(max-width: 500px)" srcset="@/assets/pictures/banner-500.webp" type="image/webp" />
        <source media="(max-width: 500px)" srcset="@/assets/pictures/banner-500.jpg" type="image/jpeg" />
        <source media="(max-width: 800px)" srcset="@/assets/pictures/banner-800.webp" type="image/webp" />
        <source media="(max-width: 800px)" srcset="@/assets/pictures/banner-800.jpg" type="image/jpeg" />
        <source media="(max-width: 1093px)" srcset="@/assets/pictures/banner-1093.webp" type="image/webp" />
        <source media="(max-width: 1093px)" srcset="@/assets/pictures/banner-1093.jpg" type="image/jpeg" />
        <source srcset="@/assets/pictures/banner.webp" type="image/webp" />
        <source srcset="@/assets/pictures/banner.jpg" type="image/jpeg" />
        <img src="@/assets/pictures/banner.jpg" alt="Ching Chang with his wings" />
      </picture>
      <div id="heading">{{ quotes[quoteIndex] }}</div>
    </div>
    <div id="content">
      <div id="cards">
        <router-link class="card" :to="{ name: 'NoHopeForMercy' }">
          <div class="pre-title">FEATURED</div>
          <div class="title">No Hope For Mercy</div>
          <div class="sub-title">Most people are born innocent, but I was born fake</div>
          <div class="info">November 8, 2019 • 5 minute read</div>
          <picture>
            <source srcset="@/assets/pictures/featured.webp" type="image/webp" />
            <source srcset="@/assets/pictures/featured.jpg" type="image/jpeg" />
            <img src="@/assets/pictures/featured.jpg" alt="Ching Chang" />
          </picture>
        </router-link>
        <router-link class="card" :to="{ name: 'TheDoorsYouShut' }">
          <div class="pre-title">LATEST BLOG POST</div>
          <div class="title">The Doors You Shut</div>
          <div class="sub-title">Not your strength? Why not make it your strength?</div>
          <div class="info">December 8, 2019 • 8 minute read</div>
          <picture>
            <source srcset="@/assets/pictures/latest.webp" type="image/webp" />
            <source srcset="@/assets/pictures/latest.jpg" type="image/jpeg" />
            <img src="@/assets/pictures/latest.jpg" alt="open door" />
          </picture>
        </router-link>
        <router-link class="card" :to="{ name: 'Contact' }">
          <div class="pre-title">CONTACT ME</div>
          <div class="title">Want a website?</div>
          <div class="sub-title">Or just drop in to be friends, suggest content, or do something lovely</div>
          <picture>
            <source srcset="@/assets/pictures/contact.webp" type="image/webp" />
            <source srcset="@/assets/pictures/contact.jpg" type="image/jpeg" />
            <img src="@/assets/pictures/contact.jpg" alt="Ching Chang" />
          </picture>
        </router-link>
      </div>
      <div id="about-me">
        <picture>
          <source srcset="@/assets/pictures/headshot.webp" type="image/webp" />
          <source srcset="@/assets/pictures/headshot.jpg" type="image/jpeg" />
          <img src="@/assets/pictures/headshot.jpg" alt="Ching Chang" />
        </picture>
        <div class="title">Ching Chang</div>
        <div class="text">
          Hi, I am Ching Chang, a freelance web developer with a passion for design. I am
          open-minded but emotion-blinded. My logos and lack of pathos have intertwined my blogs
          with my shower-philosophy.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    meta: [
      { name: "description", content: "A freelance web developer who loves making websites. This site is his canvas for creative projects and philosophical blogs. Learn more about Ching Chang here!" },
      { name: "keywords", content: "Ching Chang, personal website, blog, creative, designer, philosophy, web developer, programmer, freelance, example" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev" }
    ]
  },
  data() {
    return {
      quotes: [
        "Brevity is the soul of wit",
        "I am not what I am",
        "Don't try. Succeed",
        "Hello, lovely humans",
        "Where is satisfaction?"
      ],
      quoteIndex: 0
    };
  },
  mounted() {
    this.quoteIndex = Math.floor(Math.random() * this.quotes.length);
    document.querySelector("#banner img").addEventListener("load", this.resizeBanner);
    window.addEventListener("resize", this.resizeBanner);
    document.querySelector("#banner").addEventListener("mousemove", this.parallaxBanner);
  },
  beforeDestroy() {
    document.querySelector("#banner img").removeEventListener("load", this.resizeBanner);
    window.removeEventListener("resize", this.resizeBanner);
    document.querySelector("#banner").removeEventListener("mousemove", this.parallaxBanner);
  },
  methods: {
    parallaxBanner(e) {
      let width = document.querySelector("#banner img").offsetWidth;
      let height = document.querySelector("#banner img").offsetHeight;
      let mouseX = e.clientX - e.target.getBoundingClientRect().left;
      let mouseY = e.clientY - e.target.getBoundingClientRect().top;
      document.querySelector("#banner img").style.transform = `translate(${ -5 - (mouseX - width / 2) / width * 5 }%, ${ -5 - (mouseY - height / 2) / height * 5 }%)`;
    },
    resizeBanner() {
      document.querySelector("#banner").style.height = `${ document.querySelector("#banner img").offsetHeight * 0.9 }px`;
    }
  }
}
</script>

<style lang="scss" scoped>
#banner {
  position: relative;
  width: calc(100vw - 200px);
  margin: -15px 0 25px -40px;
  overflow: hidden;
  img {
    width: 110%;
    transform: translate(-5%, -5%);
    transition-duration: 150ms;
  }
  #heading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: calc(100% - 80px);
    padding: 0 40px;
    text-align: center;
    font-size: 72px;
    font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
    color: $white;
    text-shadow: 0 0 15px $black, 0 0 5px $black;
  }
}
#content {
  display: flex;
  margin-bottom: 10px;
  #cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: calc(100% - 350px);
    .card {
      position: relative;
      width: calc(100% - 90px);
      height: 160px;
      padding: 20px 25px;
      border-radius: 20px;
      background-color: $white;
      text-decoration: none;
      box-shadow: 0 0 2px $black;
      .pre-title {
        font-size: 24px;
        color: lighten($black, 28%);
      }
      .title {
        font-size: 48px;
        font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
        color: $black;
      }
      .sub-title {
        font-size: 20px;
        color: $black;
        width: calc(100% - 200px);
        margin-top: 12px;
      }
      .info {
        position: absolute;
        left: 25px;
        bottom: 20px;
        color: lighten($black, 16%);
      }
      img {
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        height: 200px;
        border-radius: 0 20px 20px 0;
      }
      &:hover {
        box-shadow: 0 0 5px $black;
      }
    }
  }
  #about-me {
    width: 300px;
    height: 600px;
    padding: 25px;
    text-align: center;
    border-radius: 20px;
    background-color: lighten($secondary-colour, 10%);
    box-shadow: 0 0 2px $black;
    img {
      width: 300px;
      border-radius: 10px;
    }
    .title {
      font-size: 48px;
      font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
      margin-bottom: 20px;
    }
    .text {
      width: 300px;
      font-size: 20px;
      margin: 0 auto;
    }
  }
}

@media (max-width: 1365px) and (min-width: 1251px), (max-width: 973px) and (min-width: 884px), (max-width: 778px) {
  #content #cards .card .sub-title {
    margin-top: 2px;
  }
}
@media (max-width: 1345px) and (min-width: 1251px), (max-width: 953px) {
  #content #cards .card .title {
    font-size: 40px;
  }
}
@media (max-width: 1250px) {
  #banner #heading {
    font-size: 57px;
  }
  #content {
    flex-direction: column;
    align-items: center;
    #cards {
      width: 100%;
      .card {
        width: calc(100% - 50px);
        margin-bottom: 25px;
      }
    }
    #about-me {
      width: calc(100% - 50px);
    }
  }
}
@media (max-width: 883px) and (min-width: 751px), (max-width: 683px) {
  #content #cards .card {
    .pre-title {
      font-size: 20px;
    }
    .title {
      font-size: 28px;
    }
    .sub-title {
      font-size: 18px;
      width: calc(100% - 175px);
    }
    img {
      top: 20px;
      right: 20px;
      width: 160px;
      height: 160px;
      border-radius: 5px;
    }
  }
}
@media (max-width: 750px) {
  #banner {
    width: 100vw;
  }
}
@media (max-width: 600px) {
  #banner #heading {
    font-size: 48px;
  }
}
@media (max-width: 545px) {
  #content #cards .card {
    .sub-title {
      width: calc(100% - 125px);
    }
    img {
      top: 40px;
      right: 20px;
      width: 110px;
      height: 110px;
      border-radius: 5px;
    }
  }
}
@media (max-width: 430px) {
  #content #about-me {
    height: auto;
    img, .text {
      width: 100%;
    }
    .title {
      font-size: 42px;
      margin: 5px 0 15px;
    }
  }
}
@media (max-width: 414px) {
  #banner #heading {
    font-size: 36px;
  }
  #content #cards .card {
    .pre-title {
      font-size: 18px;
    }
    .title {
      font-size: 24px;
      width: calc(100% - 125px);
    }
    .sub-title {
      margin-top: 8px;
      font-size: 14px;
    }
    .info {
      font-size: 12px;
    }
  }
}
@media (max-width: 375px) {
  #banner {
    margin-left: -15px;
  }
  #content #about-me .title {
    font-size: 36px;
  }
}
@media (max-width: 374px) {
  #content {
    flex-direction: column;
    #cards .card {
      height: auto;
      .title, .sub-title {
        width: 100%;
      }
      img {
        position: static;
        width: 100%;
        height: auto;
        margin: 10px 0 25px;
      }
    }
    #about-me {
      .title {
        font-size: 30px;
      }
      .text {
        font-size: 16px;
      }
    }
  }
}
</style>