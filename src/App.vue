<template>
  <div id="app">
    <div v-if="$route.path !== '/iop' && $route.path !== '/projects/hacker-terminal'">
      <div v-if="showNav" id="nav" @click="hideNav();$nextTick(animateText)">
        <div id="ching">Ching</div>
        <div id="chang">Chang</div>
        <router-link :to="{ name: 'About' }" draggable="false">About Me</router-link>
        <router-link :to="{ name: 'Projects' }" draggable="false">Projects</router-link>
        <router-link :to="{ name: 'PhotoGallery' }" draggable="false">Photo Gallery</router-link>
        <router-link :to="{ name: 'MovieReviews' }" draggable="false">Movie Reviews</router-link>
        <router-link :to="{ name: 'MusicHistory' }" draggable="false">Music History</router-link>
      </div>
      <div v-if="showNav" id="hide-nav" @click="hideNav"></div>
      <img v-if="!showNav" id="nav-activator" src="@/assets/nav.png" @click="showNav = true" />
      <div id="content">
        <router-view />
      </div>
      <footer>
        <div id="copyright" class="column">
          <router-link :to="{ name: 'About' }"><img src="@/assets/logo.png" draggable="false" @click="$nextTick(animateText)" /></router-link>
          <div>Ching Chang &copy; 2019 Creative Commons - Some Rights Reserved</div>
        </div>
        <div class="column">
          <div class="title">Social Links</div>
          <a href="mailto:chingchangtheprogrammer@icloud.com" class="text" draggable="false">Email</a>
          <a href="https://github.com/ChingChang9" target="_blank" class="text" draggable="false">Github</a>
          <router-link :to="require('@/assets/snapchat.jpg')" target="_blank" class="text" draggable="false">Snapchat</router-link>
        </div>
        <div class="column">
          <div class="title">Resources</div>
          <a href="https://www.image-charts.com" target="_blank" class="text" draggable="false">Image-Charts</a>
          <a href="https://developer.mozilla.org" target="_blank" class="text" draggable="false">MDN Web Docs</a>
          <a href="https://stackoverflow.com" target="_blank" class="text" draggable="false">Stack Overflow</a>
        </div>
      </footer>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showNav: true
    };
  },
  watch: {
    $route(to, from) {
      this.$nextTick(this.animateText);
    }
  },
  mounted() {
    this.animateText();
    window.addEventListener("resize", function() {
      this.animateText();
      this.showNav = window.innerWidth > 750;
    }.bind(this));
    window.addEventListener("scroll", this.animateText);
    this.showNav = window.innerWidth > 750;
  },
  methods: {
    hideNav() {
      this.showNav = window.innerWidth > 750;
    },
    animateText() {
      for (let index = 0; index < document.getElementsByTagName("p").length; index++) {
        if (window.innerHeight > document.getElementsByTagName("p")[index].getClientRects()[0].top + 50) {
          document.getElementsByTagName("p")[index].classList.add("slide-up");
        }
      }
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  background-color: #f5f0f4;
  color: #44464a;
  font-family: optima;
}
#app {
  overflow-x: hidden;
}
input, textarea, select {
  background-color: #f5f0f4;
  color: #44464a;
}
a {
  color: #44464a;
  &:hover {
    color: #ffbc8a;
  }
}

#nav {
  top: 0px;
  left: 0px;
  user-select: none;
  z-index: 5;
  position: fixed;
  padding-left: 2vw;
  width: calc(15vw + 40px);
  height: 100vh;
  background-color: #ffbc8a;
  #ching,
  #chang {
    cursor: default;
    font-size: calc(22px + 2.4vw);
    font-weight: 600;
    text-shadow: 3px 3px 30px #7f3c0a;
  }
  #ching {
    margin-top: 7vh;
    margin-left: calc(0.1vw - 5px);
  }
  #chang {
    margin: 2.5vh 0vw 6vh calc(5vw - 5px);
  }
  a {
    padding: 2vh 10px 2vh 1.5vw;
    text-decoration: none;
    display: block;
    font-size: calc(20px + 0.7vw);
    border-radius: 15px 0px 0px 15px;
    &:hover {
      background-color: #44464a;
    }
  }
}
#nav-activator {
  opacity: 0.4;
  position: fixed;
  cursor: pointer;
  z-index: 3;
  margin-left: calc(90vw - 60px);
  margin-top: 20px;
  width: 60px;
  height: 60px;
  background-color: #bbbbbb;
  border-radius: 15px;
  &:hover {
    opacity: 0.9;
  }
}
#hide-nav {
  display: none;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  position: fixed;
}

#content {
  cursor: default;
  margin-left: calc(20.32vw + 41.6px); // calc(15vw + 40px + 2vw + (100vw - 15vw - 40px - 2vw) * 0.04)
  width: calc((100vw - 15vw - 40px - 2vw) * 0.92);
  #topic {
    margin-top: 20px;
    user-select: none;
    cursor: default;
    font-size: calc(30px + 5vw);
  }
  #line {
    margin: 15px 0px 50px calc((100vw - 15vw - 40px - 2vw) * -0.02);
    width: calc((100vw - 15vw - 40px - 2vw) * 0.96);
    height: 15px;
    background-color: #ffbc8a;
    border-radius: 20px;
  }
  p {
    font-size: calc(18px + 0.24vw);
    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
    &.slide-up {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}

footer {
  display: flex;
  width: calc(100vw - 15vw - 40px - 2vw + 20px);
  margin-left: calc(15vw + 40px + 2vw - 10px);
  padding: 20px 0px;
  background-color: #ffdbe7;
  #copyright {
    text-align: center;
    width: calc(90px + 5vw);
    cursor: default;
    font-size: 13px;
    img {
      width: 55%;
      padding-bottom: 10px;
    }
  }
  .column {
    display: flex;
    flex-grow: 1;
    align-items: center;
    flex-direction: column;
    margin: 0px 5vw;
    width: calc(40px + 10vw);
    .title {
      text-align: center;
      cursor: default;
      color: #ffbc8a;
      font-size: calc(18px + 1vw);
      font-weight: 700;
      margin-bottom: 13px;
      text-shadow: 2px 2px 3px #44464a;
    }
    .text {
      text-align: center;
      text-decoration: none;
      font-size: calc(16px + 0.2vw);
      padding-bottom: 4px;
      text-decoration: underline;
    }
  }
}

@media (max-width: 750px) {
  #nav {
    width: 100vw;
    height: auto;
    padding: 0px;
    #ching,
    #chang {
      display: none;
    }
    a {
      border-radius: 0px;
      padding-left: 30px;
    }
  }
  #content {
    width: 96vw;
    margin-left: 2vw;
    #line {
      width: 102%;
    }
  }
  footer {
    margin-left: 0px;
    width: 100vw;
    #copyright {
      padding-top: 55px;
      img {
        margin-top: -50px;
      }
    }
  }
  #hide-nav {
    display: block;
  }
}
@media (max-height: 510px) {
  #nav {
    #ching {
      margin-top: 1vh;
      margin-bottom: 1vh;
    }
    #chang {
      margin-top: 1vh;
      margin-bottom: 4vh;
    }
  }
}
@media (max-width: 440px) {
  footer {
    align-items: center;
    flex-direction: column;
    #copyright {
      width: 50vw;
    }
    .column {
      margin-bottom: 20px;
      width: 50vw;
      .title {
        margin-bottom: 0px;
      }
    }
  }
}
@media (max-height: 450px) {
  #nav {
    align-items: center;
    #ching,
    #chang {
      display: none;
    }
    a {
      margin-top: 3vh;
    }
  }
}
</style>