<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 my-2 bg-danger" v-for="film in store.filmsList">
                <div class="d-flex flex-column align-items-center justify-content-center text-center">
                    <h6>{{ film.title }}</h6>
                    <h6>{{ film.original_title}}</h6>
                    <h6>{{ film.original_language}}</h6>
                    <h6>{{ film.vote_average}}</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>