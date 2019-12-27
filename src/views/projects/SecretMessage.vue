<template>
  <div>
    <div id="topic">Secret Message</div>
    <div id="line"></div>
    <textarea id="text" v-model="text" placeholder="Enter your text here" rows="6"></textarea>
    <div id="output">
      <div @click="copyEncodedText" @mouseleave="showEncodedTooltip = false;">
        <span v-if="showEncodedTooltip" class="tooltip">Copied</span>
        Encoded: {{ encodedText }}
      </div>
      <hr />
      <div>Decoded: {{ decodedText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecretMessage",
  metaInfo: {
    title: "Secret Message",
    meta: [
      { name: "description", content: "Encoder and decoder that only decodes text encoded by this website. Useless for all other encoding system, which also makes this uncrackable by any other sites." },
      { name: "keywords", content: "encoder, decoder, secret message, generator, code, encryption, decrpt, online, strategy, Ching Chang" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/secret-message" }
    ]
  },
  data() {
    return {
      text: "",
      showEncodedTooltip: false
    };
  },
  computed: {
    encodedText() {
      let encodedText = "";
      for (let character in this.text) {
        switch (this.text[character]) {
          case "a": encodedText += "x"; break;
          case "b": encodedText += "d"; break;
          case "c": encodedText += ","; break;
          case "d": encodedText += "\""; break;
          case "e": encodedText += "l"; break;
          case "f": encodedText += "k"; break;
          case "g": encodedText += "n"; break;
          case "h": encodedText += "o"; break;
          case "i": encodedText += "-"; break;
          case "j": encodedText += "z"; break;
          case "k": encodedText += "u"; break;
          case "l": encodedText += "t"; break;
          case "m": encodedText += " "; break;
          case "n": encodedText += "c"; break;
          case "o": encodedText += "h"; break;
          case "p": encodedText += "e"; break;
          case "q": encodedText += "g"; break;
          case "r": encodedText += "j"; break;
          case "s": encodedText += "y"; break;
          case "t": encodedText += "i"; break;
          case "u": encodedText += "p"; break;
          case "v": encodedText += "a"; break;
          case "w": encodedText += "m"; break;
          case "x": encodedText += "b"; break;
          case "y": encodedText += "s"; break;
          case "z": encodedText += "w"; break;
          case " ": encodedText += "r"; break;
          case "A": encodedText += "X"; break;
          case "B": encodedText += "D"; break;
          case "C": encodedText += "V"; break;
          case "D": encodedText += "F"; break;
          case "E": encodedText += "L"; break;
          case "F": encodedText += "K"; break;
          case "G": encodedText += "N"; break;
          case "H": encodedText += "O"; break;
          case "I": encodedText += "Q"; break;
          case "J": encodedText += "Z"; break;
          case "K": encodedText += "U"; break;
          case "L": encodedText += "T"; break;
          case "M": encodedText += " "; break;
          case "N": encodedText += "C"; break;
          case "O": encodedText += "H"; break;
          case "P": encodedText += "E"; break;
          case "Q": encodedText += "G"; break;
          case "R": encodedText += "J"; break;
          case "S": encodedText += "Y"; break;
          case "T": encodedText += "I"; break;
          case "U": encodedText += "P"; break;
          case "V": encodedText += "A"; break;
          case "W": encodedText += "M"; break;
          case "X": encodedText += "B"; break;
          case "Y": encodedText += "S"; break;
          case "Z": encodedText += "W"; break;
          case ",": encodedText += "?"; break;
          case ".": encodedText += "!"; break;
          case "(": encodedText += ")"; break;
          case ")": encodedText += "<"; break;
          case "—": encodedText += "."; break;
          case "-": encodedText += ">"; break;
          case "+": encodedText += "#"; break;
          case "=": encodedText += "q"; break;
          case ":": encodedText += "v"; break;
          case "?": encodedText += "%"; break;
          case "!": encodedText += ";"; break;
          case ">": encodedText += "+"; break;
          case "<": encodedText += "("; break;
          case "#": encodedText += ":"; break;
          case "%": encodedText += "="; break;
          case ";": encodedText += "—"; break;
          case "\"": encodedText += "f"; break;
          default: encodedText += this.text[character];
        }
      }
      return encodedText;
    },
    decodedText() {
      let decodedText = "";
      for (let character in this.text) {
        switch (this.text[character]) {
          case "x": decodedText += "a"; break;
          case "d": decodedText += "b"; break;
          case ",": decodedText += "c"; break;
          case "\"": decodedText += "d"; break;
          case "l": decodedText += "e"; break;
          case "k": decodedText += "f"; break;
          case "n": decodedText += "g"; break;
          case "o": decodedText += "h"; break;
          case "-": decodedText += "i"; break;
          case "z": decodedText += "j"; break;
          case "u": decodedText += "k"; break;
          case "t": decodedText += "l"; break;
          case " ": decodedText += "m"; break;
          case "c": decodedText += "n"; break;
          case "h": decodedText += "o"; break;
          case "e": decodedText += "p"; break;
          case "g": decodedText += "q"; break;
          case "j": decodedText += "r"; break;
          case "y": decodedText += "s"; break;
          case "i": decodedText += "t"; break;
          case "p": decodedText += "u"; break;
          case "a": decodedText += "v"; break;
          case "m": decodedText += "w"; break;
          case "b": decodedText += "x"; break;
          case "s": decodedText += "y"; break;
          case "w": decodedText += "z"; break;
          case "r": decodedText += " "; break;
          case "X": decodedText += "A"; break;
          case "D": decodedText += "B"; break;
          case "V": decodedText += "C"; break;
          case "F": decodedText += "D"; break;
          case "L": decodedText += "E"; break;
          case "K": decodedText += "F"; break;
          case "N": decodedText += "G"; break;
          case "O": decodedText += "H"; break;
          case "Q": decodedText += "I"; break;
          case "Z": decodedText += "J"; break;
          case "U": decodedText += "K"; break;
          case "T": decodedText += "L"; break;
          case "C": decodedText += "N"; break;
          case "H": decodedText += "O"; break;
          case "E": decodedText += "P"; break;
          case "G": decodedText += "Q"; break;
          case "J": decodedText += "R"; break;
          case "Y": decodedText += "S"; break;
          case "I": decodedText += "T"; break;
          case "P": decodedText += "U"; break;
          case "A": decodedText += "V"; break;
          case "M": decodedText += "W"; break;
          case "B": decodedText += "X"; break;
          case "S": decodedText += "Y"; break;
          case "W": decodedText += "Z"; break;
          case "?": decodedText += ","; break;
          case "!": decodedText += "."; break;
          case ")": decodedText += "("; break;
          case "<": decodedText += ")"; break;
          case ".": decodedText += "—"; break;
          case ">": decodedText += "-"; break;
          case "#": decodedText += "+"; break;
          case "q": decodedText += "="; break;
          case "v": decodedText += ":"; break;
          case "%": decodedText += "?"; break;
          case ";": decodedText += "!"; break;
          case "+": decodedText += ">"; break;
          case "(": decodedText += "<"; break;
          case ":": decodedText += "#"; break;
          case "=": decodedText += "%"; break;
          case "—": decodedText += ";"; break;
          case "f": decodedText += "\""; break;
          default: decodedText += this.text[character];
        }
      }
      return decodedText;
    }
  },
  methods: {
    copyEncodedText() {
      const link = document.createElement("textArea");
      link.value = this.encodedText;
      link.style.fontSize = "18px";
      document.getElementById("output").appendChild(link);
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
      document.getElementById("output").removeChild(link);
      this.showEncodedTooltip = true;
    }
  }
}
</script>

<style lang="scss" scoped>
#text {
  resize: none;
  width: calc(100% - 16px);
  border: 3px solid $grey;
  border-radius: 3px;
  font-size: 24px;
  margin-bottom: 10px;
  padding: 5px;
  transition-duration: 0.3s;
  &:focus {
    border-color: $secondary-colour;
  }
}
#output {
  font-size: 24px;
  cursor: pointer;
  display: table;
  position: relative;
  background-color: $white;
  display: table;
  hr {
    border-color: $grey;
  }
  .tooltip {
    position: absolute;
    bottom: calc(50% + 10px);
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $grey;
    color: $black;
    font-size: 20px;
    border-radius: 5px;
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
</style>