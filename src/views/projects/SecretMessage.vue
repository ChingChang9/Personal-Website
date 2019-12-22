<template>
  <div>
    <div id="topic">Secret Message</div>
    <div id="line"></div>
    <textarea id="text" v-model="text" placeholder="Enter your text here" rows="6"></textarea>
    <div id="output">
      <div>Encoded: {{ encodedText }}</div>
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
      text: ""
    };
  },
  computed: {
    encodedText() {
      let encodedText = "";
      for (let character in this.text) {
        switch (this.text[character]) {
          case "v": encodedText += "a"; break;
          case "x": encodedText += "b"; break;
          case "n": encodedText += "c"; break;
          case "b": encodedText += "d"; break;
          case "p": encodedText += "e"; break;
          case "d": encodedText += "f"; break;
          case "q": encodedText += "g"; break;
          case "a": encodedText += "h"; break;
          case "t": encodedText += "i"; break;
          case "r": encodedText += "j"; break;
          case "f": encodedText += "k"; break;
          case "e": encodedText += "l"; break;
          case "w": encodedText += "m"; break;
          case "g": encodedText += "n"; break;
          case "h": encodedText += "o"; break;
          case "u": encodedText += "p"; break;
          case "i": encodedText += "q"; break;
          case " ": encodedText += "r"; break;
          case "k": encodedText += "s"; break;
          case "l": encodedText += "t"; break;
          case "y": encodedText += "u"; break;
          case "c": encodedText += "v"; break;
          case "z": encodedText += "w"; break;
          case "o": encodedText += "x"; break;
          case "s": encodedText += "y"; break;
          case "j": encodedText += "z"; break;
          case "m": encodedText += " "; break;
          case "V": encodedText += "A"; break;
          case "X": encodedText += "B"; break;
          case "N": encodedText += "C"; break;
          case "B": encodedText += "D"; break;
          case "P": encodedText += "E"; break;
          case "D": encodedText += "F"; break;
          case "Q": encodedText += "G"; break;
          case "A": encodedText += "H"; break;
          case "T": encodedText += "I"; break;
          case "R": encodedText += "J"; break;
          case "F": encodedText += "K"; break;
          case "M": encodedText += "L"; break;
          case "W": encodedText += "M"; break;
          case "G": encodedText += "N"; break;
          case "H": encodedText += "O"; break;
          case "U": encodedText += "P"; break;
          case "I": encodedText += "Q"; break;
          case "E": encodedText += "R"; break;
          case "K": encodedText += "S"; break;
          case "L": encodedText += "T"; break;
          case "Y": encodedText += "U"; break;
          case "C": encodedText += "V"; break;
          case "Z": encodedText += "W"; break;
          case "O": encodedText += "X"; break;
          case "S": encodedText += "Y"; break;
          case "J": encodedText += "Z"; break;
          case ",": encodedText += "?"; break;
          case ".": encodedText += "!"; break;
          case "(": encodedText += ">"; break;
          case ")": encodedText += "<"; break;
          case "—": encodedText += "}"; break;
          case "-": encodedText += "^"; break;
          case "+": encodedText += "#"; break;
          case "=": encodedText += "/"; break;
          case ":": encodedText += "%"; break;
          default: encodedText += this.text[character];
        }
      }
      return encodedText;
    },
    decodedText() {
      let decodedText = "";
      for (let character in this.text) {
        switch (this.text[character]) {
          case "a": decodedText += "v"; break;
          case "b": decodedText += "x"; break;
          case "c": decodedText += "n"; break;
          case "d": decodedText += "b"; break;
          case "e": decodedText += "p"; break;
          case "f": decodedText += "d"; break;
          case "g": decodedText += "q"; break;
          case "h": decodedText += "a"; break;
          case "i": decodedText += "t"; break;
          case "j": decodedText += "r"; break;
          case "k": decodedText += "f"; break;
          case "l": decodedText += "e"; break;
          case "m": decodedText += "w"; break;
          case "n": decodedText += "g"; break;
          case "o": decodedText += "h"; break;
          case "p": decodedText += "u"; break;
          case "q": decodedText += "i"; break;
          case "r": decodedText += " "; break;
          case "s": decodedText += "k"; break;
          case "t": decodedText += "l"; break;
          case "u": decodedText += "y"; break;
          case "v": decodedText += "c"; break;
          case "w": decodedText += "z"; break;
          case "x": decodedText += "o"; break;
          case "y": decodedText += "s"; break;
          case "z": decodedText += "j"; break;
          case " ": decodedText += "m"; break;
          case "A": decodedText += "V"; break;
          case "B": decodedText += "X"; break;
          case "C": decodedText += "N"; break;
          case "D": decodedText += "B"; break;
          case "E": decodedText += "P"; break;
          case "F": decodedText += "D"; break;
          case "G": decodedText += "Q"; break;
          case "H": decodedText += "A"; break;
          case "I": decodedText += "T"; break;
          case "J": decodedText += "R"; break;
          case "K": decodedText += "F"; break;
          case "L": decodedText += "M"; break;
          case "M": decodedText += "W"; break;
          case "N": decodedText += "G"; break;
          case "O": decodedText += "H"; break;
          case "P": decodedText += "U"; break;
          case "Q": decodedText += "I"; break;
          case "R": decodedText += "E"; break;
          case "S": decodedText += "K"; break;
          case "T": decodedText += "L"; break;
          case "U": decodedText += "Y"; break;
          case "V": decodedText += "C"; break;
          case "W": decodedText += "Z"; break;
          case "X": decodedText += "O"; break;
          case "Y": decodedText += "S"; break;
          case "Z": decodedText += "J"; break;
          case "?": decodedText += ","; break;
          case "!": decodedText += "."; break;
          case ">": decodedText += "("; break;
          case "<": decodedText += ")"; break;
          case "}": decodedText += "—"; break;
          case "^": decodedText += "-"; break;
          case "#": decodedText += "+"; break;
          case "/": decodedText += "="; break;
          case "%": decodedText += ":"; break;
          default: decodedText += this.text[character];
        }
      }
      return decodedText;
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
}
</style>