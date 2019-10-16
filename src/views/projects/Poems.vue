<template>
  <div>
    <div id="topic">Poems</div>
    <div id="line"></div>

    <div id="header">
      <div class="poem-model alexandrine">Alexandrine</div>
      <div class="poem-description">
        12 syllables per line, each line must be split by a comma into two 6 syllables phrases.
        Line 1 must rhyme with line 2, line 3 must rhyme with line 4. Everything must follow iambic
        pentameter
      </div>
      <div class="poem-model haiku">Haiku</div>
      <div class="poem-description">3 lines. Each line must have exactly 5, 7, 5 syllables respectively</div>
      <div class="poem-model allusion">Allusion</div>
      <div class="poem-description">Alludes to a famous piece of work</div>
      <div class="poem-model freestyle">Freestyle</div>
      <div class="poem-description">I do what I want</div>
    </div>

    <div id="poems">
      <div class="poem alexandrine">
        <div class="poem-type">A<span>lexandrine</span></div>
        <div class="title">Historical Investigation</div>
        <div class="break"></div>
        <div class="verse">
          <div>No thesis heads my work, shall I restart anew</div>
          <div>My mind's going berserk, the social research’s due</div>
          <div>To get my mark much higher, more time must I acquire</div>
          <div>Dear Balog I admire, extension I desire</div>
        </div>
      </div>

      <div class="poem haiku">
        <div class="poem-type">H<span>aiku</span></div>
        <div class="title">IB</div>
        <div class="break"></div>
        <div class="verse">
          <div>Due dates make me weep</div>
          <div>Depression is lurking deep</div>
          <div>IB murders sleep</div>
        </div>
      </div>

      <div class="poem allusion">
        <div class="poem-type">A<span>llusion</span></div>
        <div class="title">Fair Friend</div>
        <div class="break"></div>
        <div class="verse">
          <div>General Outcome 5 is thy biggest foe</div>
          <div>'T all started at the hour seating plan ceased being in rows</div>
          <div>Judging eyes thou need not bestow</div>
          <div>If thou seek to stay with the status quo</div>
          <div class="quote">False face must hide what the false heart doth know</div>
          <br />
          <div>Group projects thou shalt beware</div>
          <div>One false move tips o'er all nightmares</div>
          <div>Pay attention to who's in thy pair</div>
          <div>The one with prayers? Or the one who swears?</div>
          <div>All folks will change and thou wilt beest in a place where</div>
          <div class="quote">Fair is foul, foul is fair</div>
          <br />
          <div>Life as a magnet, no longer free</div>
          <div>Rules restrict him not, gents let him be</div>
          <div>Voovs had it right, 'tis too late to flee</div>
          <div>Possess no wit if thou cries out Reee</div>
          <div>Rather, thou shalt say: <span class="quote">Had I three ears, I'd hear thee</span></div>
        </div>
      </div>

      <div class="poem freestyle">
        <div class="poem-type">F<span>reestyle</span></div>
        <div class="title">Favourite Food</div>
        <div class="break"></div>
        <div class="verse">
          <div>As I swish the clear solution in my glass</div>
          <div>contagious smell spreads in the air</div>
          <div>The delightful odour catches my attention</div>
          <div>I burst into joyful tears</div>
          <br />
          <div>Never have I found something so smooth</div>
          <div>within my range and reach</div>
          <div>The beverage that splashes on every tooth</div>
          <div>has a name of <em>Bleach</em></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Poems",
  metaInfo: {
    title: "Poems",
    meta: [
      { name: "description", content: "Funny poems about school, artistically crafted by an English IB student. Relatable stories expressed through clever rhymes and beautiful metaphors." },
      { name: "keywords", content: "poems, Ching, Chang, funny, Shakespeare, beautiful, Alexandrine Verse, punchline, rhyme, creative, relatable" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/poems" }
    ]
  },
  mounted() {
    this.animateCards();
    window.addEventListener("resize", this.animateCards);
    window.addEventListener("scroll", this.animateCards);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.animateCards);
    window.removeEventListener("scroll", this.animateCards);
  },
  methods: {
    animateCards() {
      for (let index = 0; index < document.querySelectorAll(".poem").length; index++) {
        if (window.innerHeight > document.querySelectorAll(".poem")[index].getClientRects()[0].top) {
          document.querySelectorAll(".poem")[index].classList.add("slide-up");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  border: 2px solid $black;
  border-radius: 22px;
  display: flex;
  justify-content: space-around;
  margin: -25px 0 25px 0;
  font-size: 22px;
  .poem-model {
    display: inline-block;
    color: $white;
    border-radius: 22px;
    font-family: PoetsenOne;
    text-shadow: 2px 2px 3px $black;
    box-shadow: inset -1px -1px 3px $black;
    padding: 5px 10px;
    margin: 8px;
    cursor: pointer;
    &.alexandrine {
      background-color: $secondary-colour;
      &:hover {
        + .poem-description {
          display: block;
          z-index: 1;
        }
      }
    }
    &.freestyle {
      background-color: $tertiary-colour;
      &:hover {
        + .poem-description {
          display: block;
          z-index: 1;
        }
      }
    }
    &.haiku {
      background-color: $black;
      &:hover {
        + .poem-description {
          display: block;
          z-index: 1;
        }
      }
    }
    &.allusion {
      background-color: $primary-colour;
      &:hover {
        + .poem-description {
          display: block;
          z-index: 1;
        }
      }
    }
  }
  .poem-description {
    position: absolute;
    background-color: $white;
    border: 2px solid $black;
    border-top-color: $white;
    max-width: 500px;
    padding: 10px 20px;
    margin-top: 51px;
    border-radius: 0 0 15px 15px;
    font-family: PoetsenOne;
    text-align: center;
    display: none;
  }
}
.poem {
  background-color: darken($white, 5%);
  text-align: center;
  border-radius: 25px;
  border: 2px solid $secondary-colour;
  display: inline-block;
  padding: 15px;
  margin: 0px 20px 20px 0px;
  vertical-align: top;
  box-shadow: 2px 2px 8px $black;
  font-family: PoetsenOne;
  font-size: 22px;
  opacity: 0;
  transition: 1s;
  transform: translateY(100px);
  &.slide-up {
    opacity: 1;
    transform: translateY(0px);
  }
  .title {
    color: transparent;
    background-color: $black;
    background-clip: text;
    text-shadow: -1px -1px 1px $primary-colour;
    font-size: 40px;
    margin-bottom: 5px;
  }
  .break {
    height: 1px;
    background-color: $black;
    border-radius: 1px;
  }
  .verse {
    div {
      margin-top: 20px;
    }
    .quote {
      font-style: italic;
      text-decoration: underline;
    }
  }
}
.poem-type {
  position: absolute;
  user-select: none;
  text-align: center;
  color: $white;
  border-radius: 22px;
  font-size: 22px;
  font-family: PoetsenOne;
  text-shadow: 2px 2px 3px $black;
  cursor: pointer;
  float: right;
  box-shadow: inset -1px -1px 3px $black;
  transition-duration: 0.5s;
  span {
    transition-duration: 0s;
    transition-timing-function: cubic-bezier(0.2, 0, 0.4, 0);
    opacity: 0;
    z-index: -1;
    position: absolute;
  }
  .alexandrine & {
    background-color: $secondary-colour;
    padding: 3px 12px 7px 10px;
    &:hover {
      padding-right: 124px;
      transition-duration: 1s;
      span {
        opacity: 1;
        z-index: 1;
        transition-duration: 1s;
      }
    }
  }
  .freestyle & {
    background-color: $tertiary-colour;
    padding: 3px 15px 6px 11px;
    &:hover {
      padding-right: 98px;
      transition-duration: 1s;
      span {
        opacity: 1;
        z-index: 1;
        transition-duration: 1s;
      }
    }
  }
  .haiku & {
    background-color: $black;
    padding: 5px 13px 7px 12px;
    &:hover {
      padding-right: 56px;
      transition-duration: 1s;
      span {
        opacity: 1;
        z-index: 1;
        transition-duration: 1s;
      }
    }
  }
  .allusion & {
    background-color: $primary-colour;
    padding: 3px 12px 7px 10px;
    &:hover {
      padding-right: 82px;
      transition-duration: 1s;
      span {
        opacity: 1;
        z-index: 1;
        transition-duration: 1s;
      }
    }
  }
}

@media (max-width: 1207px) {
  #poems {
    text-align: center;
  }
}
@media (max-width: 642px) {
  #header .poem-description {
    max-width: calc(100% - 130px);
  }
}
@media (max-width: 550px) {
  #header {
    flex-wrap: wrap;
    height: 112px;
    .poem-description {
      margin-top: 111px;
    }
  }
  #poems .poem {
    font-size: 18px;
    .title {
      font-size: 32px;
    }
  }
}
</style>