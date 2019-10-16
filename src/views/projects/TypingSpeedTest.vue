<template>
  <div>
    <div id="topic">Typing Speed Test</div>
    <div id="line"></div>

    <div id="top" class="flip">
      <div v-if="reveal" id="subject">{{ subject }}</div>
      <div v-if="reveal" id="wrong">Wrong</div>
      <div v-else-if="seconds >= 60" id="timer" @click="setTime">
        {{ Math.floor(seconds / 60) }}:<span v-if="seconds % 60 < 10">0</span>{{ seconds % 60 }}
      </div>
      <div v-else-if="seconds > 0" id="timer" @click="setTime">{{ seconds }}</div>
      <div v-else-if="seconds === 0" id="timer">Finish up your last word</div>
      <br v-if="seconds >= 0" />
      <div v-if="seconds >= 0 && !reveal" id="restart" @click="restart">Restart</div>
      <div v-else-if="seconds < 0 && !reveal" id="restart" style="font-size: 30px;" @click="restart">Try Again</div>
    </div>
    <div id="random-words" class="flip">
      <div v-if="solved">
        <div>Congratulations for solving all the puzzels!</div>
        <div>
          Unfortunately, you are not the first person to solve it so the prize has already been
          taken. Still
          <a href="mailto:chingtheprogrammer@gmail.com?subject=Solved the Puzzles!&body=i_l9Bpj#_Z-Y*SzpYOOqn%v!Zuxyf96">let me know</a>
          that you solved it though. :)
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
        <p v-if="setTimeClicked % 3 === 0" class="slide-up">CPM: {{ cpm }}</p>
        <p v-else-if="setTimeClicked % 3 === 1" class="slide-up">CPM: {{ Math.round(cpm / 2) }}</p>
        <p v-else class="slide-up">CPM: {{ Math.round(cpm / 3) }}</p>
        <p v-if="setTimeClicked % 3 === 0" class="slide-up" style="margin-bottom: 0;">WPM: {{ Math.round(cpm / 5) }}</p>
        <p v-else-if="setTimeClicked % 3 === 1" class="slide-up" style="margin-bottom: 0;">WPM: {{ Math.round(cpm / 2 / 5) }}</p>
        <p v-else class="slide-up" style="margin-bottom: 0;">WPM: {{ Math.round(cpm / 3 / 5) }}</p>
        <div v-if="Object.keys(incorrect).length !== 0">
          <p v-if="setTimeClicked % 3 === 0" class="slide-up">Your CPM could have been {{ cpm + missed }}, but</p>
          <p v-else-if="setTimeClicked % 3 === 1" class="slide-up">Your CPM could have been {{ Math.round((cpm + missed) / 2) }}, but</p>
          <p v-else class="slide-up">Your CPM could have been {{ Math.round((cpm + missed) / 3) }}, but</p>
          <p v-for="(typed, correct) in incorrect" class="slide-up">
            <template v-if="typed !== ''">
              Instead of {{ correct }}, you typed {{ typed }}
            </template>
            <template v-else>
              You skipped the word {{ correct }}
            </template>
          </p>
        </div>
        <div v-else>
          <p class="slide-up">Congratulations! You didn't make any mistakes!</p>
        </div>
      </div>
    </div>
    <input v-if="seconds >= 0" id="typing-box" v-model="typed" placeholder="Start typing here" spellcheck="false" autocomplete="off" />

    <div v-if="seconds < -1" id="graph">
      <p v-if="setTimeClicked % 3 === 0" class="slide-up">Your CPM during the 60 seconds span</p>
      <p v-else-if="setTimeClicked % 3 === 1" class="slide-up">Your CPM during the 120 seconds span</p>
      <p v-else class="slide-up">Your CPM during the 180 seconds span</p>
      <div>
        <img v-if="setTimeClicked % 3 === 0" :src="`https://image-charts.com/chart?cht=lc&chd=t:${ graph }&chs=999x480&chco=ffbc8a&chg=1,1&chds=a&chxt=x&chxl=0:|0|5|10|15|20|25|30|35|40|45|50|55|60|65|70&chls=3`" alt="graph" />
        <img v-else-if="setTimeClicked % 3 === 1" :src="`https://image-charts.com/chart?cht=lc&chd=t:${ graph }&chs=999x480&chco=ffbc8a&chg=1,1&chds=a&chxt=x&chxl=0:|0|10|20|30|40|50|60|70|80|90|100|110|120|130|140&chls=3`" alt="graph" />
        <img v-else :src="`https://image-charts.com/chart?cht=lc&chd=t:${ graph }&chs=999x480&chco=ffbc8a&chg=1,1&chds=a&chxt=x&chxl=0:|0|15|30|45|60|75|90|105|120|135|150|165|180|195|210&chls=3`" alt="graph" />
      </div>
    </div>

    <div id="customization">
      <label for="fonts">Font: </label>
      <select id="fonts" v-model="font">
        <option value="Roboto">Roboto</option>
        <option value="PoetsenOne">PoetsenOne</option>
      </select>
      <div style="display: inline-block;">
        <label for="word-space">Word Space: {{ wordSpaceFiller }}{{ wordSpace }}</label>
        <input id="word-space" v-model="wordSpace" class="slider" type="range" min="0" max="20" />
      </div>
      <div style="display: inline-block;">
        <label for="letter-space">Letter Space: {{ letterSpaceFiller }}{{ letterSpace }}</label>
        <input id="letter-space" v-model="letterSpace" class="slider" type="range" min="0" max="5" />
      </div>
      <div id="bold" @click="toggleBold">Bold</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypingSpeedTest",
  metaInfo: {
    title: "Typing Speed Test",
    meta: [
      { name: "description", content: "Type as fast as you can in 1 minute to check out your CPM and WPM. You can also set a custom time, font, and spacing of the words and letters." },
      { name: "keywords", content: "typing speed, typing test, how fast I type, typing practice, random words, online, cpm, wpm, game, skills" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/typing-speed-test" }
    ]
  },
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
      "voice", "sleep", "be", "too", "rest", "take", "phone", "reach", "hint", "boat",
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
      timeoutID: 0,
      ching: 0,
      incorrect: {},
      graph: "",
      font: localStorage.font || "Roboto",
      wordSpace: localStorage.wordSpace || 9,
      wordSpaceFiller: "0",
      letterSpace: localStorage.letterSpace || 2,
      letterSpaceFiller: "0",
      typed: "",
      reveal: false,
      subject: "English 20",
      question: "",
      wrong: false,
      solved: false,
      setTimeClicked: 0
    };
  },
  computed: {
    typedWord() {
      let array = this.typed.split(" ");
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
      this.wordSpace < 10 ? this.wordSpaceFiller = "0" : this.wordSpaceFiller = "";
      this.applyWordSpace();
    },
    letterSpace() {
      localStorage.letterSpace = this.letterSpace;
      this.letterSpace < 10 ? this.letterSpaceFiller = "0" : this.letterSpaceFiller = "";
      this.applyLetterSpace();
    },
    typed() {
      if (this.typed.replace(/\s/g, "") && this.typed[this.typed.length - 1] === " ") {
        this.nextWord();
      } else {
        this.letterColours();
      }
    },
    line() {
      let id = setInterval(function() {
        if (document.querySelector("#random-words").scrollTop < this.line) {
          document.querySelector("#random-words").scrollTop += 6;
        } else {
          clearInterval(id);
        }
      }.bind(this), 10);
    },
    ching() {
      if (this.ching === 9 && document.querySelectorAll(".correct").length === 0 && document.querySelectorAll(".incorrect").length === 9) {
        this.question1();
      }
    }
  },
  mounted() {
    if (localStorage.bolded === "true") { // localStorage does not store booleans, booleans are converted to strings
      document.querySelector("#bold").classList.add("bolded");
    }
    this.restart();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.findLastWords);
    clearInterval(this.intervalID);
    clearTimeout(this.timeoutID);
    if (document.querySelector("#typing-box")) {
      document.querySelector("#typing-box").removeEventListener("keyup", this.startTime);
      document.querySelector("#typing-box").removeEventListener("keyup", this.stopTime);
    }
  },
  methods: {
    restart() {
      window.removeEventListener("resize", this.findLastWords);
      window.addEventListener("resize", this.findLastWords);
      this.words = this.shuffle(this.words);
      document.querySelectorAll(".flip").forEach((element) => element.style.transform = "rotateY(0deg)");
      document.querySelectorAll(".correct").forEach((element) => element.classList.remove("correct"));
      document.querySelectorAll(".incorrect").forEach((element) => element.classList.remove("incorrect"));
      document.querySelectorAll(".correct-letter").forEach((element) => element.classList.remove("correct-letter"));
      document.querySelectorAll(".wrong-letter").forEach((element) => element.classList.remove("wrong-letter"));
      document.querySelector("#random-words").style.height = "180px";
      document.querySelector("#random-words").style.lineHeight = "2";
      document.querySelector("#random-words").style.marginBottom = "0";
      document.querySelector("#random-words").style.borderRadius = "0";
      this.line = this.currentWord = this.skipped = this.cpm = this.missed = this.ching = 0;
      clearInterval(this.intervalID);
      switch (this.setTimeClicked % 3) {
        case 0: this.seconds = 60; break;
        case 1: this.seconds = 120; break;
        case 2: this.seconds = 180;
      }
      this.incorrect = {};
      this.graph = this.typed = "";
      this.$nextTick(function() {
        if (document.querySelector("#current-word")) {
          document.querySelector("#current-word").removeAttribute("id");
        }
        document.querySelector(".word").setAttribute("id", "current-word");
        document.querySelector("#typing-box").setAttribute("placeholder", "Start typing here");
        this.applyFont();
        this.applyWordSpace();
        this.applyLetterSpace();
        if (document.querySelector("#bold").classList.contains("bolded")) {
          document.querySelectorAll(".word").forEach((element) => {
            element.classList.remove("bolded");
            element.classList.add("bolded");
          });
          document.querySelector("#typing-box").classList.remove("bolded");
          document.querySelector("#typing-box").classList.add("bolded");
        }
        document.querySelector("#typing-box").removeEventListener("keyup", this.stopTime);
        document.querySelector("#typing-box").removeEventListener("keyup", this.startTime);
        document.querySelector("#typing-box").addEventListener("keyup", this.startTime);
      });
    },
    setTime() {
      this.setTimeClicked++;
      this.restart();
    },
    findLastWords() {
      let lastTop = document.querySelector(".word").getClientRects()[0].top;
      let currentTop = 0;
      document.querySelectorAll(".last").forEach((element) => element.classList.remove("last"));
      for (let index = 0; index < document.querySelectorAll(".word").length; index++) {
        currentTop = document.querySelectorAll(".word")[index].getClientRects()[0].top;
        if (currentTop > lastTop) {
          document.querySelectorAll(".word")[index].parentElement.previousSibling.firstChild.classList.add("last");
          lastTop = currentTop;
        }
      }
      document.querySelector(".last").classList.remove("last");
    },
    nextWord() {
      if (this.reveal) {
        switch (this.subject) {
          case "English 20":
            if (this.typedWord[0] === "England") {
              this.question2();
            } else {
              document.querySelector("#wrong").style.visibility = "visible";
              setTimeout(() => document.querySelector("#wrong").style.visibility = "hidden", 500);
            }
            break;
          case "Chemistry 20":
            if (this.typedWord[0] === "25%") {
              this.question3();
            } else {
              document.querySelector("#wrong").style.visibility = "visible";
              setTimeout(() => document.querySelector("#wrong").style.visibility = "hidden", 500);
            }
            break;
          case "Social 20":
            if (this.typedWord[0] === "21") {
              this.question4();
            } else {
              document.querySelector("#wrong").style.visibility = "visible";
              setTimeout(() => document.querySelector("#wrong").style.visibility = "hidden", 500);
            }
            break;
          case "Math 2018":
            if (this.typedWord[0] === "3") {
              this.revealCode();
            } else {
              document.querySelector("#wrong").style.visibility = "visible";
              setTimeout(() => document.querySelector("#wrong").style.visibility = "hidden", 500);
            }
            break;
        }
      } else {
        this.skipped = 0;
        if (this.typedWord[0] === document.querySelector("#current-word").textContent) {
          document.querySelector("#current-word").classList.add("correct");
          this.cpm += document.querySelector("#current-word").textContent.length + 1;
        } else if (this.typedWord[0] === document.querySelector("#current-word").parentElement.nextElementSibling.firstChild.textContent) {
          document.querySelector("#current-word").classList.add("incorrect");
          this.incorrect[document.querySelector("#current-word").textContent] = "";
          document.querySelector("#current-word").parentElement.nextElementSibling.firstChild.classList.add("correct");
          this.cpm += document.querySelector("#current-word").parentElement.nextElementSibling.firstChild.textContent.length + 1;
          if (document.querySelector("#current-word").parentElement.nextElementSibling.firstChild.classList.contains("last")) {
            this.line += 60;
          }
          this.skipped = 1;
        } else if (this.typedWord[0] === document.querySelector("#current-word").parentElement.nextElementSibling.nextElementSibling.firstChild.textContent) {
          document.querySelector("#current-word").classList.add("incorrect");
          this.incorrect[document.querySelector("#current-word").textContent] = "";
          document.querySelector("#current-word").parentElement.nextElementSibling.firstChild.classList.add("incorrect");
          this.incorrect[document.querySelector("#current-word").parentElement.nextElementSibling.firstChild.textContent] = "";
          document.querySelector("#current-word").parentElement.nextElementSibling.nextElementSibling.firstChild.classList.add("correct");
          this.cpm += document.querySelector("#current-word").parentElement.nextElementSibling.nextElementSibling.firstChild.textContent.length + 1;
          if (document.querySelector("#current-word").parentElement.nextElementSibling.firstChild.classList.contains("last")) {
            this.line += 60;
          }
          this.skipped = 2;
        } else {
          document.querySelector("#current-word").classList.add("incorrect");
          this.incorrect[document.querySelector("#current-word").textContent] = this.typedWord[0];
          this.missed += document.querySelector("#current-word").textContent.length + 1;
          if (this.typedWord[0] === "Ching") {
            this.ching++;
          }
        }
        if (document.querySelector("#current-word").classList.contains("last")) {
          this.line += 60;
        }
        Array.from(document.querySelector("#current-word").children).forEach((element) => {
          element.classList.remove("correct-letter");
          element.classList.remove("wrong-letter");
        });
        document.querySelector("#current-word").removeAttribute("id");
        this.currentWord += 1 + this.skipped;
        document.querySelectorAll(".word")[this.currentWord].setAttribute("id", "current-word");
      }
      this.typed = this.typedWord[1];
    },
    letterColours() {
      for (let index = 0; index < document.querySelector("#current-word").textContent.length; index++) {
        document.querySelector("#current-word").querySelectorAll(".letter")[index].classList.remove("correct-letter");
        document.querySelector("#current-word").querySelectorAll(".letter")[index].classList.remove("wrong-letter");
        if (this.typed.replace(/\s/g, "").length > document.querySelector("#current-word").textContent.length) {
          document.querySelector("#current-word").querySelectorAll(".letter")[index].classList.add("wrong-letter");
        } else if (this.typed.replace(/\s/g, "")[index] === document.querySelector("#current-word").textContent[index]) {
          document.querySelector("#current-word").querySelectorAll(".letter")[index].classList.add("correct-letter");
        } else if (this.typed.replace(/\s/g, "")[index] !== undefined && this.typed[index] !== document.querySelector("#current-word").textContent[index]) {
          document.querySelector("#current-word").querySelectorAll(".letter")[index].classList.add("wrong-letter");
        }
      }
    },
    startTime(event) {
      if (event.which >= 65 && event.which <= 90) {
        document.querySelector("#typing-box").removeAttribute("placeholder");
        this.intervalID = setInterval(function() {
          if (this.seconds > 0) {
            this.seconds--;
            switch (this.setTimeClicked % 3) {
              case 0: this.graph += `${ Math.round(this.cpm * 60 / (60 - this.seconds)) },`; break;
              case 1: this.graph += `${ Math.round(this.cpm * 60 / (120 - this.seconds)) },`; break;
              case 2: this.graph += `${ Math.round(this.cpm * 60 / (180 - this.seconds)) },`;
            }
            if (this.seconds === 0) {
              clearInterval(this.intervalID);
              document.querySelector("#typing-box").addEventListener("keyup", this.stopTime);
            }
          }
        }.bind(this), 1000);
        document.querySelector("#typing-box").removeEventListener("keyup", this.startTime);
      }
    },
    stopTime(event) {
      document.querySelector("#typing-box").addEventListener("keyup", this.stopTime);
      if (event.which === 32) {
        window.removeEventListener("resize", this.findLastWords);
        this.seconds--;
        document.querySelectorAll(".flip").forEach((element) => {
          element.style.transitionDuration = "1.5s";
          document.querySelector("#random-words").style.marginBottom = "15px";
          document.querySelector("#random-words").style.borderRadius = "0 0 8px 8px";
          element.style.transform = "rotateY(360deg)";
        });
        setTimeout(function() {
          this.seconds--;
          this.graph += this.cpm;
          document.querySelectorAll(".flip").forEach((element) => element.style.transitionDuration = "0s");
          document.querySelector("#random-words").style.height = "auto";
          document.querySelector("#random-words").style.lineHeight = "0.5";
        }.bind(this), 1300);
      }
    },
    applyFont() {
      document.querySelector("#random-words").style.fontFamily = this.font;
      document.querySelector("#bold").style.fontFamily = this.font;
      if (this.seconds >= 0) {
        document.querySelector("#typing-box").style.fontFamily = this.font;
        this.timeoutID = setTimeout(this.findLastWords, 1000);
        document.querySelector("#typing-box").focus();
      }
    },
    applyWordSpace() {
      if (this.seconds >= 0) {
        document.querySelectorAll("span").forEach((element) => element.style.wordSpacing = `${ this.wordSpace }px`);
        document.querySelector("#typing-box").style.wordSpacing = `${ this.wordSpace }px`;
        this.findLastWords();
        document.querySelector("#typing-box").focus();
      }
    },
    applyLetterSpace() {
      if (this.seconds >= 0) {
        document.querySelectorAll(".letter").forEach((element) => element.style.marginRight = `${ this.letterSpace }px`);
        document.querySelector("#typing-box").style.letterSpacing = `${ this.letterSpace }px`;
        this.findLastWords();
        document.querySelector("#typing-box").focus();
      }
    },
    toggleBold() {
      document.querySelector("#bold").classList.toggle("bolded");
      if (this.seconds >= 0) {
        document.querySelectorAll(".word").forEach((element) => element.classList.toggle("bolded"));
        document.querySelector("#typing-box").classList.toggle("bolded");
        localStorage.bolded = document.querySelector("#bold").classList.contains("bolded");
        document.querySelector("#typing-box").focus();
        this.findLastWords();
      }
    },
    shuffle(array) {
      for (let index = 0; index < array.length; index++) {
        let randomIndex = Math.floor(Math.random() * index);
        let temp = array[index];
        this.$set(array, index, array[randomIndex]);
        this.$set(array, randomIndex, temp);
      }
      return array;
    },
    question1() {
      clearInterval(this.intervalID);
      document.querySelectorAll(".flip").forEach((element) => {
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
        document.querySelectorAll(".flip").forEach((element) => element.style.transform = "rotateY(720deg)");
        setTimeout(function() {
          this.subject = "Chemistry 20";
          this.question = "226g of butane is burnt with 784g of oxygen. What is the percentage error if the product has 451g of water?";
        }.bind(this), 1300);
      }.bind(this), 400);
    },
    question3() {
      this.question = "That's funnier than 24";
      setTimeout(function() {
        document.querySelectorAll(".flip").forEach((element) => element.style.transform = "rotateY(1080deg)");
        setTimeout(function() {
          this.subject = "Social 20";
          this.question = "How many years after the creation of the committee of public safety did Napoleon lose his throne?";
        }.bind(this), 1300);
      }.bind(this), 800);
    },
    question4() {
      this.question = "That's the same as 9+10";
      setTimeout(function() {
        document.querySelectorAll(".flip").forEach((element) => element.style.transform = "rotateY(1440deg)");
        setTimeout(function() {
          this.subject = "Math 2018";
          this.question = "2+2-1=?";
        }.bind(this), 1300);
      }.bind(this), 800);
    },
    revealCode() {
      this.question = "Quicc Maffs";
      setTimeout(function() {
        document.querySelectorAll(".flip").forEach((element) => element.style.transform = "rotateY(1800deg)");
        document.querySelector("#typing-box").style.transitionDuration = "1.5s";
        document.querySelector("#typing-box").style.transitionTimingFunction = "cubic-bezier(0.8, 0.55, 0.8, 0.55)";
        document.querySelector("#typing-box").style.transform = "rotateY(360deg)";
        setTimeout(function() {
          this.solved = true;
          document.querySelector("#top").style.display = "none";
          document.querySelector("#typing-box").style.display = "none";
          document.querySelector("#random-words").style.transitionDuration = "0s";
          document.querySelector("#random-words").style.height = "310px";
          document.querySelector("#random-words").style.marginBottom = "25px";
          document.querySelector("#random-words").style.fontFamily = "Roboto";
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
  border: 2px solid $black;
  border-radius: 8px 8px 0 0;
  font-family: Roboto;
  #timer {
    font-size: 30px;
  }
  #restart {
    font-size: 20px;
  }
  #timer, #restart {
    cursor: pointer;
    display: inline;
    &:hover {
      color: $primary-colour;
    }
  }
  #subject {
    font-size: 30px;
  }
  #wrong {
    visibility: hidden;
    font-size: 20px;
    color: #ff2344;
  }
}
#random-words {
  user-select: none;
  text-align: center;
  font-size: 30px;
  line-height: 2;
  padding: 0 10px;
  border: 2px solid $black;
  overflow-wrap: break-word;
  height: 180px;
  overflow: hidden;
  span {
    word-spacing: 0;
    letter-spacing: 0;
    &#current-word {
      background-color: $primary-colour;
      border-radius: 5px;
    }
    &.correct, &.incorrect {
      opacity: 0.4;
    }
    &.incorrect {
      color: #ff2344;
    }
    &.correct-letter {
      color: $white;
      margin: 0;
    }
    &.wrong-letter {
      color: #ff2344;
      margin: 0;
    }
  }
  div {
    display: inline-block;
    overflow-wrap: break-word;
  }
}
#typing-box {
  width: calc(100% - 6px);
  text-align: center;
  word-spacing: 0;
  letter-spacing: 0;
  font-size: 30px;
  border: 2px solid $black;
  border-radius: 0 0 8px 8px;
  height: 60px;
  margin-bottom: 25px;
}
#customization {
  text-align: center;
  margin-bottom: 30px;
  user-select: none;
  #fonts {
    outline: none;
    font-size: 14px;
  }
  label, #bold {
    margin-left: 20px;
  }
  #bold {
    display: inline;
    background-color: $primary-colour;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
}
#graph {
  text-align: center;
  margin-bottom: 20px;
  div {
    width: 860px;
    height: 480px;
    overflow: hidden;
    margin: auto;
    border: 2px solid $black;
    border-radius: 4px;
  }
}

.bolded {
  font-weight: 700;
}
.flip {
  transform: rotateY(0deg);
  transition-duration: 1.5s;
  transition-timing-function: cubic-bezier(0.8, 0.55, 0.8, 0.55);
}
p {
  font-size: 22px;
}

@media(max-width: 550px) {
  p {
    line-height: 1em;
  }
}
</style>