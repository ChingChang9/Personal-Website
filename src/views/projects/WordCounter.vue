<template>
  <div>
    <div id="topic">Word Counter</div>
    <div id="line"></div>

    <textarea id="text" ref="text" v-model="text" placeholder="Enter your text here" rows="6"></textarea>

    <div id="user-choice">
      <div>Display words used over <input ref="percentage" v-model="percentage" />%</div>

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

    <div v-if="text === 'Atom'">
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

    <div id="output">
      <div v-if="text !== 'Atom'">
        <div v-if="!search">

          <div v-if="words.length > 1">There are {{ words.length }} words in your text</div>
          <div v-else-if="words.length === 1">There is 1 word in your text</div>

          <div v-if="mostUsedWords.length > 1">
            The most used words are
            <span v-for="index in mostUsedWords.length - 2">
              <strong>{{ mostUsedWords[index - 1][0].toUpperCase() + mostUsedWords[index - 1].slice(1) }}</strong>,
            </span>
            <strong>{{ mostUsedWords[mostUsedWords.length - 2][0].toUpperCase() + mostUsedWords[mostUsedWords.length - 2].slice(1) }}</strong> and
            <strong>{{ mostUsedWords[mostUsedWords.length - 1][0].toUpperCase() + mostUsedWords[mostUsedWords.length - 1].slice(1) }}</strong>.
            They were used
            <span v-if="picked === 'showPercentage'">
              {{ Math.round(mostUsedTimes * (10 ** precision) / words.length) / (10 ** (precision - 2)) }}% of the time
            </span>
            <span v-else>
              {{ mostUsedTimes }} time<span v-if="mostUsedTimes > 1">s</span>
            </span>
          </div>
          <div v-else-if="mostUsedWords.length === 1">The most used word is
            <strong>{{ mostUsedWords[0][0].toUpperCase() + mostUsedWords[0].slice(1) }}</strong>.
            It was used
            <span v-if="picked === 'showPercentage'">
              {{ Math.round(mostUsedTimes * (10 ** precision) / words.length) / (10 ** (precision - 2)) }}% of the time
            </span>
            <span v-else>
              {{ mostUsedTimes }} time<span v-if="mostUsedTimes > 1">s</span>
            </span>
          </div>
          <div v-for="(number, word) in counted">
            <div v-if="word.includes(search.toLowerCase()) && Math.round(number * (10 ** precision) / words.length) / (10 ** (precision - 2)) >= percentage">
              <strong>{{ word[0].toUpperCase() + word.slice(1) }}</strong>:
              <span v-if="picked === 'showPercentage'">{{ Math.round(number * (10 ** precision) / words.length) / (10 ** (precision - 2)) }}%</span>
              <span v-else>{{ number }}</span>
            </div>
          </div>
        </div>

        <div v-else>
          <div v-for="(number, word) in counted">
            <div v-if="word.includes(search.toLowerCase())">
              <strong>{{ word[0].toUpperCase() + word.slice(1) }}</strong>:
              <span v-if="picked === 'showPercentage'">{{ Math.round(number * (10 ** precision) / words.length) / (10 ** (precision - 2)) }}%</span>
              <span v-else>{{ number }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordCounter",
  data() {
    return {
      text: "",
      percentage: 0,
      words: [],
      counted: {},
      mostUsedWords: [],
      mostUsedTimes: 0,
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
        if (!(this.words[index] in this.counted)) {
          this.counted[this.words[index]] = 1;
        } else {
          this.counted[this.words[index]]++;
        }
      }
      this.counted = this.sortObject(this.counted);

      for (let key in this.counted) {
        if (this.counted[key] > this.mostUsedTimes) {
          this.mostUsedTimes = this.counted[key];
          this.mostUsedWords = [];
        }
        if (this.counted[key] === this.mostUsedTimes) {
          this.mostUsedWords.push(key);
        }
      }
    }
  },
  mounted() {
    this.$refs.text.focus();
  },
  methods: {
    sortObject(object) {
      let sortable = [];
      let sortedObject = {};
      for (let key in object) {
        sortable.push([key, object[key]]);
      }
      sortable = sortable.sort((a, b) => {
        return b[1] - a[1];
      });
      for (let subArr in sortable) {
        sortedObject[sortable[subArr][0]] = sortable[subArr][1];
      }
      return sortedObject;
    }
  }
};
</script>

<style lang="scss" scoped>
$grey: #cac5c9;

#text {
  outline-width: 0px;
  resize: none;
  border: 4px solid $grey;
  width: calc(100% - 18px);
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 5px;
  transition-duration: 0.3s;
  &:focus {
    border: 4px solid $blue;
  }
}
#user-choice {
  font-size: calc(15px + 0.3vw);
  margin-bottom: 15px;
  input {
    font-size: calc(14px + 0.3vw);
    outline-width: 0px;
    border: none;
    width: 14px;
    margin-left: 0px;
    border-bottom: 3px solid $grey;
    border-radius: 2px;
    transition-duration: 0.3s;
    &:focus {
      border-bottom: 3px solid $blue;
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
          background-color: $blue;
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
        background-color: #aaa5a9;
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
      font-size: calc(11px + 0.3vw);
      outline-width: 0px;
      border: 2px solid $grey;
      transition-duration: 0.3s;
      &:focus {
        border: 2px solid $blue;
      }
    }
  }
}
#user-search {
  width: 150px;
  height: 25px;
  resize: none;
  outline-width: 0px;
  background-image: url("../../assets/projects/wordCounter/searchicon.jpg");
  background-size: 25px 25px;
  background-position: 9px 9px;
  background-repeat: no-repeat;
  padding: 10px 10px 10px 50px;
  border: 4px solid $grey;
  border-radius: 5px;
  font-size: 20px;
  transition-duration: 0.3s;
  &:focus {
    border: 4px solid $blue;
  }
}
#output {
  font-family: optima;
  font-size: calc(18px + 0.3vw);
  margin-top: 15px;
  margin-bottom: 15px;
  div {
    margin: 10px 0px;
  }
}
</style>