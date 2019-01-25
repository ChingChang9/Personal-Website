import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "About",
      component: About,
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("./views/Projects.vue"),
    },
    {
      path: "/projects/word-counter",
      name: "WordCounter",
      component: () => import("./views/projects/WordCounter.vue")
    },
    {
      path: "/projects/typing-speed-test",
      name: "TypingSpeedTest",
      component: () => import("./views/projects/TypingSpeedTest.vue")
    },
    {
      path: "/projects/hacker-terminal",
      name: "HackerTerminal",
      component: () => import("./views/projects/HackerTerminal.vue")
    },
    {
      path: "/projects/frozen-countdown",
      name: "FrozenCountdown",
      component: () => import("./views/projects/FrozenCountdown.vue")
    },
    {
      path: "/ib-story",
      name: "IBStory",
      component: () => import("./views/IBStory.vue")
    },
    // {
    //   path: "/photo-gallery",
    //   name: "PhotoGallery",
    //   component: () => import("./views/PhotoGallery.vue")
    // },
    {
      path: "/movie-reviews",
      name: "MovieReviews",
      component: () => import("./views/MovieReviews.vue")
    },
    {
      path: "/music-history",
      name: "MusicHistory",
      component: () => import("./views/MusicHistory.vue")
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
