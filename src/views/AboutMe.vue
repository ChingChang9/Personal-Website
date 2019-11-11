<template>
  <div>
    <div id="topic">About Me</div>
    <div id="line"></div>
    <div id="about-me">
      <div id="name" class="circle">
        <picture>
          <source srcset="@/assets/about-me/ching-chang.webp" type="image/webp" />
          <source srcset="@/assets/about-me/ching-chang.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/ching-chang.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Ching Chang</div>
          <div>Hi! I am Ching Chang, a 17-year old high school student who loves making
            websites in his free time</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/i-can-speak.webp" type="image/webp" />
          <source srcset="@/assets/about-me/i-can-speak.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/i-can-speak.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">I can speak</div>
          <div>English</div>
          <div>Chinese</div>
          <div>Taiwanese</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/i-love-to-code-in.webp" type="image/webp" />
          <source srcset="@/assets/about-me/i-love-to-code-in.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/i-love-to-code-in.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">I love to code in</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>Vue.js</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/i-know-how-to-use.webp" type="image/webp" />
          <source srcset="@/assets/about-me/i-know-how-to-use.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/i-know-how-to-use.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">I know how to use</div>
          <div>jQuery</div>
          <div>Photoshop</div>
          <div>PHP</div>
          <div>Python</div>
          <div>Rust</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/trivia-1.webp" type="image/webp" />
          <source srcset="@/assets/about-me/trivia-1.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/trivia-1.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Trivia</div>
          <div>Sibling: 1 older sister</div>
          <div>Pet: null</div>
          <div>Animal: Dog</div>
          <div>Food: Salad</div>
          <div>Colour: Green</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/trivia-2.webp" type="image/webp" />
          <source srcset="@/assets/about-me/trivia-2.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/trivia-2.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Trivia</div>
          <div>Instruments: Piano && Violin</div>
          <div>Musicians: Frédéric Chopin && Eminem</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/trivia-3.webp" type="image/webp" />
          <source srcset="@/assets/about-me/trivia-3.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/trivia-3.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Trivia</div>
          <div>Sport: Basketball</div>
          <div>Team: LA Lakers</div>
          <div>Player: Kobe Bryant</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/trivia-4.webp" type="image/webp" />
          <source srcset="@/assets/about-me/trivia-4.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/trivia-4.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Trivia</div>
          <div>Book: Demonata</div>
          <div>Movie: Infinity War</div>
          <div>TV Show: Spongebob Squarepants</div>
        </div>
      </div>

      <a href="https://www.plantforever.org" target="_blank" rel="noopener noreferrer" class="circle">
        <picture>
          <source srcset="@/assets/about-me/plantforever.webp" type="image/webp" />
          <source srcset="@/assets/about-me/plantforever.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/plantforever.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title" style="color: #262767;">PlantForever</div>
          <div>Support our non-profit organization to combat climate crisis and spread awareness</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  metaInfo: {
    title: "About Me",
    meta: [
      { name: "description", content: "Background information about Ching Chang, a 17-year old high school student who loves making websites in his free time. Email him! He can make websites for you!" },
      { name: "keywords", content: "Ching Chang, personal website, Edmonton, Alberta, student, high school, Lillian Osborne, web developer, programmer, full stack, freelance" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/about-me" }
    ]
  }
};
</script>

<style lang="scss" scoped>
#about-me {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .circle {
    position: relative;
    width: 250px;
    height: 250px;
    border: 10px $secondary-colour solid;
    border-radius: 50%;
    margin-bottom: 30px;
    color: $white;
    img {
      user-select: none;
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 50%;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 20px);
      height: 100%;
      padding: 0 10px;
      font-size: 18px;
      text-align: center;
      text-shadow: 0 0 1px $black;
      .title {
        font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
        font-size: 24px;
        color: $primary-colour;
        margin-bottom: 0.5em;
      }
    }
  }
  #name {
    width: 300px;
    height: 300px;
    .text .title {
      font-size: 44px;
    }
  }
}
</style>