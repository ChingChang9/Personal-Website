<template>
  <div id="app">
    <div v-if="$route.name !== 'IOP' && $route.name !== 'HackerTerminal'">
      <div v-if="showNav" id="hide-nav" @click="hideNav"></div>
      <img v-else id="nav-activator" src="@/assets/nav.svg" alt="button" @click="showNav = true" />
      <div v-if="showNav" id="nav" @click="hideNav">
        <router-link id="ching" :to="{ name: 'About' }" draggable="false">Ching</router-link>
        <router-link id="chang" :to="{ name: 'About' }" draggable="false">Chang</router-link>
        <router-link :to="{ name: 'About' }" draggable="false">About Me</router-link>
        <router-link :to="{ name: 'Projects' }" draggable="false">Projects</router-link>
        <router-link :to="{ name: 'Projects' }" draggable="false">Blog</router-link>
        <router-link :to="{ name: 'Projects' }" draggable="false">Contact</router-link>
      </div>
      <div id="right-side">
        <main id="content">
          <transition name="fade" mode="out-in" @enter="enter" @afterEnter="afterEnter" @beforeLeave="beforeLeave">
            <router-view />
          </transition>
        </main>
        <footer>
          <div id="copyright" class="column">
            <div>
              <router-link :to="{ name: 'About' }">
                <picture>
                  <source srcset="@/assets/logo.webp" type="image/webp" />
                  <source srcset="@/assets/logo.jpg" type="image/jpeg" />
                  <img src="@/assets/logo.jpg" draggable="false" alt="Ching Chang" />
                </picture>
              </router-link>
            </div>
            <div>Ching Chang &copy; 2019 Creative Commons - Some Rights Reserved</div>
          </div>
          <div class="column">
            <div class="title">Social Links</div>
            <a href="mailto:chingtheprogrammer@gmail.com" draggable="false">Email</a>
            <a href="https://github.com/ChingChang9" target="_blank" rel="noopener noreferrer" draggable="false">Github</a>
            <a href="https://www.instagram.com/chingchang.9/" target="_blank" rel="noopener noreferrer" draggable="false">Instagram</a>
            <a id="discord-link" @click="copy" @mouseenter="discordName = 'Ching Chang#9870'" @mouseleave="showDiscordTooltip = false; discordName = 'Discord'">
              <span v-if="showDiscordTooltip" id="discord-tooltip">Copied</span>
              {{ discordName }}
            </a>
          </div>
          <div class="column">
            <div class="title">Resources</div>
            <a href="https://www.image-charts.com" target="_blank" rel="noopener noreferrer" draggable="false">Image-Charts</a>
            <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" draggable="false">MDN Web Docs</a>
            <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" draggable="false">Stack Overflow</a>
          </div>
        </footer>
      </div>
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
      previousHeight: 0,
      discordName: "Discord",
      showDiscordTooltip: false
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
    copy() {
      const link = document.createElement("textArea");
      link.value = "Ching Chang#9870";
      link.style.fontSize = "12px";
      document.getElementById('discord-link').appendChild(link);
      if (navigator.userAgent.match(/ipad|iphone|ipod/i)) {
        const range = document.createRange();
        range.selectNodeContents(link);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        link.setSelectionRange(0, 999999);
      } else {
        link.select();
      }
      document.execCommand("copy");
      document.getElementById('discord-link').removeChild(link);
      this.showDiscordTooltip = true;
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
  font-family: Roboto;
  src: url("assets/fonts/Roboto-Regular.ttf");
  font-weight: normal;
}
@font-face {
  font-family: Roboto;
  src: url("assets/fonts/Roboto-Bold.ttf");
  font-weight: 700;
}
@font-face {
  font-family: PoetsenOne;
  src: url("assets/fonts/PoetsenOne.ttf");
  font-weight: 600;
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

body {
  margin: 0;
  background-color: $white;
  color: $black;
  font-family: Roboto;
  #app {
    overflow-x: hidden;
  }
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

#nav {
  top: 0;
  left: 0;
  user-select: none;
  z-index: 5;
  position: fixed;
  width: 200px;
  height: 100vh;
  background-color: $primary-colour;
  a {
    padding: 15px 20px;
    margin-right: 30px;
    text-decoration: none;
    font-size: 26px;
    display: block;
    border-radius: 0 50px 50px 0;
    &#ching, &#chang {
      text-shadow: 0 0 30px darken($primary-colour, 50%);
      font-family: PoetsenOne;
      font-size: 48px;
      background: inherit;
      color: inherit;
    }
    &#ching {
      margin: 50px 0 0 -15px;
    }
    &#chang {
      margin: -20px 0 40px 25px;
    }
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
#right-side {
  width: calc(100vw - 200px);
  margin-left: 200px;
  #content {
    cursor: default;
    width: calc(100% - 65px);
    padding: 15px 25px 15px 40px;
    #topic {
      font-size: 96px;
      font-family: PoetsenOne;
    }
    #line {
      height: 15px;
      width: calc(100% + 30px);
      transform: translateX(-20px);
      margin: 1em 0 50px 0;
      background-color: $primary-colour;
      border-radius: 20px;
    }
    p {
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
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    background-color: $black;
    .column {
      display: flex;
      flex-direction: column;
      color: $white;
      font-family: PoetsenOne;
      text-align: center;
      opacity: 0.5;
      transition-duration: 0.3s;
      &:hover {
        opacity: 1;
      }
      &#copyright {
        cursor: default;
        width: 300px;
        font-size: 18px;
        img {
          width: 150px;
          padding-bottom: 10px;
        }
      }
      .title {
        color: $white;
        cursor: default;
        font-size: 36px;
        margin-bottom: 13px;
      }
      a {
        color: $white;
        font-size: 20px;
        padding-bottom: 4px;
        &#discord-link {
          text-decoration: underline;
          cursor: pointer;
          position: relative;
          #discord-tooltip {
            position: absolute;
            bottom: calc(50% + 10px);
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: $grey;
            color: $black;
            font-size: 15px;
            border-radius: 4px;
            padding: 4px 10px;
            &::after {
              content: "";
              position: absolute;
              top: 100%;
              left: 50%;
              margin-left: -10px;
              border-width: 10px;
              border-style: solid;
              border-color: $grey transparent transparent transparent;
            }
          }
        }
        &:hover {
          color: $primary-colour;
        }
      }
    }
  }
}

@media(max-width: 750px) {
  #nav {
    width: 100vw;
    height: auto;
    a {
      padding: 15px 0 15px 50px;
      margin: 0;
      border-radius: 0;
      &#ching, &#chang {
        display: none;
      }
    }
  }
  #right-side {
    width: 100vw;
    margin: 0;
  }
}
</style>