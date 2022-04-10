<template>
  <div class="container px-4 pt-10 mx-auto">
    <div>
      <h2>Now Playing Movies</h2>
      <div>
        <a-row type="flex">
          <a-col
            class="mt-3"
            v-for="nowPlayingMovie in nowPlayingMovies"
            :key="nowPlayingMovie.id"
            :span="6"
            :xs="{ order: 1 }"
            :sm="{ order: 2 }"
            :md="{ order: 3 }"
            :lg="{ order: 4 }"
          >
            <MovieCard :movie="nowPlayingMovie" :genres="genres" />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/Reusable/MovieCard.vue";
import axios from "axios";

export default {
  components: { MovieCard },
  data() {
    return {
      nowPlayingMovies: [],
      genres: [],
    };
  },
  mounted() {
    this.getNowPlayingMovies();
    this.getGeneres();
  },
  computed: {
    getMovieGenres(genres) {
      return genres;
    },
  },
  methods: {
    getNowPlayingMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}`
        )
        .then((res) => {
          res.data.results.forEach((result) => {
            this.nowPlayingMovies.push(result);
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getGeneres() {
      axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}`
        )
        .then((res) => {
          res.data.genres.forEach((genre) => {
            this.genres.push(genre);
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>
<style></style>
