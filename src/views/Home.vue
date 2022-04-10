<template>
  <div class="container px-4 pt-10 mx-auto">
    <div>
      <h2
        >
        All Movies
      </h2>
      <div
        >
        <a-row type="flex">
          <a-col
            class="mt-3"
            v-for="movie in movies"
            :key="movie.id"
            :span="6"
            :xs="{ order: 1 }"
            :sm="{ order: 2 }"
            :md="{ order: 3 }"
            :lg="{ order: 4 }"
          >
            <MovieCard :movie="movie" :genres="genres" />
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
      movies: [],
      genres: [],
    };
  },
  mounted() {
    this.getAllMovies();
    this.getGeneres();
  },
  computed: {
    getMovieGenres(genres) {
      return genres;
    },
  },
  methods: {
    getAllMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_API_KEY}`
        )
        .then((res) => {
          res.data.results.forEach((result) => {
            this.movies.push(result);
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
