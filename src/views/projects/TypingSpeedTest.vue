<template>
  <div>
    <div id="topic">Typing Speed Test</div>
    <div id="line"></div>

    <div id="top" class="flip">
      <div v-if="reveal" id="subject">{{ subject }}</div>
      <div v-if="reveal" id="wrong">Wrong</div>
      <div v-else-if="seconds > 0" id="timer">{{ seconds }}</div>
      <div v-else-if="seconds === 0" id="timer">Finish up your last word</div>
      <div v-if="seconds >= 0 && !reveal" id="restart" @click="restart">Restart</div>
      <div v-else-if="seconds < 0 && !reveal" id="restart" style="font-size: 30px;" @click="restart">Try Again</div>
    </div>
    <div id="random-words" class="flip">
      <div v-if="solved">
        <div>You are the first person to solve all the puzzles!</div>
        <div>
          If you also go to Lillian Osborne, email
          <a href="mailto:chingtheprogrammer@icloud.com?subject=Solved the Puzzles!&body=i_l9Bpj#_Z-Y*SzpYOOqn%v!Zuxyf96">chingtheprogrammer@icloud.com</a>
          with the code in the link and your name to meet up with me so I can give you 5 dollars!
          (You can still email me if you don't go to Lillian Osborne, but I won't be able to give you 5 dollars)
        </div>
      </div>
      <div v-else-if="reveal">
        {{ question }}
      </div>
      <div v-else-if="seconds >= -1">
        <div v-for="word in words">
          <span class="word">
            <span v-for="letter in word" class="letter">{{ letter }}</span>
          </span>
          <span>&nbsp;</span>
        </div>
      </div>
      <div v-else-if="seconds < -1">
        <p>CPM: {{ cpm }}</p>
        <p style="margin-bottom: 0px;">WPM: {{ Math.round(cpm / 5) }}</p>
        <div v-if="Object.keys(incorrect).length !== 0">
          <p>Your CPM could have been {{ cpm + missed }}, but</p>
          <p v-for="(typed, correct) in incorrect">
            <template v-if="typed !== ''">
              Instead of {{ correct }}, you typed {{ typed }}
            </template>
            <template v-else>
              You skipped the word {{ correct }}
            </template>
          </p>
        </div>
        <div v-else>
          <p>Congratulations! You didn't make any mistakes!</p>
        </div>
      </div>
    </div>
    <input v-if="seconds >= 0" id="typing-box" v-model="typed" placeholder="Start typing here" spellcheck="false" autocomplete="off" />

    <div v-if="seconds < -1" id="graph">
      <p>Your CPM during the 60 seconds span</p>
      <div>
        <img draggable="false" :src="`https://image-charts.com/chart?cht=lc&chd=t:0,${graph}&chs=999x480&chco=00ADB5&chg=1,1&chds=a&chxt=x&chxl=0:|0|5|10|15|20|25|30|35|40|45|50|55|60|65|70&chls=3`" />
      </div>
    </div>

    <div id="customization">
      <label for="font">Font: </label>
      <select id="fonts" v-model="font">
         <option value="Andale Mono">Andale</option>
         <option value="Courier">Courier</option>
         <option value="Courier New">Courier New</option>
         <option value="Letter Gothic Std Medium">Letter Gothic Std Medium</option>
         <option value="Menlo">Menlo (defult)</option>
         <option value="Monaco">Monaco</option>
         <option value="OCR A Std">OCR A Std</option>
         <option value="Orator Std">Orator Std</option>
         <option value="Poetsen One">Poetsen One</option>
         <option value="Optima">Optima</option>
      </select>
      <div style="display: inline-block;">
        <label for="word-space">Word Space: {{ wordSpaceFiller }}{{ wordSpace }}</label>
        <input id="word-space" v-model="wordSpace" class="slider" type="range" min="0" max="30" />
      </div>
      <div style="display: inline-block;">
        <label for="letter-space">Letter Space: {{ letterSpaceFiller }}{{ letterSpace }}</label>
        <input id="letter-space" v-model="letterSpace" class="slider" type="range" min="0" max="20" />
      </div>
      <div id="bold" @click="toggleBold">Bold</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypingSpeedTest",
  data() {
    return {
      words: ["contain", "small", "moon", "produce", "area", "bed", "hot", "let",
      "idea", "part", "has", "keep", "three", "want", "blue", "were", "fire", "force",
      "turn", "did", "of", "she", "there", "out", "ten", "course", "at", "ease", "an",
      "world", "second", "press", "why", "page", "laugh", "early", "thought", "usual",
      "for", "busy", "mark", "cause", "hard", "see", "wonder", "carry", "make", "are",
      "place", "teach", "heard", "correct", "water", "cross", "was", "which", "found",
      "thing", "question", "stood", "other", "since", "better", "and", "they", "mean",
      "some", "been", "came", "king", "word", "differ", "people", "toward", "against",
      "power", "city", "certain", "above", "tree", "foot", "perhaps", "well", "ready",
      "wind", "short", "every", "plan", "begin", "something", "fish", "eight", "from",
      "happen", "so", "inch", "deep", "eat", "watch", "home", "more", "great", "land",
      "between", "good", "what", "pass", "he", "go", "serve", "order", "knew", "made",
      "age", "everything", "lead", "it", "him", "end", "is", "bring", "your", "still",
      "class", "tell", "hundred", "true", "point", "study", "back", "problem", "cold",
      "use", "free", "face", "map", "read", "rock", "head", "listen", "money", "this",
      "also", "heat", "distant", "our", "remember", "form", "animal", "final", "left",
      "special", "year", "fact", "several", "right", "hand", "could", "round", "body",
      "vowel", "together", "dog", "pull", "put", "we", "run", "next", "ship", "light",
      "drive", "even", "rule", "far", "high", "do", "oh", "friend", "cry", "mountain",
      "yes", "rain", "state", "sit", "half", "wood", "among", "unit", "travel", "men",
      "hear", "whole", "got", "air", "many", "might", "nothing", "notice", "thousand",
      "never", "piece", "don't", "with","typing", "should", "that", "noun", "mineral",
      "sentence", "find", "done", "call", "love", "feet", "talk", "near", "in", "one",
      "then", "life", "when", "seven", "beauty", "write", "two", "play", "base", "as",
      "story", "told", "said", "answer", "than", "pattern", "brought", "will", "last",
      "decide", "red", "quick", "boy", "those", "sure", "test", "all", "port", "nine",
      "such", "real", "work", "check", "may", "learn", "possible", "until", "measure",
      "side", "green", "colour", "open", "how", "but", "must", "hour", "gave", "fine",
      "voice", "sleep", "be", "too", "rest", "take", "write", "reach", "hint", "boat",
      "movie", "amount", "monster", "defeat", "ocean", "heart", "sea", "text", "hero",
      "welcome", "aren't", "move", "isn't", "six", "solve", "much", "forest", "shape",
      "shift", "board", "store", "cute", "smart", "chat", "sing", "piano", "history"],
      line: 0,
      currentWord: 0,
      skipped: 0,
      cpm: 0,
      missed: 0,
      seconds: 60,
      intervalID: 0,
      ching: 0,
      incorrect: {},
      graph: "",
      font: "Menlo",
      wordSpace: 9,
      wordSpaceFiller: "0",
      letterSpace: 2,
      letterSpaceFiller: "0",
      typed: "",
      reveal: false,
      subject: "English 20",
      question: String,
      wrong: false,
      solved: false
    };
  },
  computed: {
    typedWord() {
      var array = this.typed.split(" ");
      while (array[0] === "") {
        array = array.splice(1, array.length);
      }
      return array;
    }
  },
  watch: {
    font() {
      localStorage.font = this.font;
      this.applyFont();
    },
    wordSpace() {
      localStorage.wordSpace = this.wordSpace;
      this.applyWordSpace();
      if (this.wordSpace < 10) {
        this.wordSpaceFiller = "0";
      } else {
        this.wordSpaceFiller = "";
      }
    },
    letterSpace() {
      localStorage.letterSpace = this.letterSpace;
      this.applyLetterSpace();
      if (this.letterSpace < 10) {
        this.letterSpaceFiller = "0";
      } else {
        this.letterSpaceFiller = "";
      }
    },
    typed() {
      if (this.typed.replace(/\s/g, "") && this.typed[this.typed.length - 1] === " ") {
        this.nextWord();
      } else {
        this.letterColours();
      }
    },
    line() {
      var id = setInterval(function() {
        if (document.getElementById("random-words").scrollTop < this.line) {
          document.getElementById("random-words").scrollTop += 6;
        } else {
          clearInterval(id);
        }
      }.bind(this), 10);
    },
    ching() {
      if (this.ching === 9 && document.getElementsByClassName("correct").length === 0 && document.getElementsByClassName("incorrect").length === 9) {
        this.question1();
      }
    }
  },
  mounted() {
    if (localStorage.font) {
      this.font = localStorage.font;
    }
    if (localStorage.wordSpace) {
      this.wordSpace = localStorage.wordSpace;
    }
    if (localStorage.letterSpace) {
      this.letterSpace = localStorage.letterSpace;
    }
    this.restart();
    window.addEventListener("resize", this.findLastWords);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.findLastWords);
    if (document.getElementById("typing-box")) {
      document.getElementById("typing-box").removeEventListener("keyup", this.startTime);
      document.getElementById("typing-box").removeEventListener("keyup", this.stopTime);
    }
  },
  methods: {
    restart() {
      this.words = this.shuffle(this.words);
      Array.from(document.getElementsByClassName("flip")).forEach((element) => {
        element.style.transform = "rotateY(0deg)";
      });
      Array.from(document.getElementsByClassName("correct")).forEach((element) => {
        element.classList.remove("correct");
      });
      Array.from(document.getElementsByClassName("incorrect")).forEach((element) => {
        element.classList.remove("incorrect");
      });
      Array.from(document.getElementsByClassName("correct-letter")).forEach((element) => {
        element.classList.remove("correct-letter");
      });
      Array.from(document.getElementsByClassName("wrong-letter")).forEach((element) => {
        element.classList.remove("wrong-letter");
      });
      document.getElementById("random-words").style.height = "180px";
      document.getElementById("random-words").style.lineHeight = "2";
      document.getElementById("random-words").style.marginBottom = "0px";
      this.line = this.currentWord = this.skipped = this.cpm = this.missed = this.ching = 0;
      clearInterval(this.intervalID);
      this.seconds = 60;
      this.incorrect = {};
      this.graph = this.typed = "";
      this.$nextTick(function() {
        if (document.getElementById("current-word")) {
          document.getElementById("current-word").removeAttribute("id");
        }
        document.getElementsByClassName("word")[0].setAttribute("id", "current-word");
        document.getElementById("typing-box").setAttribute("placeholder", "Start typing here");
        this.applyFont();
        this.applyWordSpace();
        this.applyLetterSpace();
        this.findLastWords();
        document.getElementById("typing-box").removeEventListener("keyup", this.stopTime);
        document.getElementById("typing-box").removeEventListener("keyup", this.startTime);
        document.getElementById("typing-box").addEventListener("keyup", this.startTime);
      });
    },
    findLastWords() {
      var lastTop = document.getElementsByClassName("word")[0].getClientRects()[0].top;
      var currentTop = 0;
      Array.from(document.getElementsByClassName("last")).forEach((element) => {
        element.classList.remove("last");
      });
      for (var id = 0; id < document.getElementsByClassName("word").length; id++) {
        currentTop = document.getElementsByClassName("word")[id].getClientRects()[0].top;
        if (currentTop > lastTop) {
          document.getElementsByClassName("word")[id].parentElement.previousSibling.firstChild.classList.add("last");
          lastTop = currentTop;
        }
      }
      document.getElementsByClassName("last")[0].classList.remove("last");
    },
    nextWord() {
      if (this.reveal) {
        switch (this.subject) {
          case "English 20":
            if (this.typedWord[0] === "England") {
              this.question2();
            } else {
              document.getElementById("wrong").style.visibility = "visible";
              setTimeout(function() {
                document.getElementById("wrong").style.visibility = "hidden";
              }, 500);
            }
            break;
          case "Chemistry 20":
            if (this.typedWord[0] === "25%") {
              this.question3();
            } else {
              document.getElementById("wrong").style.visibility = "visible";
              setTimeout(function() {
                document.getElementById("wrong").style.visibility = "hidden";
              }, 500);
            }
            break;
          case "Social 20":
            if (this.typedWord[0] === "21") {
              this.question4();
            } else {
              document.getElementById("wrong").style.visibility = "visible";
              setTimeout(function() {
                document.getElementById("wrong").style.visibility = "hidden";
              }, 500);
            }
            break;
          case "Math 2019":
            if (this.typedWord[0] === "3") {
              this.revealCode();
            } else {
              document.getElementById("wrong").style.visibility = "visible";
              setTimeout(function() {
                document.getElementById("wrong").style.visibility = "hidden";
              }, 500);
            }
            break;
        }
      } else {
        this.skipped = 0;
        if (this.typedWord[0] === document.getElementById("current-word").textContent) {
          document.getElementById("current-word").classList.add("correct");
          this.cpm += document.getElementById("current-word").textContent.length + 1;
        } else if (this.typedWord[0] === document.getElementById("current-word").parentElement.nextElementSibling.firstChild.textContent) {
          document.getElementById("current-word").classList.add("incorrect");
          this.incorrect[document.getElementById("current-word").textContent] = "";
          document.getElementById("current-word").parentElement.nextElementSibling.firstChild.classList.add("correct");
          this.cpm += document.getElementById("current-word").parentElement.nextElementSibling.firstChild.textContent.length + 1;
          if (document.getElementById("current-word").parentElement.nextElementSibling.firstChild.classList.contains("last")) {
            this.line += 60;
          }
          this.skipped = 1;
        } else if (this.typedWord[0] === document.getElementById("current-word").parentElement.nextElementSibling.nextElementSibling.firstChild.textContent) {
          document.getElementById("current-word").classList.add("incorrect");
          this.incorrect[document.getElementById("current-word").textContent] = "";
          document.getElementById("current-word").parentElement.nextElementSibling.firstChild.classList.add("incorrect");
          this.incorrect[document.getElementById("current-word").parentElement.nextElementSibling.firstChild.textContent] = "";
          document.getElementById("current-word").parentElement.nextElementSibling.nextElementSibling.firstChild.classList.add("correct");
          this.cpm += document.getElementById("current-word").parentElement.nextElementSibling.nextElementSibling.firstChild.textContent.length + 1;
          if (document.getElementById("current-word").parentElement.nextElementSibling.firstChild.classList.contains("last")) {
            this.line += 60;
          }
          this.skipped = 2;
        } else {
          document.getElementById("current-word").classList.add("incorrect");
          this.incorrect[document.getElementById("current-word").textContent] = this.typedWord[0];
          this.missed += document.getElementById("current-word").textContent.length + 1;
          if (this.typedWord[0] === "Ching") {
            this.ching++;
          }
        }
        if (document.getElementById("current-word").classList.contains("last")) {
          this.line += 60;
        }
        Array.from(document.getElementById("current-word").children).forEach((element) => {
          element.classList.remove("correct-letter");
          element.classList.remove("wrong-letter");
        });
        document.getElementById("current-word").removeAttribute("id");
        this.currentWord += 1 + this.skipped;
        document.getElementsByClassName("word")[this.currentWord].setAttribute("id", "current-word");
      }
      this.typed = this.typedWord[1];
    },
    letterColours() {
      for (var i = 0; i < document.getElementById("current-word").textContent.length; i++) {
        document.getElementById("current-word").getElementsByClassName("letter")[i].classList.remove("correct-letter");
        document.getElementById("current-word").getElementsByClassName("letter")[i].classList.remove("wrong-letter");
        if (this.typed.replace(/\s/g, "").length > document.getElementById("current-word").textContent.length) {
          document.getElementById("current-word").getElementsByClassName("letter")[i].classList.add("wrong-letter");
        } else if (this.typed.replace(/\s/g, "")[i] === document.getElementById("current-word").textContent[i]) {
          document.getElementById("current-word").getElementsByClassName("letter")[i].classList.add("correct-letter");
        } else if (this.typed.replace(/\s/g, "")[i] !== undefined && this.typed[i] !== document.getElementById("current-word").textContent[i]) {
          document.getElementById("current-word").getElementsByClassName("letter")[i].classList.add("wrong-letter");
        }
      }
    },
    startTime(event) {
      if (event.which !== 16 && event.which !== 17 && event.which !== 18 && event.which !== 91 && event.which !== 93) {
        document.getElementById("typing-box").removeAttribute("placeholder");
        this.intervalID = setInterval(function() {
          if (this.seconds > 0) {
            this.seconds--;
            this.graph += `${Math.round(this.cpm * 60 / (60 - this.seconds))},`;
            if (this.seconds === 0) {
              clearInterval(this.intervalID);
              document.getElementById("typing-box").addEventListener("keyup", this.stopTime);
            }
          }
        }.bind(this), 1000);
        document.getElementById("typing-box").removeEventListener("keyup", this.startTime);
      }
    },
    stopTime(event) {
      document.getElementById("typing-box").addEventListener("keyup", this.stopTime);
      if (event.which === 32) {
        this.seconds--;
        Array.from(document.getElementsByClassName("flip")).forEach((element) => {
          element.style.transitionDuration = "1.5s";
          document.getElementById("random-words").style.marginBottom = "15px";
          element.style.transform = "rotateY(360deg)";
        });
        setTimeout(function() {
          this.seconds--;
          this.graph += this.cpm;
          Array.from(document.getElementsByClassName("flip")).forEach((element) => {
            element.style.transitionDuration = "0s";
          });
          document.getElementById("random-words").style.height = "auto";
          document.getElementById("random-words").style.lineHeight = "0.5";
        }.bind(this), 1300);
      }
    },
    applyFont() {
      document.getElementById("random-words").style.fontFamily = this.font;
      document.getElementById("typing-box").style.fontFamily = this.font;
      document.getElementById("bold").style.fontFamily = this.font;
      document.getElementById("typing-box").focus();
    },
    applyWordSpace() {
      Array.from(document.getElementsByTagName("span")).forEach((element) => {
        element.style.wordSpacing = `${this.wordSpace}px`;
      });
      document.getElementById("typing-box").style.wordSpacing = `${this.wordSpace}px`;
      document.getElementById("typing-box").focus();
    },
    applyLetterSpace() {
      Array.from(document.getElementsByClassName("word")).forEach((element) => {
        element.style.letterSpacing = `${this.letterSpace}px`;
      });
      Array.from(document.getElementsByClassName("letter")).forEach((element) => {
        element.style.marginRight = `${this.letterSpace}px`;
      });
      document.getElementById("typing-box").style.letterSpacing = `${this.letterSpace}px`;
      document.getElementById("typing-box").focus();
    },
    toggleBold() {
      Array.from(document.getElementsByClassName("word")).forEach((element) => {
        element.classList.toggle("bolded");
      });
      document.getElementById("bold").classList.toggle("bolded");
      document.getElementById("typing-box").focus();
    },
    shuffle(array) {
      for (var id = 0; id < array.length - 1; id++) {
        var randomIndex = Math.floor(Math.random() * id);
        var temp = array[id];
        this.$set(array, id, array[randomIndex]);
        this.$set(array, randomIndex, temp);
      }
      return array;
    },
    question1() {
      clearInterval(this.intervalID);
      Array.from(document.getElementsByClassName("flip")).forEach((element) => {
        element.style.transitionDuration = "1.5s";
        element.style.transform = "rotateY(360deg)";
      });
      setTimeout(function() {
        this.question = "In Macbeth, where did Malcolm flee to?"
        this.reveal = true;
      }.bind(this), 1300);
    },
    question2() {
      this.question = "That's my city";
      setTimeout(function() {
        Array.from(document.getElementsByClassName("flip")).forEach((element) => {
          element.style.transform = "rotateY(720deg)";
        });
        setTimeout(function() {
          this.subject = "Chemistry 20";
          this.question = "226g of butane is burnt with 784g of oxygen. What is the percentage error if the product has 423g of water?";
        }.bind(this), 1300);
      }.bind(this), 400);
    },
    question3() {
      this.question = "That's funnier than 24";
      setTimeout(function() {
        Array.from(document.getElementsByClassName("flip")).forEach((element) => {
          element.style.transform = "rotateY(1080deg)";
        });
        setTimeout(function() {
          this.subject = "Social 20";
          this.question = "How many years after the creation of the committee of public safety did Napoleon lose his throne?";
        }.bind(this), 1300);
      }.bind(this), 800);
    },
    question4() {
      this.question = "That's the same as 9+10";
      setTimeout(function() {
        Array.from(document.getElementsByClassName("flip")).forEach((element) => {
          element.style.transform = "rotateY(1440deg)";
        });
        setTimeout(function() {
          this.subject = "Math 2019";
          this.question = "2+2-1=?";
        }.bind(this), 1300);
      }.bind(this), 800);
    },
    revealCode() {
      this.question = "Quicc Maffs";
      setTimeout(function() {
        Array.from(document.getElementsByClassName("flip")).forEach((element) => {
          element.style.transform = "rotateY(1800deg)";
        });
        document.getElementById("typing-box").style.transitionDuration = "1.5s";
        document.getElementById("typing-box").style.transitionTimingFunction = "cubic-bezier(0.8, 0.55, 0.8, 0.55)";
        document.getElementById("typing-box").style.transform = "rotateY(360deg)";
        setTimeout(function() {
          this.solved = true;
          document.getElementById("top").style.display = "none";
          document.getElementById("typing-box").style.display = "none";
          document.getElementById("random-words").style.transitionDuration = "0s";
          document.getElementById("random-words").style.height = "310px";
          document.getElementById("random-words").style.marginBottom = "25px";
          document.getElementById("random-words").style.fontFamily = "optima";
        }.bind(this), 1300);
      }.bind(this), 400);
    }
  }
};
</script>

