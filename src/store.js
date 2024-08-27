import { reactive } from 'vue';

export const store = reactive({
    apiUrlMovies: 'https://api.themoviedb.org/3/search/movie?api_key=a989c9379a16c7c4df65bfe50bcddb66&query=spider+man',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=a989c9379a16c7c4df65bfe50bcddb66&query=spider+man',
    seriesList: [],
    moviesList: [],

})