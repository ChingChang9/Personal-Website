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
        title: "About Me – Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("./views/Projects.vue"),
      meta: {
        title: "Projects – Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects/word-counter",
      name: "WordCounter",
      component: () => import("./views/projects/WordCounter.vue"),
      meta: {
        title: "Word Counter – Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects/typing-speed-test",
      name: "TypingSpeedTest",
      component: () => import("./views/projects/TypingSpeedTest.vue"),
      meta: {
        title: "Typing Speed Test – Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects/iop",
      name: "IOP",
      component: () => import("./views/projects/IOP.vue"),
      meta: {
        title: "IB IOP Example"
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
        title: "Frozen Countdown Timer – Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects/work-plan",
      name: "WorkPlan",
      component: () => import("./views/projects/WorkPlan.vue"),
      meta: {
        title: "JA Prodction Work Plan – Wread"
      }
    },
    {
      path: "/projects/ib-timer",
      name: "IBTimer",
      component: () => import("./views/projects/IBTimer.vue"),
      meta: {
        title: "IB Timer – Ching Chang's Personal Website"
      }
    },
    {
      path: "/projects/grade-calculator",
      name: "GradeCalculator",
      component: () => import("./views/projects/GradeCalculator.vue"),
      meta: {
        title: "Grade Calculator – Ching Chang's Personal Website"
      }
    },
    {
      path: "/poems",
      name: "Poems",
      component: () => import("./views/Poems.vue"),
      meta: {
        title: "Poems – Ching Chang's Personal Website"
      }
    },
    {
      path: "/photo-gallery",
      name: "PhotoGallery",
      component: () => import("./views/PhotoGallery.vue"),
      meta: {
        title: "Photo Gallery – Ching Chang's Personal Website"
      }
    },
    {
      path: "/quotes",
      name: "Quotes",
      component: () => import("./views/Quotes.vue"),
      meta: {
        title: "Quotes – Ching Chang's Personal Website"
      }
    },
    {
      path: "/music-history",
      name: "MusicHistory",
      component: () => import("./views/MusicHistory.vue"),
      meta: {
        title: "Music History – Ching Chang's Personal Website"
      }
    },
    {
      path: "*",
      name: "Error",
      component: () => import("./views/Error.vue"),
      meta: {
        title: "Page Not Found"
      }
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Ching Chang's Personal Website";
  next();
});

export default router;