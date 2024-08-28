<script>
import { store } from './store.js';
import  axios  from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Searchbar from './components/Searchbar.vue';


export default {
  components: {
    AppHeader,
    Searchbar,
    AppMain,
  },
  created() {
    this.getMovies();
    this.getSeries();

  },
  methods: {
    getMovies(searchTerm) {
      axios.get(`${store.apiUrlMovies}`, {
        params: {
          api_key: 'YOUR_API_KEY', 
          query: searchTerm,
        },
      })
      .then((response) => {
        store.moviesList = response.data.results;
      })
    },

    getSeries(searchTerm) {
      axios.get(`${store.apiUrlSeries}`, {
        params: {
          api_key: 'YOUR_API_KEY', 
          query: searchTerm,
        },
      })
      .then((response) => {
          store.seriesList = response.data.results;
      })
    },
    updateSearch(term) {
      this.getMovies(term);
      this.getSeries(term);
    },
  },
  data() {
    return {
      store,
      moviesList: [],
      seriesList: [],
    }
  },
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <Searchbar @search="updateSearch" />
    <AppMain :movies="moviesList" :series="seriesList" />
  </main>
</template>

<style lang="scss">
@import './styles/generals.scss';
</style>
