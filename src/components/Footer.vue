<template>
  <footer>
    <div id="copyright" class="column">
      <div>
        <router-link :to="{ name: 'Home' }">
          <picture>
            <source srcset="@/assets/icons/logo.webp" type="image/webp" />
            <source srcset="@/assets/icons/logo.jpg" type="image/jpeg" />
            <img src="@/assets/icons/logo.jpg" draggable="false" alt="Ching Chang" />
          </picture>
        </router-link>
      </div>
      <div>Ching Chang &copy; 2020 All Rights Reserved</div>
    </div>
    <div class="column">
      <div class="title">Social Links</div>
      <a href="mailto:chingtheprogrammer@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
      <a href="https://www.linkedin.com/in/chingchang9" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://www.instagram.com/chingchang.9" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://github.com/ChingChang9" target="_blank" rel="noopener noreferrer">Github</a>
      <a id="discord-link" @click="copy" @mouseenter="discordName = 'Ching Chang#9870'" @mouseleave="showDiscordTooltip = false; discordName = 'Discord'">
        <span v-if="showDiscordTooltip" id="discord-tooltip">Copied</span>
        {{ discordName }}
      </a>
    </div>
    <div class="column">
      <div class="title">Resources</div>
      <a href="https://letsencrypt.org" target="_blank" rel="noopener noreferrer">Let's Encrypt</a>
      <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>
      <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      discordName: "Discord",
      showDiscordTooltip: false
    };
  },
  methods: {
    copy() {
      const link = document.createElement("textArea");
      link.value = "Ching Chang#9870";
      link.style.fontSize = "18px";
      document.getElementById("discord-link").appendChild(link);
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
      document.getElementById("discord-link").removeChild(link);
      this.showDiscordTooltip = true;
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  background-color: $black;
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: $white;
    font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
    opacity: 0.5;
    transition-duration: 0.3s;
    padding-right: 15px;
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
        border-radius: 50%;
      }
    }
    .title {
      color: $white;
      cursor: default;
      font-size: 36px;
      padding-bottom: 15px;
    }
    a {
      color: $white;
      font-size: 20px;
      margin-bottom: 4px;
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

@media(max-width: 992px) {
  footer {
    flex-direction: column;
    align-items: center;
    .column {
      padding-bottom: 35px;
      &#copyright {
        margin-top: 10px;
      }
      .title {
        padding-bottom: 10px;
      }
    }
  }
}
</style>