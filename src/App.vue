<template>
  <div id="app">
    <div v-if="$route.name !== 'IOP' && $route.name !== 'HackerTerminal'">
      <div v-if="showNav" id="nav" @click="hideNav">
        <router-link id="ching" :to="{ name: 'About' }" draggable="false">Ching</router-link>
        <router-link id="chang" :to="{ name: 'About' }" draggable="false">Chang</router-link>
        <router-link :to="{ name: 'About' }" draggable="false">About Me</router-link>
        <router-link :to="{ name: 'Projects' }" draggable="false">Projects</router-link>
        <router-link :to="{ name: 'Poems' }" draggable="false">Poems</router-link>
        <router-link :to="{ name: 'PhotoGallery' }" draggable="false">Photo Gallery</router-link>
        <router-link :to="{ name: 'Quotes' }" draggable="false">Quotes</router-link>
        <router-link :to="{ name: 'MusicHistory' }" draggable="false">Music History</router-link>
      </div>
      <div v-if="showNav" id="hide-nav" @click="hideNav"></div>
      <img v-if="!showNav" id="nav-activator" src="@/assets/nav.svg" alt="button" @click="showNav = true" />
      <main id="content">
        <transition name="fade" mode="out-in" @enter="enter" @afterEnter="afterEnter" @beforeLeave="beforeLeave">
          <router-view />
        </transition>
      </main>
      <footer>
        <div id="copyright" class="column">
          <div>
            <router-link :to="{ name: 'About' }"><img src="@/assets/logo.webp" draggable="false" alt="Ching Chang" /></router-link>
          </div>
          <div>Ching Chang &copy; 2019 Creative Commons - Some Rights Reserved</div>
        </div>
        <div class="column">
          <div class="title">Social Links</div>
          <a href="mailto:chingtheprogrammer@gmail.com" draggable="false">Email</a>
          <a href="https://github.com/ChingChang9" target="_blank" rel="noopener noreferrer" draggable="false">Github</a>
          <a href="https://www.instagram.com/chingchang.9/" target="_blank" rel="noopener noreferrer" draggable="false">Instagram</a>
          <a href="https://www.pinterest.ca/ChingChang9" target="_blank" rel="noopener noreferrer" draggable="false">Pinterest</a>
          <router-link :to="require('@/assets/snapchat.webp')" target="_blank" rel="noopener noreferrer" draggable="false">Snapchat</router-link>
        </div>
        <div class="column">
          <div class="title">Resources</div>
          <a href="https://www.image-charts.com" target="_blank" rel="noopener noreferrer" draggable="false">Image-Charts</a>
          <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" draggable="false">MDN Web Docs</a>
          <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" draggable="false">Stack Overflow</a>
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
  metaInfo: {
    title: "Home",
    titleTemplate: "%s – Ching Chang's Personal Website"
  },
  data() {
    return {
      showNav: true,
      previousHeight: 0
    };
  },
  mounted() {
    window.addEventListener("resize", this.hideNav);
    this.hideNav();
  },
  methods: {
    hideNav() {
      this.showNav = window.innerWidth > 750;
    },
    enter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.previousHeight;
      setTimeout(() => element.style.height = height);
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    beforeLeave(element) {
      this.previousHeight = getComputedStyle(element).height;
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Optima;
  src: url("assets/fonts/Optima.ttf");
  font-weight: normal;
}
@font-face {
  font-family: Optima;
  src: url("assets/fonts/Optima-Bold.ttf");
  font-weight: 600;
}

body {
  margin: 0;
  background-color: $white;
  color: $black;
  font-family: Optima;
  overflow-x: hidden;
}
input, textarea, select {
  outline-width: 0;
  background-color: $white;
  color: $black;
}
a {
  color: $black;
  &:hover {
    color: $primary-colour;
  }
}
.title {
  color: transparent;
  background-color: $black;
  background-clip: text;
  text-shadow: -1px -1px 1px $primary-colour;
}
::-webkit-scrollbar {
  width: 15px;
  &-track {
    border-radius: 100px;
    background: transparent;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.4);
    border: 3px solid transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.05);
      border: 4px solid transparent;
      background-clip: padding-box;
    }
    &:active {
      background: rgba(0, 0, 0, 0.1);
      border: 4px solid transparent;
      background-clip: padding-box;
    }
  }
  &-thumb {
    background: rgba($secondary-colour, 0.6);
    border-radius: 100px;
    border: 4px solid transparent;
    background-clip: padding-box;
    &:hover {
      background: rgba($secondary-colour, 0.85);
      border: 4px solid transparent;
      background-clip: padding-box;
    }
    &:active {
      background: $secondary-colour;
      border: 4px solid transparent;
      background-clip: padding-box;
    }
  }
  &-corner {
    background: transparent;
  }
}
::selection {
  background-color: $black;
  color: $white;
}
.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

