<template>
  <div class="border-b border-gray-800 movie-info">
    <div class="container flex flex-col px-4 py-16 mx-auto md:flex-row">
      <div class="flex-none">
        <image-or-placeholder
          :result="movie"
          size="w400"
          my_key="poster_path"
        />
      </div>
      <div class="md:ml-24">
        <h2>
          {{ movie["title"] }}
        </h2>
        <div>
          <a-space>
            <star-filled />
          </a-space>
          <span class="ml-1">{{ movie["vote_average"] * 10 }}%</span>
          <span class="mx-2">|</span>
          <span>{{ movie["release_date"] }}</span>
        </div>

        <p>
          {{ movie["overview"] }}
        </p>

        <div class="mt-12">
          <h4 class="font-semibold text-white">Featured Crew</h4>
          <div class="flex mt-4">
            <div v-for="mvCrew in movieCrew" :key="mvCrew.id" class="mr-6">
              <div>{{ mvCrew.name }}</div>
              <div class="text-sm text-gray-400">{{ mvCrew.job }}</div>
            </div>
          </div>
        </div>
        <div class="mt-12" v-if="movie.video">
          <button>
            <a-space>
              <youtube-filled :style="{ fontSize: '40px', color: 'red' }" />
              <span class="ml-2">Play Trailer</span>
            </a-space>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageOrPlaceholder from "@/components/Reusable/ImageOrPlaceholder.vue";
import { StarFilled, YoutubeFilled } from "@ant-design/icons-vue";
import axios from "axios";

export default {
  components: {
    ImageOrPlaceholder,
    StarFilled,
    YoutubeFilled,
  },
  props: ["id"],
  data() {
    return {
      movie: {},
      movieCrew: [],
    };
  },
  mounted() {
    this.getMovieInfo();
    this.getMovieCredit();
  },
  methods: {
    getMovieInfo() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${process.env.VUE_APP_API_KEY}`
        )
        .then((res) => {
          this.movie = res.data;
        })
        .catch((err) => {
          error.value = err.message;
        });
    },
    getMovieCredit() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=${process.env.VUE_APP_API_KEY}`
        )
        .then((res) => {
          this.movieCrew = res.data.crew.slice(0, 2);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>

<style></style>
