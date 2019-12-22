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
    title: "Word Counter",
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
          case "m": encodedText += "l"; break;
          case "w": encodedText += "m"; break;
          case "g": encodedText += "n"; break;
          case "h": encodedText += "o"; break;
          case "u": encodedText += "p"; break;
          case "i": encodedText += "q"; break;
          case "e": encodedText += "r"; break;
          case "k": encodedText += "s"; break;
          case "l": encodedText += "t"; break;
          case "y": encodedText += "u"; break;
          case "c": encodedText += "v"; break;
          case "z": encodedText += "w"; break;
          case "o": encodedText += "x"; break;
          case "s": encodedText += "y"; break;
          case "j": encodedText += "z"; break;
          default: encodedText += character;
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
          case "l": decodedText += "m"; break;
          case "m": decodedText += "w"; break;
          case "n": decodedText += "g"; break;
          case "o": decodedText += "h"; break;
          case "p": decodedText += "u"; break;
          case "q": decodedText += "i"; break;
          case "r": decodedText += "e"; break;
          case "s": decodedText += "k"; break;
          case "t": decodedText += "l"; break;
          case "u": decodedText += "y"; break;
          case "v": decodedText += "c"; break;
          case "w": decodedText += "z"; break;
          case "x": decodedText += "o"; break;
          case "y": decodedText += "s"; break;
          case "z": decodedText += "j"; break;
          default: decodedText += character;
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