import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import PopularMovies from "@/views/PopularMovies.vue";
import NowPlayingMovies from "@/views/NowPlayingMovies.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/popular",
    name: "PopularMovies",
    component: PopularMovies,
  },
  {
    path: "/now-playing",
    name: "Now Playing Movies",
    component: NowPlayingMovies,
  },
  {
    path: "/movies/:id",
    component: () => import("@/components/show.vue"),
    name: "MoviesShow",
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
