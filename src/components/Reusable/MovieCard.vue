<template>
  <router-link :to="{ name: 'MoviesShow', params: { id: movie['id'] } }">
    <image-or-placeholder :result="movie" size="w200" my_key="poster_path" />
  </router-link>
  <div class="mt-2">
    <router-link :to="{ name: 'MoviesShow', params: { id: movie['id'] } }">
      {{ movie["title"] }}
    </router-link>
    <div>
      <a-space>
        <star-filled />
      </a-space>
      <span class="ml-1">{{ movie["vote_average"] * 10 }}%</span>
      <span class="mx-2">|</span>
      <span>{{ movie.release_date }}</span>
    </div>
    <div>
      {{ genre }}
    </div>
  </div>
</template>

<script>
import ImageOrPlaceholder from "@/components/Reusable/ImageOrPlaceholder.vue";
import { StarFilled } from "@ant-design/icons-vue";

export default {
  components: { ImageOrPlaceholder, StarFilled },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    genres: {
      type: Array,
      required: true,
    },
  },
  computed: {
    genre() {
      return this.genres
        .filter((genre) => this.movie.genre_ids.includes(genre.id))
        .map((g) => {
          return g.name;
        })
        .join(", ");
    },
  },
};
</script>
