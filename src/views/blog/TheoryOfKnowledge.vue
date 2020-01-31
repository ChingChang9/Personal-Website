<template>
  <div>
    <div id="topic">Theory of Knowledge</div>
    <div id="date-written">December 29, 2019</div>
    <div id="subtitle">Can the acquisition of knowledge accumulate without a multiplicity of theories?</div>
    <div id="line"></div>
    <picture>
      <source media="(max-width: 414px)" srcset="@/assets/blog/theory-of-knowledge/big-brain-414.jpg" type="image/jpeg" />
      <source srcset="@/assets/blog/theory-of-knowledge/big-brain.jpg" type="image/jpeg" />
      <img id="cover-photo" src="@/assets/blog/theory-of-knowledge/big-brain.jpg" alt="Newton's cradle with lightbulbs" />
    </picture>
    <div id="text">
      <div class="paragraph">
        Okay, you've probably come here to read a blog post. I'm sorry, this is not a blog. This is nothing but my IB TOK Essay. I just posted it here because it is philosophical, which is coherent to my other blog posts. Totally didn't plan to share it here, until I received a 9/10 on it (lost 1 mark for not citing my sources 😭). This is really different from what a usual blog would look like. If you are not into reading 1600 words of tHeOrY oF kNoWlEdGe, please exit and go read my other blog posts before you think all my writings are as boring as this. But if you like random philosophy as much as I do, embrace yourself for 1600 words of nonsense that somehow makes some sense:
      </div>
      <div class="paragraph">
        The content is taken down until July 6<sup>th</sup>, 2020, in case IB thinks I plagiarized myself.
      </div>
    </div>
  </div>
</template>

<script>
import ogImage from "@/assets/blog/blog/3.jpg";

export default {
  name: "TheoryOfKnowledge",
  metaInfo: {
    title: "Theory of Knowledge",
    meta: [
      // { name: "description", content: "We often use coherence truth checks to enforce the validity of newly acquired knowledge. Hence, it is believed that we need to retain a multiplicity of theories." },
      { name: "description", content: "Content deleted" },
      { name: "keywords", content: "IB TOK Essay, exemplar, theory, blog, limitation, multiplicity, science, ethics, The Moral Machine, Ching Chang" },
      { property: "og:image", content: `https://www.chingchang.dev${ ogImage }` }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/blog/theory-of-knowledge" }
    ]
  }
}
</script>