<style lang="scss" scoped>
#top {
  user-select: none;
  text-align: center;
  border: 2px solid black;
  font-family: optima;
  #timer {
    font-size: 30px;
  }
  #restart {
    font-size: 20px;
    cursor: pointer;
    display: inline;
    &:hover {
      color: #00adb5;
    }
  }
  #subject {
    font-size: 30px;
  }
  #wrong {
    visibility: hidden;
    font-size: 20px;
    color: #b50800;
  }
}
#random-words {
  user-select: none;
  text-align: center;
  font-size: 30px;
  line-height: 2;
  padding: 0px 10px;
  border: 2px solid black;
  overflow-wrap: break-word;
  height: 180px;
  overflow: hidden;
  span {
    word-spacing: 0px;
    letter-spacing: 0px;
    &#current-word {
      background-color: #00adb5;
      border-radius: 5px;
    }
    &.correct {
      opacity: 0.4;
    }
    &.incorrect {
      color: #b50800;
      opacity: 0.4;
    }
    &.correct-letter {
      color: white;
      margin: 0px;
    }
    &.wrong-letter {
      color: #b50800;
      margin: 0px;
    }
  }
  div {
    display: inline-block;
    overflow-wrap: break-word;
  }
  a {
    color: black;
    &:hover {
      color: #00adb5;
    }
  }
}
#typing-box {
  width: calc(100% - 6px);
  outline-width: 0px;
  text-align: center;
  font-family: Courier;
  word-spacing: 0px;
  letter-spacing: 0px;
  font-size: 30px;
  border: 2px solid black;
  height: 60px;
  margin-bottom: 25px;
}
#customization {
  text-align: center;
  margin-bottom: 30px;
  user-select: none;
  #fonts {
    outline: none;
  }
  label,
  #bold {
    margin-left: 20px;
  }
  #bold {
    display: inline;
    background-color: #00adb5;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
}
#graph {
  text-align: center;
  div {
    width: 860px;
    height: 480px;
    overflow: hidden;
    margin: auto;
    img {
      object-fit: none;
      float: left;
    }
  }
}

.bolded {
  font-weight: 900;
}
.flip {
  transform: rotateY(0deg);
  transition-duration: 1.5s;
  transition-timing-function: cubic-bezier(0.8, 0.55, 0.8, 0.55);
}
p {
  opacity: 1 !important;
  transform: translateY(0px) !important;
}
</style>
