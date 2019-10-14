<template>
  <div>
    <div id="topic">Word Counter</div>
    <div id="line"></div>
    <textarea id="text" ref="text" v-model="text" placeholder="Enter your text here" rows="6"></textarea>

    <div id="user-choice">
      <div>
        <label for="percentage">Display words used over </label>
        <input id="percentage" ref="percentage" v-model="percentage" />%
      </div>

      <div class="radio">
        <label>
          <input v-model="picked" type="radio" name="user-choice" value="showPercentage" checked />
          <span class="checkmark"></span>
          Percentage | Decimals:
          <select v-model="precision">
            <option value="2">0</option>
            <option value="3">1</option>
            <option value="4">2</option>
            <option value="5">3</option>
            <option value="6">4</option>
          </select>
        </label>

        <br />

        <label>
          <input v-model="picked" type="radio" name="user-choice" value="showOccurrence" />
          <span class="checkmark"></span>
          Occurrence
        </label>
      </div>
    </div>
    <textarea id="user-search" v-model="search" placeholder="Search.."></textarea>
    <div id="output">
      <div v-if="text !== 'Atom'">
        <div>Word Count: {{ words.length }}</div>
        <table v-if="!search">
          <tr v-for="(number, word) in counted" v-if="Math.round(number * (10 ** precision) / words.length) / (10 ** (precision - 2)) >= percentage">
            <td><strong>{{ word[0].toUpperCase() + word.slice(1) }}</strong></td>
            <td v-if="picked === 'showPercentage'">: {{ Math.round(number * (10 ** precision) / words.length) / (10 ** (precision - 2)) }}%</td>
            <td v-else>: {{ number }}</td>
            <td><a :href="`https://www.thesaurus.com/browse/${ word }`" target="_blank" rel="noopener noreferrer">Find Synonyms</a></td>
          </tr>
        </table>

        <table v-else>
          <tr v-for="(number, word) in counted" v-if="word.includes(search.toLowerCase())">
            <td><strong>{{ word[0].toUpperCase() + word.slice(1) }}</strong></td>
            <td v-if="picked === 'showPercentage'">: {{ Math.round(number * (10 ** precision) / words.length) / (10 ** (precision - 2)) }}%</td>
            <td v-else>: {{ number }}</td>
            <td><a :href="`https://www.thesaurus.com/browse/${ word }`" target="_blank" rel="noopener noreferrer">Find Synonyms</a></td>
          </tr>
        </table>
      </div>

      <div v-else>
        <p>So close yet so far away</p>
        <p>From completing my game on this beautiful day</p>
        <p>Time is not going to wait</p>
        <p>So complete it quickly like it's a piece of cake</p>
        <p>Now I have just rhymed these words for the sake</p>
        <p>of saying do you know da wae?</p>
        <br />
        <p>Sorry for my dead dank meme</p>
        <p>Here's the real task and the real rhyme scheme</p>
        <p>Go to the Typing Speed Test with this <router-link id="hyperlink" :to="{ name: 'TypingSpeedTest' }">hyperlink</router-link></p>
        <p>For the typing speed test, don't even bother to think</p>
        <p>The words and speed don't matter, as long as you type in 'Ching'</p>
        <p>The quantity matters, however</p>
        <p>So do this calculation with no error</p>
        <p>It might take some effort</p>
        <p>But it won't take forever</p>
        <p>Get the number of seconds in September</p>
        <p>Add all the digits together</p>
        <p>Until you get an one-digit number</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordCounter",
  metaInfo: {
    title: "Word Counter",
    meta: [
      { name: "description", content: "An online app that scans through your writing and checks for overused words and provide synonyms to ensure that your writing is not too repetitive." },
      { name: "keywords", content: "writing, useful, helpful, word counter, proofread, Grammarly, analyzer, essay, synonyms, online" }
    ],
    link: [
      { rel: "canonical", href: "https://chingchang.netlify.com/projects/word-counter" }
    ]
  },
  data() {
    return {
      text: "",
      percentage: 1,
      words: [],
      counted: {},
      search: "",
      precision: 2,
      picked: "showPercentage"
    };
  },
  watch: {
    percentage() {
      if (parseFloat(this.percentage) && this.percentage[this.percentage.length - 1] !== ".") {
        this.percentage = parseFloat(this.percentage);
        this.$refs.percentage.style.width = `${ this.percentage.toString().length * 11 + 3 }px`;
      } else if (parseFloat(this.percentage)) {
        this.percentage = `${ parseFloat(this.percentage) }.`;
        this.$refs.percentage.style.width = `${ this.percentage.toString().length * 11 - 6 }px`;
      } else {
        this.percentage = "";
        this.$refs.percentage.style.width = "14px";
      }
    },
    text() {
      this.counted = {};
      this.mostUsedWords = [];
      this.mostUsedTimes = 0;
      if (this.text) {
        this.words = this.text.replace(/\.?,?!?\??\(?\)?\[?\]?"?\{?\}?;?:?/g, "");
        this.words = this.words.replace(/\n/g, " ");
        this.words = this.words.split(" ");
        this.words = this.words.filter((element) => {
          return element !== "";
        });
      } else {
        this.words = [];
      }
      for (let index in this.words) {
        if (!(this.words[index].toLowerCase() in this.counted)) {
          this.counted[this.words[index].toLowerCase()] = 1;
        } else {
          this.counted[this.words[index].toLowerCase()]++;
        }
      }
      this.counted = this.sortObject(this.counted);
    }
  },
  mounted() {
    this.$refs.text.focus();
    window.addEventListener("scroll", this.animateText);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.animateText);
  },
  methods: {
    animateText() {
      for (let index = 0; index < document.querySelectorAll("p").length; index++) {
        if (window.innerHeight > document.querySelectorAll("p")[index].getClientRects()[0].top + 50) {
          document.querySelectorAll("p")[index].classList.add("slide-up");
        }
      }
    },
    sortObject(object) {
      let sortable = [];
      let sortedObject = {};
      for (let key in object) {
        sortable.push([key, object[key]]);
      }
      sortable = sortable.sort((a, b) => {
        return b[1] - a[1];
      });
      for (let subArray in sortable) {
        sortedObject[sortable[subArray][0]] = sortable[subArray][1];
      }
      return sortedObject;
    }
  }
};
</script>

