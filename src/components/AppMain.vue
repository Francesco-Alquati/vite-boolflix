<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
    getFlagUrl(language) {
      if (language === 'en') {
        return 'https://flagsapi.com/GB/shiny/64.png'; // 
      } else if (language === 'fr') {
        return 'https://flagsapi.com/FR/shiny/64.png'; 
      } else if (language === 'ro') {
        return 'https://flagsapi.com/RO/shiny/64.png'; 
      }
    },
  },
}
</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 my-2 bg-danger" v-for="movie in store.moviesList">
                <div class="d-flex flex-column align-items-center justify-content-center text-center">
                    <h6>{{ movie.title }}</h6>
                    <h6>{{ movie.original_title}}</h6>
                    <img :src="getFlagUrl(movie.original_language)" alt="Flag"/>
                    <h6>{{ movie.vote_average}}</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
img {
  width: 15%;
}
</style>