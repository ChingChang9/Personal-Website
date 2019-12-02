<template>
  <div id="app">
    <div v-if="$route.name !== 'IOP' && $route.name !== 'HackerTerminal'">
      <MyHeader />
      <div id="right-side">
        <main>
          <transition name="fade" mode="out-in" @enter="enter" @afterEnter="afterEnter" @beforeLeave="beforeLeave">
            <router-view />
          </transition>
        </main>
        <MyFooter />
      </div>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/Header.vue";
import MyFooter from "./components/Footer.vue";
import ogImage from "./assets/pictures/banner-500.jpg";

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: (title) => {
      return title ? `${ title } — Ching Chang's Personal Website` : "Ching Chang's Personal Website";
    },
    meta: [
      { property: "og:image", content: `https://www.chingchang.dev${ ogImage }` }
    ]
  },
  components: { MyHeader, MyFooter },
  data() {
    return {
      previousHeight: 0
    };
  },
  methods: {
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
  font-display: swap;
}
@font-face {
  font-family: Roboto;
  src: url("assets/fonts/Roboto-Bold.ttf");
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: PoetsenOne;
  src: url("assets/fonts/PoetsenOne.ttf");
  font-weight: 600;
  font-display: swap;
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
  font-family: Roboto, Arial, sans-serif;
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

#right-side {
  width: calc(100vw - 200px);
  margin-left: 200px;
  main {
    background:
    radial-gradient($black 3px, transparent 4px),
    radial-gradient($black 3px, transparent 4px),
    linear-gradient($white 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
    $white;
    background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
    background-position: 54px 55px, 0 0, 0 0, 0 0, 0 0;
    background-attachment: fixed;
    cursor: default;
    width: calc(100% - 80px);
    padding: 15px 40px;
    #topic {
      font-size: 96px;
      font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
    }
    #line {
      height: 15px;
      width: 200px;
      margin: 1em 0 50px;
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
}

@media(max-width: 750px) {
  #right-side {
    width: 100vw;
    margin: 0;
  }
}
@media (max-width: 540px) {
  #right-side main {
    #topic {
      font-size: 84px;
    }
    #line {
      width: 170px;
    }
  }
}
@media (max-width: 481px) {
  #right-side main {
    #topic {
      font-size: 72px;
    }
    #line {
      width: 150px;
    }
  }
}
@media (max-width: 422px) {
  #right-side main {
    #topic {
      font-size: 60px;
    }
    #line {
      width: 125px;
      margin-bottom: 35px;
    }
  }
}
@media (max-width: 375px) {
  #right-side main {
    width: calc(100% - 30px);
    padding: 15px;
    #topic {
      font-size: 46px;
    }
    #line {
      width: 100px;
      margin-bottom: 25px;
    }
  }
}
</style>