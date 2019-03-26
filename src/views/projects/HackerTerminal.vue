<template>
  <div v-if="hacking" id="hack">
    <div v-show="denied" id="command">Command Denied</div>

    <div>Last Login: <Type v-if="loggedIn" :text="currentTime" @triggered="nextLine" /></div>
    <Type v-if="locating" text="Locating IP Location" :load="0" @triggered="nextLine" />
    <Type v-if="located" text="IP Address Located" @triggered="nextLine" />
    <Type v-if="showIP" :text="ip" @triggered="nextLine" />
    <Type v-if="showCountry" :text="`Country: ${ country }`" @triggered="nextLine" />
    <Type v-if="showCity" :text="`City: ${ city }, ${ state }`" @triggered="nextLine" />
    <Type v-if="decrypting" text="Decrypting Configuration" :load="15" @triggered="nextLine" />
    <Type v-if="requesting" text="Requesting Access to Local Server" :load="10" @triggered="nextLine" />
    <Type v-if="access" text="Access Granted" @triggered="nextLine" />
    <Type v-if="initiating" text="Initiating Portals" :load="20" @triggered="nextLine" />
    <Type v-if="crawler" text="Crawler Activated" @triggered="nextLine" />
    <Type v-if="crawling" text="Crawling Databases" :load="30" @triggered="nextLine" />
    <Type v-if="extracting" text="Extracting Hard Drive" :load="60" @triggered="nextLine" />
    <Type v-if="downloading" text="Downloading" :load="80" @triggered="nextLine" />
    <Type v-if="downloaded" text="Files Downloaded" @triggered="nextLine" />
    <Type v-if="loggedOut" text="Ching Chang has logged out" @triggered="nextLine" />
    <Type v-if="terminated" text="Crawler Terminated" @triggered="nextLine" />
    <div v-show="flash" id="cursor">.</div>
  </div>
</template>

