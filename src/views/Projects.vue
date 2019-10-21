<template>
  <div>
    <div id="topic">Projects</div>
    <div id="line"></div>

    <div id="projects">
      <router-link class="card" :to="{ name: 'WordCounter' }" draggable="false">
        <div class="title">Word Counter</div>
        <div class="description">
          If you write anything, on your computer, you need to get
          <span style="text-decoration: line-through;">Grammarly</span> Word Counter
        </div>
        <picture>
          <source srcset="@/assets/projects/word-counter.webp" type="image/webp" />
          <source srcset="@/assets/projects/word-counter.jpg" type="image/jpg" />
          <img src="@/assets/projects/word-counter.jpg" alt="Ching Chang calculating" draggable="false" />
        </picture>
      </router-link>

      <router-link class="card" :to="{ name: 'TypingSpeedTest' }" draggable="false">
        <div class="title">Typing Speed Test</div>
        <div class="description">
          Type as fast as you can in 1 minute to check out your typing speed. Can you go any faster
          than my record of 608?
        </div>
        <picture>
          <source srcset="@/assets/projects/tst.webp" type="image/webp" />
          <source srcset="@/assets/projects/tst.jpg" type="image/jpg" />
          <img src="@/assets/projects/tst.jpg" alt="Ching Chang typing" draggable="false" />
        </picture>
      </router-link>

      <router-link class="card" :to="{ name: 'PhotoGallery' }" draggable="false">
        <div class="title">Photo Gallery</div>
        <div class="description">
          A collection of beautiful photos I took around the world
        </div>
        <picture>
          <source srcset="@/assets/projects/photo-gallery.webp" type="image/webp" />
          <source srcset="@/assets/projects/photo-gallery.jpg" type="image/jpg" />
          <img src="@/assets/projects/photo-gallery.jpg" alt="Photo Gallery" draggable="false" />
        </picture>
      </router-link>

      <router-link class="card" :to="{ name: 'IOP' }" draggable="false">
        <div class="title">IOP</div>
        <div class="description">
          An IB internal assessment that discusses the impact of society on one's religion using the
          graphic novel <em>Persepolis</em> by Marjane Satrapi
        </div>
        <picture>
          <source srcset="@/assets/projects/iop.webp" type="image/webp" />
          <source srcset="@/assets/projects/iop.jpg" type="image/jpg" />
          <img src="@/assets/projects/iop.jpg" alt="IOP" draggable="false" />
        </picture>
      </router-link>

      <router-link class="card" :to="{ name: 'HackerTerminal' }" draggable="false">
        <div class="title">Click Me!</div>
        <div class="description">
          Click here so that I can hack most of the files from your computer. Make sure you disable
          VPN and that you are not on a public server
        </div>
        <picture>
          <source srcset="@/assets/projects/hacker-terminal.webp" type="image/webp" />
          <source srcset="@/assets/projects/hacker-terminal.jpg" type="image/jpg" />
          <img src="@/assets/projects/hacker-terminal.jpg" alt="Ching Chang the hacker" draggable="false" />
        </picture>
      </router-link>

      <router-link class="card" :to="{ name: 'MusicHistory' }" draggable="false">
        <div class="title">Music History</div>
        <div class="description">
          A list of all the terms you need to know for Royal Conservatory Music Hisotry Level 9 and
          10 and their definitions
        </div>
        <picture>
          <source srcset="@/assets/projects/music-history.webp" type="image/webp" />
          <source srcset="@/assets/projects/music-history.jpg" type="image/jpg" />
          <img src="@/assets/projects/music-history.jpg" alt="Frédéric Chopin" draggable="false" />
        </picture>
      </router-link>

      <a class="card" href="https://www.dorpn.com" target="_blank" rel="noopener noreferrer" draggable="false">
        <div class="title">Dorpn</div>
        <div class="description">
          A chat site that does not need you to sign up! Outstanding for makeshift groups as it's
          simple, fast, and that your chat room will be auto-deleted after 2 weeks
        </div>
        <picture>
          <source srcset="@/assets/projects/dorpn.webp" type="image/webp" />
          <source srcset="@/assets/projects/dorpn.jpg" type="image/jpg" />
          <img src="@/assets/projects/dorpn.jpg" alt="Dorpn" draggable="false" />
        </picture>
      </a>

      <router-link class="card" :to="{ name: 'FrozenCountdown' }" draggable="false">
        <div class="title">Frozen 2 Hype</div>
        <div class="description">
          A countdown timer to show the time left until Frozen 2 to come out for the first time in
          forever!
        </div>
        <picture>
          <source srcset="@/assets/projects/frozen-countdown.webp" type="image/webp" />
          <source srcset="@/assets/projects/frozen-countdown.jpg" type="image/jpg" />
          <img src="@/assets/projects/frozen-countdown.jpg" alt="Ice Castle" draggable="false" />
        </picture>
      </router-link>

      <router-link class="card" :to="{ name: 'IBTimer' }" draggable="false">
        <div class="title">IB Timer</div>
        <div class="description">
          Human start hallucinating after 3 to 4 days without sleep. Is it true or false? Only one
          way to find out
        </div>
        <picture>
          <source srcset="@/assets/projects/ib-timer.webp" type="image/webp" />
          <source srcset="@/assets/projects/ib-timer.jpg" type="image/jpg" />
          <img src="@/assets/projects/ib-timer.jpg" alt="IB Timer" draggable="false" />
        </picture>
      </router-link>

      <router-link class="card" :to="{ name: 'Poems' }" draggable="false">
        <div class="title">Poems</div>
        <div class="description">
          Relatable stories expressed through clever rhymes and beautiful metaphors
        </div>
        <picture>
          <source srcset="@/assets/projects/poems.webp" type="image/webp" />
          <source srcset="@/assets/projects/poems.jpg" type="image/jpg" />
          <img src="@/assets/projects/poems.jpg" alt="William Shakespeare Ricardo Milos Hit or Miss" draggable="false" />
        </picture>
      </router-link>

      <a class="card" href="https://wread.netlify.com" target="_blank" rel="noopener noreferrer" draggable="false">
        <div class="title">Wread</div>
        <div class="description">
          A JA Company that strives to promote literacy for all ages, and support the message of
          spreading knowledge, communication, and creativity to our world
        </div>
        <picture>
          <source srcset="@/assets/projects/wread.webp" type="image/webp" />
          <source srcset="@/assets/projects/wread.jpg" type="image/jpg" />
          <img src="@/assets/projects/wread.jpg" alt="Wread" draggable="false" />
        </picture>
      </a>

      <router-link class="card" :to="{ name: 'Quotes' }" draggable="false">
        <div class="title">Quotes</div>
        <div class="description">
          Motivational quotes that carry the important mindsets that make you a better person
        </div>
        <picture>
          <source srcset="@/assets/projects/quotes.webp" type="image/webp" />
          <source srcset="@/assets/projects/quotes.jpg" type="image/jpg" />
          <img src="@/assets/projects/quotes.jpg" alt="Ching Chang the thinker" draggable="false" />
        </picture>
      </router-link>

      <router-link class="card" :to="{ name: 'GradeCalculator' }" draggable="false">
        <div class="title">Grade Calculator</div>
        <div class="description">
          Calculate how your average would change if you get a certain score on an assessment, or
          calculate how much you need to score to get a certain average (In development)
        </div>
        <picture>
          <source srcset="@/assets/projects/grade-calculator.webp" type="image/webp" />
          <source srcset="@/assets/projects/grade-calculator.jpg" type="image/jpg" />
          <img src="@/assets/projects/grade-calculator.jpg" alt="Ching Chang living his life" draggable="false" />
        </picture>
      </router-link>

      <router-link class="card" :to="{ name: 'MemeGenerator' }" draggable="false">
        <div class="title">Meme Generator</div>
        <div class="description">
          Put in a short piece of text and this will turn it into a spongebob mocking meme!
        </div>
        <picture>
          <source srcset="@/assets/projects/meme-generator.webp" type="image/webp" />
          <source srcset="@/assets/projects/meme-generator.jpg" type="image/jpg" />
          <img src="@/assets/projects/meme-generator.jpg" alt="Spongebob Mocking Meme" draggable="false" />
        </picture>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  metaInfo: {
    title: "Projects",
    meta: [
      { name: "description", content: "Fun and useful web apps that involve intermediate javascript. Great projects to make if you want to practice and significantly enhance your programming skills." },
      { name: "keywords", content: "Ching, Chang, web apps, creative, useful, projects, practice, javascript, fun, examples" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects" }
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
      for (let index = 0; index < document.querySelectorAll(".card").length; index++) {
        if (window.innerHeight > document.querySelectorAll(".card")[index].getClientRects()[0].top) {
          document.querySelectorAll(".card")[index].classList.add("slide-up");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#projects {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .card {
    user-select: none;
    background-color: darken($white, 5%);
    border-top: 4px solid $secondary-colour;
    border-radius: 4px;
    width: 280px;
    height: 365px;
    text-align: center;
    margin: 0px 10px 40px 10px;
    padding: 10px 16px 10px 10px;
    text-decoration: none;
    box-shadow: inset -1px -1px 4px $black, 0px 4px 12px rgba($black, 0.3);
    opacity: 0;
    transform: translateY(100px);
    .title {
      font-family: PoetsenOne, Impact, Arial Black, sans-serif;
      font-size: 32px;
      margin-bottom: 10px;
      color: transparent;
      background-color: $black;
      background-clip: text;
      text-shadow: -1px -1px 2px $primary-colour;
    }
    .description {
      font-size: 18px;
      height: 110px;
      color: $black;
    }
    img {
      border: 3px dotted $secondary-colour;
      border-radius: 3px;
      width: 100%;
      height: 200px;
    }
    &.slide-up {
      transition-duration: 0.8s;
      opacity: 1;
      transform: translateY(0px);
      &:hover {
        transition-duration: 0.3s;
        box-shadow: inset -1px -1px 4px $black, 2px 6px 12px rgba($black, 0.9);
        transform: translateY(-8px);
      }
    }
  }
}

@media (max-width: 750px) {
  #projects {
    margin-left: 0px;
  }
}
@media (max-width: 400px) {
  #projects .card {
    .title {
      font-size: 26px;
    }
    .description {
      font-size: 16px;
    }
    img {
      margin-top: 7px;
    }
  }
}
</style>