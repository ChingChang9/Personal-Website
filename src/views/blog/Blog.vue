<template>
  <div>
    <div id="topic">Blog</div>
    <div id="line"></div>
    <div id="cards-container">
      <router-link class="card" :to="{ name: 'NoHopeForMercy' }">
        <picture>
          <source srcset="@/assets/blog/blog/1.webp" type="image/webp" />
          <source srcset="@/assets/blog/blog/1.jpg" type="image/jpeg" />
          <img src="@/assets/blog/blog/1.jpg" alt="Ching Chang" draggable="false" />
        </picture>
        <div class="title">#1: No Hope For Mercy</div>
        <div class="date-written">November 8, 2019</div>
        <div class="description">
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
      { name: "description", content: "Ching Chang writes about his high school life. Including funny short stories, teenage problems, philosophy, and whatever is in his mind! Basically Ching's public diary." },
      { name: "keywords", content: "Ching Chang, blog, story, funny, personal, examples, site, high school, ideas, life" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/blog/" }
    ]
  }
}
</script>

<style lang="scss" scoped>
#cards-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 25px;
  .card {
    transition-duration: 0.15s;
    user-select: none;
    background-color: $white;
    box-shadow: 0 0 2px $black;
    padding: 0 40px;
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
      font-size: 32px;
      margin-bottom: 10px;
    }
    .date-written {
      color: darken($white, 40%);
      margin-bottom: 20px;
    }
    .description {
      font-size: 18px;
      line-height: 1.4em;
    }
    &:hover {
      transform: translateY(-4px);
      box-shadow: 1px 2px 4px $black;
    }
  }
}
</style>