<style lang="scss" scoped>
#text {
  resize: none;
  border: 4px solid $grey;
  width: calc(100% - 18px);
  border-radius: 5px;
  font-size: 22px;
  margin-bottom: 10px;
  padding: 5px;
  transition-duration: 0.3s;
  &:focus {
    border-color: $secondary-colour;
  }
}
#user-choice {
  font-size: 20px;
  margin-bottom: 15px;
  input {
    font-size: 20px;
    border: none;
    width: 14px;
    margin-left: 0px;
    border-bottom: 3px solid $grey;
    border-radius: 2px;
    transition-duration: 0.3s;
    &:focus {
      border-color: $secondary-colour;
    }
  }
  .radio {
    padding-left: 25px;
    margin-top: 10px;
    input {
      position: absolute;
      visibility: hidden;
      &:checked {
        ~ .checkmark {
          transition-duration: 0.5s;
          background-color: $secondary-colour;
          &:after {
            display: block;
          }
        }
      }
    }
    .checkmark {
      position: absolute;
      margin-left: -25px;
      height: 22px;
      width: 22px;
      background-color: $grey;
      border-radius: 50%;
      box-shadow: inset 0 0 1px $black;
      cursor: pointer;
      &:hover {
        filter: brightness(90%);
      }
      &:after {
        top: 7px;
        left: 7px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $white;
        content: "";
        position: absolute;
        display: none;
      }
    }
    select {
      font-size: 18px;
      border: 2px solid $grey;
      transition-duration: 0.3s;
      &:focus {
        border-color: $secondary-colour;
      }
    }
  }
}
#user-search {
  width: 150px;
  height: 26px;
  resize: none;
  background-image: url("../../assets/projects/word-counter/search-icon.jpg");
  background-size: 25px 25px;
  background-position: 9px 9px;
  background-repeat: no-repeat;
  padding: 10px 10px 10px 50px;
  border: 4px solid $grey;
  border-radius: 5px;
  font-size: 22px;
  transition-duration: 0.3s;
  &:focus {
    border-color: $secondary-colour;
  }
}
#output {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 20px;
  div {
    margin: 10px 0px;
  }
  td {
    text-align: center;
  }
}
</style>