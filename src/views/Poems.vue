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

    <div class="poem ballade">
      <div class="poem-type">B<span>allade</span></div>
      <div class="title">Title</div>
      <div class="break"></div>
      <div class="verse">
        <div>A ballade as a portfolio piece</div>
        <div>Still needs to be done</div>
      </div>
    </div>

    <div class="poem haiku">
      <div class="poem-type">H<span>aiku</span></div>
      <div class="title">IB</div>
      <div class="break"></div>
      <div class="verse">
        <div>Fortitude takes lead</div>
        <div>Depression be lurking deep</div>
        <div>IB murders sleep</div>
      </div>
    </div>

    <div class="poem freestyle">
      <div class="poem-type">F<span>reestyle</span></div>
      <div class="title">The Job of Eyes</div>
      <div class="break"></div>
      <div class="verse">
        <div>The job of eyes is to be blue, to be brown, to be green, or to be grey</div>
        <div>The job of eyes is to be big, to be small, to be round, to be sharp, or to be flat</div>
        <div>The job of eyes is to stare, to read, to view, and to watch</div>
        <div>The job of eyes is to be tired, to blink, to drop tears, and to rest</div>
        <div>The job of eyes is to show excitement, to express sorrows, and to present madness</div>
        <div>The job of eyes is to shine in the dark, to stand out, and to be recognized</div>
        <div>The job of eyes is to grow on human, and to grow on animals</div>
        <div>The job of eyes is to be connected with other eyes, to give respect, and to tell stories without any words</div>
        <br />
        <div>The job of eyes is to carry Soul</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Poems",
  data() {
    return {

    };
  },
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
    }
  }
}
.poem-type {
  position: absolute;
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
  .ballade & {
    background-color: $primary-colour;
    padding: 6px 13px 6px 12px;
    &:hover {
      padding-right: 72px;
      transition-duration: 1s;
      span {
        opacity: 1;
        transition-duration: 1s;
      }
    }
  }
}
</style>