<script>
import Type from "@/components/TypeWriter.vue";
export default {
  name: "HackerTerminal",
  components: { Type },
  data() {
    return {
      ip: "", city: "", state: "", country: "", xhr: new XMLHttpRequest(),
      loggedIn: false, locating: false, located: false, showIP: false, showCountry: false, showCity: false,
      decrypting: false, requesting: false, access: false, initiating: false, crawler: false, crawling: false,
      extracting: false, downloading: false, downloaded: false, loggedOut: false, terminated: false,
      now: new Date,
      denied: false,
      flash: false,
      cursorInterval: 0,
      titleInterval: 0,
      hacking: true
    };
  },
  computed: {
    currentTime() {
      let day, month, date, hour, minute, second;
      switch (this.now.getDay()) {
        case 0: day = "Sun"; break;
        case 1: day = "Mon"; break;
        case 2: day = "Tue"; break;
        case 3: day = "Wed"; break;
        case 4: day = "Thu"; break;
        case 5: day = "Fri"; break;
        default: day = "Sat";
      }
      switch (this.now.getMonth()) {
        case 0: month = "Jan"; break;
        case 1: month = "Feb"; break;
        case 2: month = "Mar"; break;
        case 3: month = "Apr"; break;
        case 4: month = "May"; break;
        case 5: month = "Jun"; break;
        case 6: month = "Jul"; break;
        case 7: month = "Aug"; break;
        case 8: month = "Sep"; break;
        case 9: month = "Oct"; break;
        case 10: month = "Nov"; break;
        default: month = "Dec";
      }
      this.now.getDate() < 10 ? date = ` ${ this.now.getDate() }` : date = this.now.getDate();
      this.now.getHours() < 10 ? hour = `0${ this.now.getHours() }` : hour = this.now.getHours();
      this.now.getMinutes() < 10 ? minute = `0${ this.now.getMinutes() }` : minute = this.now.getMinutes();
      this.now.getSeconds() < 10 ? second = `0${ this.now.getSeconds() }` : second = this.now.getSeconds();
      return `${ day } ${ month } ${ date } ${ hour }:${ minute }:${ second }`;
    }
  },
  mounted() {
    this.titleInterval = setInterval(function() {
      document.querySelector("title").textContent === "Redirecting....." ? document.querySelector("title").textContent = "Redirecting" :
      document.querySelector("title").textContent === "Redirecting" ? document.querySelector("title").textContent = "Redirecting." :
      document.querySelector("title").textContent === "Redirecting." ? document.querySelector("title").textContent = "Redirecting.." :
      document.querySelector("title").textContent === "Redirecting.." ? document.querySelector("title").textContent = "Redirecting..." :
      document.querySelector("title").textContent === "Redirecting..." ? document.querySelector("title").textContent = "Redirecting...." :
      document.querySelector("title").textContent = "Redirecting.....";
    }, 300);
    alert("Virus detected, please close the tab and reboot your computer\nContact customer service for support: (613) 555-0186");
    this.xhr.open("GET", "https://geoip-db.com/jsonp/");
    this.xhr.send();
    this.xhr.onload = function() {
      this.ip = this.xhr.responseText.slice(this.xhr.responseText.indexOf("IPv4") + 7, this.xhr.responseText.indexOf("state") - 3);
      this.country = this.xhr.responseText.slice(this.xhr.responseText.indexOf("country_name") + 15, this.xhr.responseText.indexOf("city") - 3);
      this.city = this.xhr.responseText.slice(this.xhr.responseText.indexOf("city") + 7, this.xhr.responseText.indexOf("postal") - 3);
      this.state = this.xhr.responseText.slice(this.xhr.responseText.indexOf("state") + 8, this.xhr.responseText.indexOf("}") - 1);
    }.bind(this);
    setTimeout(function() {
      this.loggedIn = true;
    }.bind(this), 1400);
    this.cursorInterval = setInterval(function() {
      this.flash = !this.flash;
    }.bind(this), 400);
    document.addEventListener("keydown", this.showCommand);
    document.addEventListener("keyup", this.hideCommand);
  },
  beforeDestroy() {
    clearInterval(this.titleInterval);
    clearInterval(this.cursorInterval);
    document.removeEventListener("keydown", this.showCommand);
    document.removeEventListener("keyup", this.hideCommand);
  },
  methods: {
    nextLine(pause) {
      if (this.terminated) {
        clearInterval(this.cursorInterval);
        this.flash = false;
        setTimeout(function() {
          this.hacking = false;
          setTimeout(function() {
            this.$router.replace({ name: 'Projects' })
          }.bind(this), 3000);
        }.bind(this), 2500);
      }
      setTimeout(function() {
        !this.locating ? this.locating = true :
        !this.located ? this.located = true :
        !this.showIP ? this.showIP = true :
        !this.showCountry ? this.showCountry = true :
        !this.showCity ? this.showCity = true :
        !this.decrypting ? this.decrypting = true :
        !this.requesting ? this.requesting = true :
        !this.access ? this.access = true :
        !this.initiating ? this.initiating = true :
        !this.crawler ? this.crawler = true :
        !this.crawling ? this.crawling = true :
        !this.extracting ? this.extracting = true :
        !this.downloading ? this.downloading = true :
        !this.downloaded ? this.downloaded = true :
        !this.loggedOut ? this.loggedOut = true :
        this.terminated = true;
      }.bind(this), pause);
    },
    showCommand() {
      this.denied = true;
    },
    hideCommand() {
      this.denied = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: OCR A Std;
  src: url("../../assets/fonts/OCRAStd.ttf");
}

#hack {
  height: calc(100vh - 20px);
  user-select: none;
  cursor: text;
  background-color: black;
  color: #20c20e;
  font-family: OCR A Std;
  font-size: 20px;
  padding: 10px;
  div {
    display: inline;
  }
  #cursor {
    background-color: #20c20e;
  }
  #command {
    position: absolute;
    top: calc(50vh - 150px);
    left: calc(30vw - 27px);
    z-index: 1;
    border: 7px solid #20c20e;
    background-color: black;
    color: white;
    width: 40vw;
    padding: 100px 20px;
    font-size: 40px;
    text-align: center;
  }
}
</style>