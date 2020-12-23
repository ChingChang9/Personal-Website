<template>
  <header>
    <div v-if="showHeaderMobile" id="hide-header" @click="returnHeaderMobileStatus(false)"></div>
    <img v-if="!showHeader" id="header-activator" src="@/assets/icons/header.svg" alt="button" @click="returnHeaderMobileStatus(true)" />
    <div v-else id="header" @click="returnHeaderMobileStatus(false)">
      <router-link id="ching" :to="{ name: 'Home' }" draggable="false">Ching</router-link>
      <router-link id="chang" :to="{ name: 'Home' }" draggable="false">Chang</router-link>
      <router-link :to="{ name: 'Home' }" draggable="false">Home</router-link>
      <router-link :to="{ name: 'AboutMe' }" draggable="false">About Me</router-link>
      <router-link :to="{ name: 'Projects' }" draggable="false">Projects</router-link>
      <router-link :to="{ name: 'Blog' }" draggable="false">Blog</router-link>
      <router-link :to="{ name: 'Contact' }" draggable="false">Contact</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true,
      showHeaderMobile: false
    };
  },
  mounted() {
    window.addEventListener("resize", this.returnHeaderStatus);
    this.returnHeaderStatus();
  },
  methods: {
    returnHeaderStatus() {
      this.showHeader = window.innerWidth > 750 || this.showHeaderMobile;
    },
    returnHeaderMobileStatus(show) {
      this.showHeaderMobile = show;
      this.returnHeaderStatus();
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
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
      display: table;
      padding: 0;
      text-shadow: 0 0 30px darken($primary-colour, 50%);
      font-family: PoetsenOne, Arial Black, Impact, sans-serif;
      font-size: 48px;
      background: inherit;
      color: inherit;
    }
    &#ching {
      margin: 65px 20px 15px 5px;
    }
    &#chang {
      margin: -5px 20px 55px 45px;
    }
    &:hover {
      background-color: $black;
    }
  }
}
#header-activator {
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
#hide-header {
  z-index: 4;
  width: 100vw;
  height: 100vh;
  position: fixed;
}

@media (max-width: 750px) {
  #header {
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
}
</style>