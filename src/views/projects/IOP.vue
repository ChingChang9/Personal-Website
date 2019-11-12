<template>
  <div id="iop">
    <div id="book">Persepolis</div>
    <div id="focus">{{ focusText }}</div>

    <div style="text-align: center;">
      <div v-if="thanks" id="thanks">{{ thankText }}</div>
      <picture>
        <source srcset="@/assets/iop/persepolis.webp" type="image/webp" />
        <source srcset="@/assets/iop/persepolis.jpg" type="image/jpeg" />
        <img id="cover" src="@/assets/iop/persepolis.jpg" alt="Persepolis" />
      </picture>
      <br />
      <picture>
        <source srcset="@/assets/iop/born.webp" type="image/webp" />
        <source srcset="@/assets/iop/born.jpg" type="image/jpeg" />
        <img src="@/assets/iop/born.jpg" alt="Persepolis" />
      </picture>
      <br />
      <picture>
        <source srcset="@/assets/iop/mehri.webp" type="image/webp" />
        <source srcset="@/assets/iop/mehri.jpg" type="image/jpeg" />
        <img src="@/assets/iop/mehri.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/swing.webp" type="image/webp" />
        <source srcset="@/assets/iop/swing.jpg" type="image/jpeg" />
        <img src="@/assets/iop/swing.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/jackals.webp" type="image/webp" />
        <source srcset="@/assets/iop/jackals.jpg" type="image/jpeg" />
        <img src="@/assets/iop/jackals.jpg" alt="Persepolis" />
      </picture>
      <br />
      <picture>
        <source srcset="@/assets/iop/rule6.webp" type="image/webp" />
        <source srcset="@/assets/iop/rule6.jpg" type="image/jpeg" />
        <img src="@/assets/iop/rule6.jpg" alt="Persepolis" />
      </picture>
      <br />
      <picture>
        <source srcset="@/assets/iop/rule7.webp" type="image/webp" />
        <source srcset="@/assets/iop/rule7.jpg" type="image/jpeg" />
        <img src="@/assets/iop/rule7.jpg" alt="Persepolis" />
      </picture>
      <br />
      <picture>
        <source srcset="@/assets/iop/rule8.webp" type="image/webp" />
        <source srcset="@/assets/iop/rule8.jpg" type="image/jpeg" />
        <img src="@/assets/iop/rule8.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/prophet.webp" type="image/webp" />
        <source srcset="@/assets/iop/prophet.jpg" type="image/jpeg" />
        <img src="@/assets/iop/prophet.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/cadillac.webp" type="image/webp" />
        <source srcset="@/assets/iop/cadillac.jpg" type="image/jpeg" />
        <img src="@/assets/iop/cadillac.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/reasons.webp" type="image/webp" />
        <source srcset="@/assets/iop/reasons.jpg" type="image/jpeg" />
        <img src="@/assets/iop/reasons.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/three-dimensions.webp" type="image/webp" />
        <source srcset="@/assets/iop/three-dimensions.jpg" type="image/jpeg" />
        <img src="@/assets/iop/three-dimensions.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/holy-book.webp" type="image/webp" />
        <source srcset="@/assets/iop/holy-book.jpg" type="image/jpeg" />
        <img src="@/assets/iop/holy-book.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/rule123.webp" type="image/webp" />
        <source srcset="@/assets/iop/rule123.jpg" type="image/jpeg" />
        <img src="@/assets/iop/rule123.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source :srcset="require(`@/assets/iop/${ dialogue }.webp`)" type="image/webp" />
        <source :srcset="require(`@/assets/iop/${ dialogue }.jpg`)" type="image/jpeg" />
        <img id="dialogue" :src="require(`@/assets/iop/${ dialogue }.jpg`)" alt="Persepolis" />
      </picture>
      <br />
      <picture>
        <source srcset="@/assets/iop/night.webp" type="image/webp" />
        <source srcset="@/assets/iop/night.jpg" type="image/jpeg" />
        <img src="@/assets/iop/night.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/guilty.webp" type="image/webp" />
        <source srcset="@/assets/iop/guilty.jpg" type="image/jpeg" />
        <img src="@/assets/iop/guilty.jpg" alt="Persepolis" />
      </picture>
      <p>The revolution started on January 7th, 1978</p>
      <picture>
        <source srcset="@/assets/iop/enlighten.webp" type="image/webp" />
        <source srcset="@/assets/iop/enlighten.jpg" type="image/jpeg" />
        <img src="@/assets/iop/enlighten.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/book.webp" type="image/webp" />
        <source srcset="@/assets/iop/book.jpg" type="image/jpeg" />
        <img src="@/assets/iop/book.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/marx.webp" type="image/webp" />
        <source srcset="@/assets/iop/marx.jpg" type="image/jpeg" />
        <img src="@/assets/iop/marx.jpg" alt="Persepolis" />
      </picture>
      <p>The Rex Cinema was burnt on August 19<sup>th</sup>, 1978</p>
      <picture>
        <source srcset="@/assets/iop/cinema.webp" type="image/webp" />
        <source srcset="@/assets/iop/cinema.jpg" type="image/jpeg" />
        <img src="@/assets/iop/cinema.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/marx.webp" type="image/webp" />
        <source srcset="@/assets/iop/marx.jpg" type="image/jpeg" />
        <img src="@/assets/iop/marx.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/firemen.webp" type="image/webp" />
        <source srcset="@/assets/iop/firemen.jpg" type="image/jpeg" />
        <img src="@/assets/iop/firemen.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/ask.webp" type="image/webp" />
        <source srcset="@/assets/iop/ask.jpg" type="image/jpeg" />
        <img src="@/assets/iop/ask.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/did-not-come.webp" type="image/webp" />
        <source srcset="@/assets/iop/did-not-come.jpg" type="image/jpeg" />
        <img src="@/assets/iop/did-not-come.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/king1.webp" type="image/webp" />
        <source srcset="@/assets/iop/king1.jpg" type="image/jpeg" />
        <img src="@/assets/iop/king1.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/king2.webp" type="image/webp" />
        <source srcset="@/assets/iop/king2.jpg" type="image/jpeg" />
        <img src="@/assets/iop/king2.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/prince.webp" type="image/webp" />
        <source srcset="@/assets/iop/prince.jpg" type="image/jpeg" />
        <img src="@/assets/iop/prince.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/prison.webp" type="image/webp" />
        <source srcset="@/assets/iop/prison.jpg" type="image/jpeg" />
        <img src="@/assets/iop/prison.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/bath.webp" type="image/webp" />
        <source srcset="@/assets/iop/bath.jpg" type="image/jpeg" />
        <img src="@/assets/iop/bath.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/mohsen.webp" type="image/webp" />
        <source srcset="@/assets/iop/mohsen.jpg" type="image/jpeg" />
        <img id="speedUp" src="@/assets/iop/mohsen.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/siamak.webp" type="image/webp" />
        <source srcset="@/assets/iop/siamak.jpg" type="image/jpeg" />
        <img src="@/assets/iop/siamak.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/sister.webp" type="image/webp" />
        <source srcset="@/assets/iop/sister.jpg" type="image/jpeg" />
        <img src="@/assets/iop/sister.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/anoosh.webp" type="image/webp" />
        <source srcset="@/assets/iop/anoosh.jpg" type="image/jpeg" />
        <img src="@/assets/iop/anoosh.jpg" alt="Persepolis" />
      </picture>
      <picture>
        <source srcset="@/assets/iop/out.webp" type="image/webp" />
        <source srcset="@/assets/iop/out.jpg" type="image/jpeg" />
        <img src="@/assets/iop/out.jpg" alt="Persepolis" />
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  name: "IOP",
  metaInfo: {
    title: "IB IOP Example",
    titleTemplate: "%s – Ching Chang",
    meta: [
      { name: "description", content: "An IB internal assessment that uses the graphic novel Persepolis by Marjane Satrapi to discuss the impact of society on one's religion." },
      { name: "keywords", content: "Ching, Chang, IB, IOP, Persepolis, Marjane Satrapi, example, presentation, creative, good" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/iop" }
    ]
  },
  data() {
    return {
      focusText: "—Impact of Society On One's Religon",
      thanks: false,
      thankText: "Before I end this...",
      pause: true,
      scroll: 0,
      flip: false,
      audio: new Audio(require("@/assets/iop/drum.mp3")),
      intervalID: 0,
      dialogue: "rules"
    };
  },
  watch: {
    scroll() {
      window.scrollTo(0, this.scroll);
    }
  },
  mounted() {
    alert("Script of the presentation is in the console");
    console.log("Link to the script:");
    console.log("https://docs.google.com/document/d/1rQxs_xDWk2TnKDuzdq7Mx_Pa_GSSL6gs6s0e_sy_4y0/edit?usp=sharing");
    document.addEventListener("click", this.togglePause);
    document.addEventListener("scroll", this.animateScroll);
    this.animateScroll();
    for (let index = 0; index < document.querySelectorAll("img").length; index++) {
      document.querySelectorAll("img")[index].addEventListener("load", function() {
        if (parseInt(window.getComputedStyle(document.querySelectorAll("img")[index]).height) > 700) {
          document.querySelectorAll("img")[index].style.height = "600px";
          document.querySelectorAll("img")[index].style.width = "auto";
        }
      })
    }
    this.intervalID = setInterval(function() {
      if (!this.pause) {
        this.scroll += 0.25;
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
          clearInterval(this.intervalID);
          document.addEventListener("click", this.end.bind(this));
        } else if (window.scrollY >= document.querySelector("#dialogue").offsetTop - 60 && this.flip === false) {
          this.flip = true;
          this.pause = true;
          setTimeout(function() {
            document.querySelector("#dialogue").classList.add("flip");
            setTimeout(function() {
              this.dialogue = "dialogue1";
              setTimeout(function() {
                this.dialogue = "dialogue";
                setTimeout(function() {
                  this.dialogue = "dialogue2";
                  setTimeout(function() {
                    this.dialogue = "dialogue";
                    setTimeout(function() {
                      this.dialogue = "dialogue3";
                      setTimeout(function() {
                        this.dialogue = "dialogue";
                        setTimeout(function() {
                          this.dialogue = "dialogue3";
                          setTimeout(function() {
                            this.dialogue = "dialogue";
                            setTimeout(function() {
                              this.dialogue = "dialogue4";
                              setTimeout(function() {
                                document.querySelector("#dialogue").classList.remove("flip");
                                document.querySelector("#dialogue").classList.add("flip-back");
                                setTimeout(function() {
                                  this.dialogue = "rules";
                                  setTimeout(function() {
                                    this.pause = false;
                                  }.bind(this), 1000);
                                }.bind(this), 695);
                              }.bind(this), 3000);
                            }.bind(this), 3500);
                          }.bind(this), 500);
                        }.bind(this), 14000);
                      }.bind(this), 800);
                    }.bind(this), 16000);
                  }.bind(this), 6000);
                }.bind(this), 2500);
              }.bind(this), 8500);
            }.bind(this), 695);
          }.bind(this), 30000);
        } else if (window.scrollY >= document.querySelector("#speedUp").offsetTop) {
          this.scroll += 0.75;
        }
      }
    }.bind(this), 1);
  },
  beforeDestroy() {
    clearInterval(this.intervalID);
    document.removeEventListener("click", this.togglePause);
    document.removeEventListener("scroll", this.animateScroll);
    document.removeEventListener("click", this.end.bind(this));
  },
  methods: {
    togglePause() {
      this.pause = !this.pause;
    },
    animateScroll() {
      for (let index = 0; index < document.querySelectorAll("img").length; index++) {
        if (window.innerHeight > document.querySelectorAll("img")[index].getClientRects()[0].top + 60){
          document.querySelectorAll("img")[index].classList.add("slide-up");
        } else {
          document.querySelectorAll("img")[index].classList.remove("slide-up");
        }
      }
      for (let index = 0; index < document.querySelectorAll("p").length; index++) {
        if (window.innerHeight > document.querySelectorAll("p")[index].getClientRects()[0].top + 60){
          document.querySelectorAll("p")[index].classList.add("slide-up");
        } else {
          document.querySelectorAll("p")[index].classList.remove("slide-up");
        }
      }
    },
    end() {
      document.removeEventListener("click", this.end.bind(this));
      this.intervalID = setInterval(function() {
        if (this.scroll === 0) {
          clearInterval(this.intervalID);
        } else {
          this.scroll -= document.body.offsetHeight / 200;
        }
      }.bind(this), 10)
      this.thanks = true;
      setTimeout(function() {
        this.focusText = "Per cent p lease";
        setTimeout(function() {
          this.audio.play();
          setTimeout(function() {
            this.thankText = "Thank You";
          }.bind(this), 3000);
        }.bind(this), 1000);
      }.bind(this), 11000);
    }
  }
}
</script>

<style lang="scss" scoped>
#iop {
  user-select: none;
  overflow: hidden;
  margin: 10px 100px;
  #book {
    font-size: 100px;
    margin-top: 30px;
  }
  #focus {
    color: #019ba2;
    font-size: 60px;
    margin-top: 25px;
    text-indent: 130px;
  }
  #cover {
    margin-top: 20px;
    width: 25vw;
    transition: 0s;
  }
  p {
    font-size: 57px;
    opacity: 0;
    transform: translateY(80px);
    transition: 1s;
  }
  img {
    width: 900px;
    transition: 1s;
    opacity: 0;
    transform: translateY(80px);
    margin-bottom: 10px;
  }
  .slide-up {
    opacity: 1;
    transform: translateY(0px);
  }

  #dialogue {
    transform: rotateY(0deg);
    transition-duration: 1.5s;
    &.flip {
      transform: rotateY(360deg);
    }
    &.flip-back {
      transform: rotateY(0deg);
    }
  }
  #thanks {
    font-size: 120px;
    float: center;
    margin: 100px 0 250px 100px;
  }
}
</style>