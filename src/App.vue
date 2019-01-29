<template>
  <div id="app">
    <div v-if="$route.path !== '/iop' && $route.path !== '/projects/hacker-terminal'">
      <div v-if="showNav" id="nav" @click="hideNav();$nextTick(function(){animateText()})">
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
          <router-link :to="{ name: 'About' }"><img src="@/assets/logo.png" draggable="false" @click="$nextTick(function(){animateText()})" /></router-link>
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
  mounted() {
    this.animateText();
    window.addEventListener("resize", function() {
      this.animateText();
      if (window.innerWidth <= 750) {
        this.showNav = false;
      } else {
        this.showNav = true;
      }
    }.bind(this));
    window.addEventListener("scroll", this.animateText);
    if (window.innerWidth <= 750) {
      this.showNav = false;
    } else {
      this.showNav = true;
    }
  },
  methods: {
    hideNav() {
      if (window.innerWidth <= 750) {
        this.showNav = false;
      }
    },
    animateText() {
      for (var id = 0; id < document.getElementsByTagName("p").length; id++) {
        if (window.innerHeight > document.getElementsByTagName("p")[id].getClientRects()[0].top + 50) {
          document.getElementsByTagName("p")[id].classList.add("slide-up");
        } else {
          document.getElementsByTagName("p")[id].classList.remove("slide-up");
        }
      }
    }
  }
};
</script>

<style lang="scss">
/* General Style */
body {
  margin: 0px;
}
#app {
  overflow-x: hidden;
}

/* Navigation Bar */
#nav {
  font-family: optima;
  top: 0px;
  left: 0px;
  user-select: none;
  z-index: 5;
  position: fixed;
  padding-left: 2vw;
  width: calc(15vw + 40px);
  height: 100vh;
  background-color: #00adb5;
  #ching,
  #chang {
    cursor: default;
    font-size: calc(22px + 2.4vw);
    color: white;
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
    color: white;
    &:hover {
      background-color: white;
      color: black;
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
  background-color: #eeeeee;
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

/* Content */
#content {
  font-family: optima;
  cursor: default;
  margin-left: calc(20.32vw + 41.6px); // calc(15vw + 40px + 2vw + (100vw - 15vw - 40px - 2vw) * 0.04)
  width: calc((100vw - 15vw - 40px - 2vw) * 0.92);
  #topic {
    margin-top: 20px;
    user-select: none;
    cursor: default;
    font-size: calc(30px + 5vw);
    color: #00adb5;
  }
  #line {
    margin: 15px 0px 50px calc((100vw - 15vw - 40px - 2vw) * -0.02);
    width: calc((100vw - 15vw - 40px - 2vw) * 0.96);
    height: 15px;
    background-color: #00adb5;
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

/* Footer */
footer {
  display: flex;
  width: calc(100vw - 15vw - 40px - 2vw + 20px);
  margin-left: calc(15vw + 40px + 2vw - 10px);
  padding: 20px 0px;
  background-color: #e0e2db;
  #copyright {
    text-align: center;
    width: calc(90px + 5vw);
    cursor: default;
    font-size: 13px;
    img {
      width: 55%;
      height: 55%;
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
      color: #00adb5;
      font-size: calc(18px + 1vw);
      font-weight: 700;
      margin-bottom: 13px;
    }
    .text {
      text-align: center;
      text-decoration: none;
      color: black;
      font-size: calc(16px + 0.2vw);
      padding-bottom: 4px;
    }
    .text:hover {
      color: #00adb5;
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
@media (max-height: 580px) {
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
@media (max-height: 550px) {
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
