<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import Searchbar from './components/Searchbar.vue';


export default {
  components: {
    AppHeader,
    Searchbar,
  },
  created() {

  },
  methods: {

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
  </main>
</template>

<style lang="scss">
@import './styles/generals.scss';
</style>
