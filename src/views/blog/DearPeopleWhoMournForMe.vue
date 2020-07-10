<template>
  <div>
    <div id="topic">Dear People Who Mourn For Me</div>
    <div id="date-written">May 14, 2020</div>
    <div id="subtitle">I don’t want to be the source of your suffering, so should I run away from you?</div>
    <div id="line"></div>
    <picture>
      <source media="(max-width: 414px)" srcset="@/assets/blog/dear-people-who-mourn-for-me/hourglass-414.webp" type="image/webp" />
      <source media="(max-width: 414px)" srcset="@/assets/blog/dear-people-who-mourn-for-me/hourglass-414.jpg" type="image/jpeg" />
      <source srcset="@/assets/blog/dear-people-who-mourn-for-me/hourglass.webp" type="image/webp" />
      <source srcset="@/assets/blog/dear-people-who-mourn-for-me/hourglass.jpg" type="image/jpeg" />
      <img id="cover-photo" src="@/assets/blog/dear-people-who-mourn-for-me/hourglass.jpg" alt="Newton's cradle with lightbulbs" />
    </picture>
    <div id="text">
      <div class="paragraph">
        Time, my first friend, I’ve been thinking about you. When the inevitable death does catch me in this childish game of tag, will you grant me the mercy so I could let out my final thought to the world? If I take my time and craft my death letter early on, could my words encompass all of the desires, the questions, and the unfinished symphonies I still attempt to write with my dying breaths?
      </div>
      <div class="paragraph">
        Time, I’ve been hoping that you could teach me how to say goodbye. You endlessly, wordlessly, and unceremoniously continue to send us off to each of our deaths. Do you ever mourn for our demise? When you ultimately come for me, I expect my family and friends to mourn for me, and I know you would help them cope. However, I would want to make a difference myself too.
      </div>
      <hr />
      <div class="paragraph" style="text-indent: 0;">
        Dear people who mourn for me,
      </div>
      <div class="paragraph">
        At the time of writing this letter, I could not have foreseen what I will have said or yet to say to you when I die. However, I do know that however, wherever, and for whatever reason I die, when time does knock on my door, the last thing I would want to happen is for you to lament. Death is such a ruthless and sadistic heart-taker, for bringing grief to not the target it catches, but the ones that love the victim— perhaps these grieving souls are the true victims.
      </div>
      <div class="paragraph">
        I don’t want to be the source of your suffering, thus should I run away from death? I hide and protect myself from it, but time draws us nearer. As death’s ominous silhouette draws close, it tempts me to succumb; the eternal peace and tranquil mind, the end of all imperfections and relevance from the world, all things I lack yet long for in my everyday mundanity. But
      </div>
      <div class="paragraph">
        I don’t want to be the source of your suffering, thus should I run away from you? Yet when I make myself unlikable and heartless, you keep understanding. You forgive every mistake I make, tolerate every harshly placed word I utter. I feel ashamed and guilty, realizing
      </div>
      <div class="paragraph">
        I cannot outrun time, thus I should just run at my own pace. Just understand that the most important thing is that when I stop running, I will look back and see no regret on my trail. No matter how brutally the thought of death pushes me, no matter how bright the trail ahead of me is when I stop, I will be grateful to have run so far, to have discovered the previously undiscovered paths, and to have had your company throughout the journey. It may seem insincere if I am grateful for everyone, but it is true. I am grateful for everyone who has ever crossed paths with me during our runs. I want to thank everyone individually, but
      </div>
      <div class="paragraph">
        I am running out of time, and that is fine. I’ve been thinking about time, my last enemy, whose mercy is merely an undeserved privilege. I am grateful to have had my privilege and do not seek for more. So please do not waste your privilege finishing my trail. If I cannot bid my farewell as time does, at least
      </div>
      <div class="paragraph">
        I've had my time.
      </div>
    </div>
  </div>
</template>

<script>
import ogImage from "@/assets/blog/blog/4.jpg";

export default {
  name: "DearPeopleWhoMournForMe",
  metaInfo: {
    title: "Dear People Who Mourn For Me",
    meta: [
      { name: "description", content: "I’ve been thinking about time, my last enemy, whose mercy is merely an undeserved privilege. I am grateful to have had my privilege and do not seek for more." },
      { name: "keywords", content: "death letter, example, family, love, time, blog, life, mourn, Ching Chang, Hamilton" },
      { property: "og:image", content: `https://www.chingchang.dev${ ogImage }` }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/blog/dear-people-who-mourn-for-me" }
    ]
  }
};
</script>

<style lang="scss" scoped>
#right-side main #blog #topic {
  font-size: 78px;
}
@media (max-width: 899px) {
  #right-side main #blog #topic {
    font-size: 60px;
  }
}
@media (max-width: 556px) {
  #right-side main #blog #topic {
    font-size: 50px;
  }
}
@media (max-width: 414px) {
  #right-side main #blog #topic {
    font-size: 42px;
  }
}
@media (max-width: 320px) {
  #right-side main #blog #topic {
    font-size: 36px;
  }
}
</style>