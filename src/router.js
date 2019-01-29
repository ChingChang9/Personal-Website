import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "About",
      component: About,
      meta: {
        title: "About Me - Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("./views/Projects.vue"),
      meta: {
        title: "Projects - Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects/word-counter",
      name: "WordCounter",
      component: () => import("./views/projects/WordCounter.vue"),
      meta: {
        title: "Word Counter - Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects/typing-speed-test",
      name: "TypingSpeedTest",
      component: () => import("./views/projects/TypingSpeedTest.vue"),
      meta: {
        title: "Typing Speed Test - Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects/hacker-terminal",
      name: "HackerTerminal",
      component: () => import("./views/projects/HackerTerminal.vue"),
      meta: {
        title: "Redirecting"
      }
    },
    {
      path: "/projects/frozen-countdown",
      name: "FrozenCountdown",
      component: () => import("./views/projects/FrozenCountdown.vue"),
      meta: {
        title: "Frozen Countdown Timer - Ching Chang's Personal Website"
      }
    },
    {
      path: "/photo-gallery",
      name: "PhotoGallery",
      component: () => import("./views/PhotoGallery.vue"),
      meta: {
        title: "Photo Gallery - Ching Chang's Personal Website"
      }
    },
    {
      path: "/movie-reviews",
      name: "MovieReviews",
      component: () => import("./views/MovieReviews.vue"),
      meta: {
        title: "Movie Reviews - Ching Chang's Personal Website"
      }
    },
    {
      path: "/music-history",
      name: "MusicHistory",
      component: () => import("./views/MusicHistory.vue"),
      meta: {
        title: "Music History - Ching Chang's Personal Website"
      }
    },
    {
      path: "/iop",
      name: "IOP",
      component: () => import("./views/IOP.vue"),
      meta: {
        title: "IB IOP Example"
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Ching Chang's Personal Website";
  next();
});
export default router;
