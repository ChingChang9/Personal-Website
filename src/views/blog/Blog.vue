<template>
  <div>
    <div id="topic">Blog</div>
    <div id="line"></div>
    <div id="cards-container">
      <router-link class="card" :to="{ name: 'DearPeopleWhoMournForMe' }">
        <picture>
          <source srcset="@/assets/blog/blog/4.webp" type="image/webp" />
          <source srcset="@/assets/blog/blog/4.jpg" type="image/jpeg" />
          <img src="@/assets/blog/blog/4.jpg" alt="writing my unfinished symphonies" draggable="false" />
        </picture>
        <div class="title">#4: Dear People Who Mourn For Me</div>
        <div class="date-written">May 14, 2020</div>
        <div class="excerpt">
          Death is such a ruthless and sadistic heart-taker, for bringing grief to not the target it catches, but the ones that love the victim— perhaps these grieving souls are the true victims.
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'TheoryOfKnowledge' }">
        <picture>
          <source srcset="@/assets/blog/blog/3.webp" type="image/webp" />
          <source srcset="@/assets/blog/blog/3.jpg" type="image/jpeg" />
          <img src="@/assets/blog/blog/3.jpg" alt="Ching Chang thinking" draggable="false" />
        </picture>
        <div class="title">#3: Theory of Knowledge</div>
        <div class="date-written">December 29, 2019</div>
        <div class="excerpt">
          When acquiring new theories, we often use coherence truth checks to enforce the validity of them. Hence, it is believed that we need to retain a multiplicity of theories to overcome the limitation of each individual theory.
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'TheDoorsYouShut' }">
        <picture>
          <source srcset="@/assets/blog/blog/2.webp" type="image/webp" />
          <source srcset="@/assets/blog/blog/2.jpg" type="image/jpeg" />
          <img src="@/assets/blog/blog/2.jpg" alt="open door" draggable="false" />
        </picture>
        <div class="title">#2: The Doors You Shut</div>
        <div class="date-written">December 8, 2019</div>
        <div class="excerpt">
          The only factors stopping us from trying is our stubbornness, fear of change, and confirmation bias. The time spent on learning a thing that you later find to be uninteresting is not a waste of time at all, it is a process of understanding yourself.
        </div>
      </router-link>

      <router-link class="card" :to="{ name: 'NoHopeForMercy' }">
        <picture>
          <source srcset="@/assets/blog/blog/1.webp" type="image/webp" />
          <source srcset="@/assets/blog/blog/1.jpg" type="image/jpeg" />
          <img src="@/assets/blog/blog/1.jpg" alt="Ching Chang chiaroscuro reflecting" draggable="false" />
        </picture>
        <div class="title">#1: No Hope For Mercy</div>
        <div class="date-written">November 8, 2019</div>
        <div class="excerpt">
          If humans are innately evil, according to Thomas Hobbes, shouldn’t we strive for a better self by adopting the admirable characteristics of others? And by doing so, aren’t we all fake by not preserving our own personalities?
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  metaInfo: {
    meta: [
      { name: "description", content: "Ching Chang's public diary. He writes about his high school life. Contains some funny short stories, teenage problems, philosophy, and whatever is in his mind!" },
      { name: "keywords", content: "Ching Chang, blog, story, funny, personal, examples, site, high school, ideas, life" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/blog/" }
    ]
  }
};
</script>

<style lang="scss" scoped>
#cards-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: calc(100% + 25px);
  .card {
    transition-duration: 0.15s;
    user-select: none;
    background-color: $white;
    box-shadow: 0 0 2px $black;
    padding: 0 40px;
    margin: 0 25px 25px 0;
    width: 280px;
    height: 570px;
    color: $black;
    text-decoration: none;
    img {
      border-bottom: 4px solid $secondary-colour;
      width: calc(100% + 80px);
      margin-left: -40px;
    }
    .title {
      font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
      font-size: 26px;
      margin: 5px 0 10px;
    }
    .date-written {
      color: darken($white, 40%);
      margin-bottom: 20px;
    }
    .excerpt {
      font-size: 18px;
      line-height: 1.4em;
    }
    &:hover {
      transform: translateY(-4px);
      box-shadow: 1px 2px 4px $black;
    }
  }
}

@media (max-width: 414px) {
  #cards-container .card {
    height: 530px;
    padding: 0 25px;
    img {
      width: calc(100% + 50px);
      margin-left: -25px;
    }
  }
}
@media (max-width: 320px) {
  #cards-container .card {
    height: 420px;
    padding: 0 15px;
    img {
      width: calc(100% + 30px);
      margin-left: -15px;
    }
    .title {
      font-size: 28px;
    }
    .date-written {
      margin-bottom: 10px;
    }
    .excerpt {
      font-size: 14px;
    }
  }
}
</style>
