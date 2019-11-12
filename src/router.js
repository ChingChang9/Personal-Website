import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about-me",
      name: "AboutMe",
      component: () => import("./views/AboutMe.vue")
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("./views/Projects.vue")
    },
    {
      path: "/projects/word-counter",
      name: "WordCounter",
      component: () => import("./views/projects/WordCounter.vue")
    },
    {
      path: "/projects/photo-gallery",
      name: "PhotoGallery",
      component: () => import("./views/projects/PhotoGallery.vue")
    },
    {
      path: "/projects/typing-speed-test",
      name: "TypingSpeedTest",
      component: () => import("./views/projects/TypingSpeedTest.vue")
    },
    {
      path: "/projects/iop",
      name: "IOP",
      component: () => import("./views/projects/IOP.vue")
    },
    {
      path: "/projects/hacker-terminal",
      name: "HackerTerminal",
      component: () => import("./views/projects/HackerTerminal.vue")
    },
    {
      path: "/projects/music-history",
      name: "MusicHistory",
      component: () => import("./views/projects/MusicHistory.vue")
    },
    {
      path: "/projects/frozen-countdown",
      name: "FrozenCountdown",
      component: () => import("./views/projects/FrozenCountdown.vue")
    },
    {
      path: "/projects/ib-timer",
      name: "IBTimer",
      component: () => import("./views/projects/IBTimer.vue")
    },
    {
      path: "/projects/poems",
      name: "Poems",
      component: () => import("./views/projects/Poems.vue")
    },
    {
      path: "/projects/quotes",
      name: "Quotes",
      component: () => import("./views/projects/Quotes.vue")
    },
    {
      path: "/projects/grade-calculator",
      name: "GradeCalculator",
      component: () => import("./views/projects/GradeCalculator.vue")
    },
    {
      path: "/projects/spongebob-meme-generator",
      name: "MemeGenerator",
      component: () => import("./views/projects/MemeGenerator.vue")
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("./views/Blog.vue"),
      children: [
        {
          path: "/blog/1",
          name: "Untitled",
          component: () => import("./views/blog/20191108.vue")
        }
      ]
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "*",
      name: "Error",
      component: () => import("./views/Error.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;