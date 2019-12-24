<template>
  <div>
    <div id="topic">Projects</div>
    <div id="line"></div>

    <div id="projects">
      <router-link class="card" :to="{ name: 'WordCounter' }">
        <div class="title">Word Counter</div>
        <div class="description">
          If you write anything, on your computer, you need to get
          <span style="text-decoration: line-through;">Grammarly</span> Word Counter
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/word-counter.webp" type="image/webp" />
            <source srcset="@/assets/projects/word-counter.jpg" type="image/jpeg" />
            <img src="@/assets/projects/word-counter.jpg" alt="Ching Chang calculating" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'TypingSpeedTest' }">
        <div class="title">Typing Speed Test</div>
        <div class="description">
          Type as fast as you can in 1 minute to check out your typing speed. Can you go any faster
          than my record of 634?
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/tst.webp" type="image/webp" />
            <source srcset="@/assets/projects/tst.jpg" type="image/jpeg" />
            <img src="@/assets/projects/tst.jpg" alt="Ching Chang typing" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'PhotoGallery' }">
        <div class="title">Photo Gallery</div>
        <div class="description">
          A collection of beautiful photos I took around the world. Join me on my journey by
          enjoying these photos :)
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/photo-gallery.webp" type="image/webp" />
            <source srcset="@/assets/projects/photo-gallery.jpg" type="image/jpeg" />
            <img src="@/assets/projects/photo-gallery.jpg" alt="Photo Gallery" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'IOP' }">
        <div class="title">IOP</div>
        <div class="description">
          An IB internal assessment that discusses the impact of society on one's religion using the
          graphic novel <em>Persepolis</em> by Marjane Satrapi
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/iop.webp" type="image/webp" />
            <source srcset="@/assets/projects/iop.jpg" type="image/jpeg" />
            <img src="@/assets/projects/iop.jpg" alt="IOP" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'HackerTerminal' }">
        <div class="title">Click Me!</div>
        <div class="description">
          Click here so I can hack most files from your computer. Make sure you disable VPN and are
          not on a public server
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/hacker-terminal.webp" type="image/webp" />
            <source srcset="@/assets/projects/hacker-terminal.jpg" type="image/jpeg" />
            <img src="@/assets/projects/hacker-terminal.jpg" alt="Ching Chang the hacker" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'MusicHistory' }">
        <div class="title">Music History</div>
        <div class="description">
          A list of all the terms you need to know for Royal Conservatory Music Hisotry Level 9 and
          10 and their definitions
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/music-history.webp" type="image/webp" />
            <source srcset="@/assets/projects/music-history.jpg" type="image/jpeg" />
            <img src="@/assets/projects/music-history.jpg" alt="Frédéric Chopin" draggable="false" />
          </picture>
        </div>
      </router-link>

      <a class="card" href="https://www.dorpn.com" target="_blank" rel="noopener noreferrer">
        <div class="title">Dorpn</div>
        <div class="description">
          A chat site that does not need you to sign up! Outstanding for makeshift groups as it's
          simple, fast, and that your chat room will be auto-deleted after 2 weeks
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/dorpn.webp" type="image/webp" />
            <source srcset="@/assets/projects/dorpn.jpg" type="image/jpeg" />
            <img src="@/assets/projects/dorpn.jpg" alt="Dorpn" draggable="false" />
          </picture>
        </div>
      </a>

      <router-link class="card" :to="{ name: 'FrozenCountdown' }">
        <div class="title">Frozen 2 Hype</div>
        <div class="description">
          A countdown timer to show the time left until Frozen 2 to come out for the first time in
          forever!
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/frozen-countdown.webp" type="image/webp" />
            <source srcset="@/assets/projects/frozen-countdown.jpg" type="image/jpeg" />
            <img src="@/assets/projects/frozen-countdown.jpg" alt="Ice Castle" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'IBTimer' }">
        <div class="title">IB Timer</div>
        <div class="description">
          Humans start hallucinating after 3 to 4 days without sleep. Is it true or just a hoax?
          Only one way to find out
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/ib-timer.webp" type="image/webp" />
            <source srcset="@/assets/projects/ib-timer.jpg" type="image/jpeg" />
            <img src="@/assets/projects/ib-timer.jpg" alt="IB Timer" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'Poems' }">
        <div class="title">Poems</div>
        <div class="description">
          Relatable stories expressed through clever rhymes and beautiful metaphors
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/poems.webp" type="image/webp" />
            <source srcset="@/assets/projects/poems.jpg" type="image/jpeg" />
            <img src="@/assets/projects/poems.jpg" alt="William Shakespeare Ricardo Milos Hit or Miss" draggable="false" />
          </picture>
        </div>
      </router-link>

      <a class="card" href="https://wread.netlify.com" target="_blank" rel="noopener noreferrer">
        <div class="title">Wread</div>
        <div class="description">
          A JA Company that strives to promote literacy for all ages, and spread knowledge,
          communication, and creativity to our world
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/wread.webp" type="image/webp" />
            <source srcset="@/assets/projects/wread.jpg" type="image/jpeg" />
            <img src="@/assets/projects/wread.jpg" alt="Wread" draggable="false" />
          </picture>
        </div>
      </a>

      <router-link class="card" :to="{ name: 'Quotes' }">
        <div class="title">Quotes</div>
        <div class="description">
          Motivational quotes that carry the important mindsets that make you a better person
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/quotes.webp" type="image/webp" />
            <source srcset="@/assets/projects/quotes.jpg" type="image/jpeg" />
            <img src="@/assets/projects/quotes.jpg" alt="Ching Chang the thinker" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'GradeCalculator' }">
        <div class="title">Grade Calculator</div>
        <div class="description">
          Calculate how your average would change if you get a certain score on an assessment, or
          calculate how much you need to score to get a certain average (In development)
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/grade-calculator.webp" type="image/webp" />
            <source srcset="@/assets/projects/grade-calculator.jpg" type="image/jpeg" />
            <img src="@/assets/projects/grade-calculator.jpg" alt="Ching Chang living his life" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'MemeGenerator' }">
        <div class="title">Meme Generator</div>
        <div class="description">
          Put in a short piece of text and this will turn it into a spongebob mocking meme!
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/meme-generator.webp" type="image/webp" />
            <source srcset="@/assets/projects/meme-generator.jpg" type="image/jpeg" />
            <img src="@/assets/projects/meme-generator.jpg" alt="Spongebob Mocking Meme" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'CubicFormula' }">
        <div class="title">Cubic Formula</div>
        <div class="description">
          Algebraically calculates the roots of any cubic functions including the imaginary roots.
          EXPRESSED IN EXACT VALUES!!!
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/cubic-formula.webp" type="image/webp" />
            <source srcset="@/assets/projects/cubic-formula.jpg" type="image/jpeg" />
            <img src="@/assets/projects/cubic-formula.jpg" alt="Ching Chang praising his Math IA" draggable="false" />
          </picture>
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'ChineseOralMidterm' }">
        <div class="title">Chinese Midterm</div>
        <div class="description">
          A presentation for my chinese oral midterm that describes my dream career and my
          qualification of it
        </div>
        <div class="image-container">
          <picture>
            <source srcset="@/assets/projects/cubic-formula.webp" type="image/webp" />
            <source srcset="@/assets/projects/cubic-formula.jpg" type="image/jpeg" />
            <img src="@/assets/projects/cubic-formula.jpg" alt="Spongebob Mocking Meme" draggable="false" />
          </picture>
        </div>
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
      { name: "keywords", content: "Ching, Chang, web apps, creative, useful, projects, practice, javascript, fun, examples, ideas" }
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
  justify-content: space-evenly;
  flex-wrap: wrap;
  .card {
    user-select: none;
    background-color: darken($white, 5%);
    border-top: 4px solid $secondary-colour;
    border-radius: 4px;
    width: 280px;
    height: 365px;
    min-width: 264px;
    text-align: center;
    margin: 0 10px 40px;
    padding: 10px 13px;
    text-decoration: none;
    box-shadow: inset -1px -1px 4px $black, 0 4px 12px rgba($black, 0.3);
    transform: translateY(100px);
    opacity: 0;
    .title {
      font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
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
    .image-container {
      display: flex;
      width: 100%;
      height: 200px;
      margin-left: -3px;
      border: 3px dotted $secondary-colour;
      border-radius: 3px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
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

@media (max-width: 320px) {
  #projects .card .title {
    font-size: 28px;
  }
}
</style>