#nav {
  top: 0;
  left: 0;
  user-select: none;
  z-index: 5;
  position: fixed;
  padding-left: 2vw;
  width: $nav-width;
  height: 100vh;
  background-color: $primary-colour;
  #ching,
  #chang {
    cursor: default;
    font-size: calc(22px + 2.4vw);
    font-weight: 600;
    text-shadow: 0 0 30px darken($primary-colour, 50%);
    padding: 0;
    cursor: pointer;
    &:hover {
      background: inherit;
      color: inherit;
    }
  }
  #ching {
    margin-top: 7vh;
    margin-left: calc(0.1vw - 5px);
  }
  #chang {
    margin: 2.5vh 0 6vh calc(5vw - 5px);
  }
  a {
    padding: 2vh 10px 2vh 1.5vw;
    text-decoration: none;
    display: block;
    font-size: calc(20px + 0.7vw);
    border-radius: 15px 0 0 15px;
    &:hover {
      background-color: $black;
    }
  }
}
#nav-activator {
  opacity: 0.4;
  position: fixed;
  cursor: pointer;
  z-index: 3;
  right: 10px;
  top: 20px;
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
  margin-left: calc(20.32vw + 38.4px); // calc(#{$nav-width} + 2vw + #{$content-width} * 0.04);
  width: calc(#{$content-width} * 0.92);
  #topic {
    margin-top: 20px;
    user-select: none;
    cursor: default;
    font-size: calc(30px + 5vw);
  }
  #line {
    margin: 15px 0 50px calc(#{$content-width} * -0.02);
    width: calc(#{$content-width} * 0.96);
    height: 15px;
    background-color: $primary-colour;
    border-radius: 20px;
  }
  p {
    font-size: calc(18px + 0.24vw);
    opacity: 0;
    transition-duration: 0.5s;
    transform: translateY(20px);
    &.slide-up {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}

footer {
  display: flex;
  width: calc(100vw - #{$nav-width});
  margin-left: $nav-width;
  padding: 20px 0;
  background-color: $black;
  .column {
    display: flex;
    flex-grow: 1;
    align-items: center;
    flex-direction: column;
    margin: 0 5vw;
    width: calc(40px + 10vw);
    color: $white;
    opacity: 0.5;
    transition-duration: 0.3s;
    &:hover {
      opacity: 1;
    }
    &#copyright {
      text-align: center;
      font-size: 13px;
      cursor: default;
      img {
        width: 55%;
        padding-bottom: 10px;
      }
    }
    .title {
      color: $white;
      background-clip: none;
      text-shadow: none;
      cursor: default;
      font-size: calc(18px + 1vw);
      font-weight: 600;
      margin-bottom: 13px;
    }
    a {
      color: $white;
      font-size: calc(16px + 0.2vw);
      padding-bottom: 4px;
      &:hover {
        color: $primary-colour;
      }
    }
  }
}

@media (max-width: 750px) {
  #nav {
    width: 100vw;
    height: auto;
    padding: 0;
    #ching,
    #chang {
      display: none;
    }
    a {
      border-radius: 0;
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
    margin-left: 0;
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
      img {
        width: calc(30% + 50px);
      }
    }
    .column {
      margin-bottom: 20px;
      width: 50vw;
      .title {
        margin-bottom: 0;
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