<template>
  <div>
    <div id="topic">Projects</div>
    <div id="line"></div>

    <div id="projects">
      <router-link class="card" :to="{ name: 'WordCounter' }" draggable="false">
        <h1 class="title">Word Counter</h1>
        <div class="description">
          If you write anything, on your computer, you need to get Word Counter. If you write pretty
          much all day everyday, Word Counter will make your writing better
        </div>
        <img src="@/assets/projects/wordCounter.jpg" draggable="false" />
      </router-link>

      <router-link class="card" :to="{ name: 'TypingSpeedTest' }" draggable="false">
        <h1 class="title">Typing Speed Test</h1>
        <div class="description">
          Type as fast as you can in 1 minute to check out your typing speed. The average speed of
          professional typers is around 350 CPM. Can you go any faster than my record of 592?
        </div>
        <img src="@/assets/projects/tst.jpg" draggable="false" />
      </router-link>

      <router-link class="card" :to="{ name: 'HackerTerminal' }" draggable="false">
        <h1 class="title">Click Me!</h1>
        <div class="description">
          Click here so that I can hack most of the files from your computer. Make sure you disable
          VPN and that you are not on a public server
        </div>
        <img src="@/assets/projects/hackerTerminal.jpg" draggable="false" />
      </router-link>

      <a class="card" href="https://dorpn.com" target="Blacklank" draggable="false">
        <h1 class="title">Dorpn</h1>
        <div class="description">
          A chat site that does not need you to sign up! Outstanding for makeshift groups as it's
          simple, fast, and that your chat room will be automatically deleted after 2 weeks
        </div>
        <img src="@/assets/projects/dorpn.jpg" draggable="false" />
      </a>

      <router-link class="card" :to="{ name: 'FrozenCountdown' }" draggable="false">
        <h1 class="title">Frozen 2 Hype</h1>
        <div class="description">
          A countdown timer to show the time left until Frozen 2 to come out for the first time in
          forever!
        </div>
        <img src="@/assets/projects/frozen.jpg" draggable="false" />
      </router-link>

      <router-link class="card" :to="{ name: 'WorkPlan' }" draggable="false">
        <h1 class="title">JA Production Plan</h1>
        <div class="description">
          A work plan for our Junior Achievement company - Wread. Equally distributes the work
          between each person on each week.
        </div>
        <img src="@/assets/projects/workplan.jpg" draggable="false" />
      </router-link>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderBlack.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderWhite.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderBlack.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderWhite.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderBlack.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false" @click="revealTask">
        <h1 class="title">Chang Ching</h1>
        <div class="description">
          If you are reading this, good job to you for noticing the difference. What does it do? Oh,
          nothing! This is simply just another placeholder
        </div>
        <img src="@/assets/projects/placeholderWhite.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderBlack.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderWhite.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderBlack.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderWhite.jpg" draggable="false" />
      </a>

      <a class="card" style="cursor: pointer;" draggable="false">
        <h1 class="title">Ching Chang</h1>
        <div class="description">
          Don't bother reading this. It's just a placeholder because I don't have enough projects
          yet. The projects below are placeholders as well
        </div>
        <img src="@/assets/projects/placeholderBlack.jpg" draggable="false" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      clicked: 0
    };
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
      for (let index = 0; index < document.getElementsByClassName("card").length; index++) {
        if (window.innerHeight > document.getElementsByClassName("card")[index].getClientRects()[0].top) {
          document.getElementsByClassName("card")[index].classList.add("slide-up");
        }
      }
    },
    revealTask() {
      this.clicked++;
      if (this.clicked === 1) {
        alert("Come on, i Have already told you that this is just a placEholder. why did you ClicK it anyway? Can you not dO it Next time please? anyway, thiS alert bOx is the onLy reason why the placeholder looks differEnt.");
        console.log("Go to the Word Counter and type in the answer of the question below in the larger text area");
      } else if (this.clicked === 2) {
        alert("stop it, get some help");
        console.log("What text editor do I use for web developing?");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#projects {
  text-align: center;
}
.card {
  user-select: none;
  background-color: $shaded-white;
  border-top: 4px solid $secondary-colour;
  border-radius: 4px;
  width: 279px;
  height: 368px;
  text-align: center;
  margin: -20px 10px 50px 10px;
  padding: 10px 16px 10px 10px;
  display: inline-block;
  text-decoration: none;
  box-shadow: inset -1px -1px 4px $black, 0px 4px 12px rgba(68, 70, 74, 0.3);
  opacity: 0;
  transform: translateY(100px);
  .title {
    margin-top: 0px;
    font-size: 30px;
  }
  .description {
    height: 88px;
    margin: -20px 0px 30px 0px;
    font-size: 18px;
    color: $black;
  }
  img {
    border: 3px dotted $secondary-colour;
    border-radius: 3px;
    width: 100%;
    height: 198px;
  }
  &.slide-up {
    transition-duration: 1s;
    opacity: 1;
    transform: translateY(0px);
    &:hover {
      transition-duration: 0.4s;
      box-shadow: inset -1px -1px 4px $black, 2px 6px 12px rgba(68, 70, 74, 0.9);
      transform: translateY(-8px);
    }
  }
}

@media (max-width: 750px) {
  #projects {
    margin-left: 0px;
  }
}
@media (max-width: 400px) {
  .card {
    width: 220px;
    .title {
      font-size: 28px;
    }
    .description {
      height: 110px;
      font-size: 16px;
    }
    img {
      height: 156px;
    }
  }
}
</style>