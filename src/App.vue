<template>
  <div id="app">
    <div v-if="$route.name !== 'IOP' && $route.name !== 'HackerTerminal'">
      <MyHeader></MyHeader>
      <div id="right-side">
        <main>
          <transition name="fade" mode="out-in" @enter="enter" @afterEnter="afterEnter" @beforeLeave="beforeLeave">
            <router-view />
          </transition>
        </main>
        <MyFooter></MyFooter>
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

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s – Ching Chang's Personal Website"
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
    width: calc(100% - 65px);
    padding: 15px 25px 15px 40px;
    #topic {
      font-size: 96px;
      font-family: PoetsenOne, Arial Black, Impact, sans-serif;
    }
    #line {
      height: 15px;
      width: 200px;
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
}

@media(max-width: 750px) {
  #right-side {
    width: 100vw;
    margin: 0;
  }
}
@media (max-width: 540px) {
  #right-side main #topic {
    font-size: 84px;
  }
}
@media (max-width: 481px) {
  #right-side main #topic {
    font-size: 72px;
  }
}
@media (max-width: 422px) {
  #right-side main #topic {
    font-size: 60px;
  }
}
</style>