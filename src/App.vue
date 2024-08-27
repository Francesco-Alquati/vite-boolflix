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
    this.getFilms();

  },
  methods: {
    getFilms(){
      axios.get(`${store.apiUrl}`).then((response) =>{
          store.filmsList = response.data.results;
          console.log(response.data.results);
        });
    }


  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <Searchbar />
    <AppMain />
  </main>
</template>

<style lang="scss">
@import './styles/generals.scss';
</style>
