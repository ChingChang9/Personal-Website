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
          <div>
            Hi! I am Ching Chang, a 17-year old high school student who loves making
            websites in his free time
          </div>
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
          <div class="title">I love playing with</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>Vue.js</div>
          <div>Photoshop</div>
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
          <div>PHP</div>
          <div>Python</div>
          <div>Rust</div>
          <div>WordPress</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/other-sites-i-made.webp" type="image/webp" />
          <source srcset="@/assets/about-me/other-sites-i-made.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/other-sites-i-made.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Other Sites I made</div>
          <a href="https://www.plantforever.org" target="_blank" rel="noopener noreferrer">PlantForever</a>
          <a href="https://wread.netlify.com" target="_blank" rel="noopener noreferrer">Wread</a>
          <a href="https://dorpn.netlify.com" target="_blank" rel="noopener noreferrer">Dorpn</a>
          <router-link :to="{ name: 'Contact' }" class="title" style="font-size: 20px; margin: 0;">Get yours now!</router-link>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/family.webp" type="image/webp" />
          <source srcset="@/assets/about-me/family.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/family.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Family</div>
          <div>Sibling: 1 older sister</div>
          <div>Pet: null</div>
          <div>Ethnicity: Taiwanese</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/music.webp" type="image/webp" />
          <source srcset="@/assets/about-me/music.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/music.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Music</div>
          <div>Instruments: Piano && Violin</div>
          <div>Musicians: Frédéric Chopin && Eminem</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/sport.webp" type="image/webp" />
          <source srcset="@/assets/about-me/sport.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/sport.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Sport</div>
          <div>Sport: Basketball</div>
          <div>Team: LA Lakers</div>
          <div>Player: Kobe Bryant</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/literature.webp" type="image/webp" />
          <source srcset="@/assets/about-me/literature.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/literature.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Literature</div>
          <div>Genre: Fiction</div>
          <div>Book: Demonata</div>
          <div>Movie: Monsters, Inc.</div>
          <div>TV Show: Spongebob Squarepants</div>
        </div>
      </div>

      <div class="circle">
        <picture>
          <source srcset="@/assets/about-me/trivia.webp" type="image/webp" />
          <source srcset="@/assets/about-me/trivia.jpg" type="image/jpeg" />
          <img src="@/assets/about-me/trivia.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title">Trivia</div>
          <div>Animal: Dog</div>
          <div>Food: Salad</div>
          <div>Colour: Green</div>
          <div>Text Editor: Atom</div>
        </div>
      </div>

      <a :href="Resume" class="circle" download>
        <picture>
          <source srcset="@/assets/pictures/headshot.webp" type="image/webp" />
          <source srcset="@/assets/pictures/headshot.jpg" type="image/jpeg" />
          <img src="@/assets/pictures/headshot.jpg" alt="Ching Chang" />
        </picture>
        <div class="text">
          <div class="title" style="margin-bottom: 0;">Download My Resume</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Resume from "@/assets/pdf/ChangChing.pdf";

export default {
  name: "AboutMe",
  metaInfo: {
    title: "About Me",
    meta: [
      { name: "description", content: "Background information about Ching Chang, a 17-year old high school student who loves making websites in his free time. Email him! He can make websites for you!" },
      { name: "keywords", content: "Ching Chang, personal website, blog, creative, designer, Edmonton, Alberta, web developer, freelance, example" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/about-me" }
    ]
  },
  data() {
    return {
      Resume
    };
  }
};
</script>

<style lang="scss" scoped>
#about-me {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 10px);
  .circle {
    position: relative;
    width: 250px;
    height: 250px;
    border: 10px $secondary-colour solid;
    border-radius: 50%;
    margin: 0 10px 30px 0;
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
      text-shadow: 0 0 2px $black, 0 0 2px $black;
      .title {
        font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
        font-size: 24px;
        color: $primary-colour;
        margin-bottom: 0.5em;
      }
      a:not(:hover) {
        color: $white;
      }
    }
  }
  #name {
    width: 325px;
    height: 325px;
    .text .title {
      font-size: 44px;
    }
  }
}
@media (max-width: 450px) {
  #about-me {
    width: calc(100vw + 10px);
    margin-left: -40px;
  }
}
@media (max-width: 375px) {
  #about-me {
    width: calc(100vw + 10px);
    margin-left: -15px;
  }
}
@media (max-width: 345px) {
  #about-me #name {
    width: 280px;
    height: 280px;
    .text .title {
      font-size: 40px;
      margin-bottom: 10px;
    }
  }
}
</style>