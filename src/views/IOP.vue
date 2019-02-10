<template>
  <div id="iop">
    <div id="book">Persepolis</div>
    <div id="focus">{{ focusText }}</div>

    <div style="text-align: center;">
      <div v-if="thanks" id="thanks">{{ thankText }}</div>
      <img id="cover" src="@/assets/iop/persepolis.jpg" />
      <br />
      <img src="@/assets/iop/born.jpg" />
      <br />
      <img src="@/assets/iop/mehri.jpg" />
      <img src="@/assets/iop/swing.jpg" />
      <img src="@/assets/iop/jackals.jpg" />
      <br />
      <img src="@/assets/iop/rule6.jpg" />
      <br />
      <img src="@/assets/iop/rule7.jpg" />
      <br />
      <img src="@/assets/iop/rule8.jpg" />
      <img src="@/assets/iop/prophet.jpg" />
      <img src="@/assets/iop/cadillac.jpg" />
      <img src="@/assets/iop/reasons.jpg" />
      <img src="@/assets/iop/threeDimensions.jpg" />
      <img src="@/assets/iop/holyBook.jpg" />
      <img src="@/assets/iop/rule123.jpg" />
      <img id="dialogue" :src="require(`@/assets/iop/${ dialogue }.jpg`)" />
      <br />
      <img src="@/assets/iop/night.jpg" />
      <img src="@/assets/iop/guilty.jpg" />
      <p>The revolution started on January 7th, 1978</p>
      <img src="@/assets/iop/enlighten.jpg" />
      <img src="@/assets/iop/book.jpg" />
      <img src="@/assets/iop/marx.jpg" />
      <p>The Rex Cinema was burnt on August 19<sup>th</sup>, 1978</p>
      <img src="@/assets/iop/cinema.jpg" />
      <img src="@/assets/iop/firemen.jpg" />
      <img src="@/assets/iop/ask.jpg" />
      <img src="@/assets/iop/didNotCome.jpg" />
      <img src="@/assets/iop/king1.jpg" />
      <img src="@/assets/iop/king2.jpg" />
      <img src="@/assets/iop/prince.jpg" />
      <img src="@/assets/iop/prison.jpg" />
      <img src="@/assets/iop/bath.jpg" />
      <img id="speedUp" src="@/assets/iop/mohsen.jpg" />
      <img src="@/assets/iop/siamak.jpg" />
      <img src="@/assets/iop/sister.jpg" />
      <img src="@/assets/iop/anoosh.jpg" />
      <img src="@/assets/iop/out.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IOP",
  data() {
    return {
      focusText: "-Impact of Society On One's Religon",
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
    Array.from(document.getElementsByTagName("img")).forEach((element) => {
      element.addEventListener("load", function() {
        if (parseInt(window.getComputedStyle(element).height) > 700) {
          element.style.height = "600px";
          element.style.width = "auto";
        }
      });
    });
    this.intervalID = setInterval(function() {
      if (!this.pause) {
        this.scroll += 0.25;
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
          clearInterval(this.intervalID);
          document.addEventListener("click", this.end.bind(this));
        } else if (window.scrollY >= document.getElementById("dialogue").offsetTop - 60 && this.flip === false) {
          this.flip = true;
          this.pause = true;
          setTimeout(function() {
            document.getElementById("dialogue").classList.add("flip");
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
                                document.getElementById("dialogue").classList.remove("flip");
                                document.getElementById("dialogue").classList.add("flip-back");
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
        } else if (window.scrollY >= document.getElementById("speedUp").offsetTop) {
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
      Array.from(document.getElementsByTagName("img")).forEach((element) => {
        if (window.innerHeight > element.getClientRects()[0].top + 60){
          element.classList.add("slide-up");
        } else {
          element.classList.remove("slide-up");
        }
      });
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
    color: #00adb5;
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
    margin: 100px 0px 250px 100px;
  }
}
</style>