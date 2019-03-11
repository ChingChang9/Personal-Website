<template>
  <div>
    <div id="topic">Poems</div>
    <div id="line"></div>
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

    <div class="poem punchline">
      <div class="poem-type">P<span>unchline</span></div>
      <div class="title">Fair Friend</div>
      <div class="break"></div>
      <div class="verse">
        <div>General Outcome 5 is thy biggest foe</div>
        <div>'T all started at the hour seating plan ceased being in rows</div>
        <div>Judging eyes thee need not bestow</div>
        <div>If thee seek to stay with the status quo</div>
        <div><em>False face must hide what the false heart doth know</em></div>
        <br />
        <div>Group projects thee shall be aware</div>
        <div>One false move tips o'er all nightmares</div>
        <div>Pay attention to who's in thy pair</div>
        <div>The one with prayers? Or the one who swears?</div>
        <div>All folks will change and thee will be in a place where</div>
        <div><em>Fair is foul, foul is fair</em></div>
        <br />
        <div>Life as a magnet, no longer free</div>
        <div>Rules restrict him not, gents let him be</div>
        <div>Voovs had it right, 'tis too late to flee</div>
        <div>Possess no wit if thee cries out Reee</div>
        <div>Rather, thee shall say, <em>Had I three ears, I'd hear thee</em></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Poems",
  mounted() {
    this.animateScroll();
    window.addEventListener("resize", this.animateScroll);
    window.addEventListener("scroll", this.animateScroll);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.animateScroll);
    window.removeEventListener("scroll", this.animateScroll);
  },
  methods: {
    animateScroll() {
      for (let index = 0; index < document.getElementsByClassName("poem").length; index++) {
        if (window.innerHeight > document.getElementsByClassName("poem")[index].getClientRects()[0].top) {
          document.getElementsByClassName("poem")[index].classList.add("slide-up");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.poem {
  background-color: $shaded-white;
  text-align: center;
  border-radius: 25px;
  border: 2px solid $secondary-colour;
  display: inline-block;
  padding: 15px;
  margin: 0px 20px 20px 0px;
  font-size: 20px;
  vertical-align: top;
  box-shadow: 2px 2px 8px $black;
  opacity: 0;
  transition: 1s;
  transform: translateY(100px);
  &.slide-up {
    opacity: 1;
    transform: translateY(0px);
  }
  .title {
    font-size: 36px;
    font-weight: 600;
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
      em {
        font-weight: 600;
      }
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
  font-family: arial;
  text-shadow: 2px 2px 3px $black;
  cursor: pointer;
  float: right;
  box-shadow: inset -1px -1px 3px $black;
  transition-duration: 0.5s;
  span {
    transition-duration: 0s;
    transition-timing-function: cubic-bezier(0.2, 0, 0.4, 0);
    opacity: 0;
    position: absolute;
  }
  .alexandrine & {
    background-color: $secondary-colour;
    padding: 6px 12px;
    &:hover {
      padding-right: 115px;
      transition-duration: 1s;
      span {
        opacity: 1;
        transition-duration: 1s;
      }
    }
  }
  .freestyle & {
    background-color: $tertiary-colour;
    padding: 7px 13px 6px 12px;
    &:hover {
      padding-right: 90px;
      transition-duration: 1s;
      span {
        opacity: 1;
        transition-duration: 1s;
      }
    }
  }
  .haiku & {
    background-color: $black;
    padding: 7px 12px 6px 12px;
    &:hover {
      padding-right: 53px;
      transition-duration: 1s;
      span {
        opacity: 1;
        transition-duration: 1s;
      }
    }
  }
  .punchline & {
    background-color: $primary-colour;
    padding: 6px 12px;
    &:hover {
      padding-right: 95px;
      transition-duration: 1s;
      span {
        opacity: 1;
        transition-duration: 1s;
      }
    }
  }
}
</style>