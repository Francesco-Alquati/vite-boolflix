<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
            searchTerm: '',
        }
    },
}
</script>
<template>
    <div class="container-fluid bg-black">
        <div class="row">
            <div class="col-12 p-3">
                <div class="d-flex align-items-center justify-content-center">
                    <input type="search" v-model="searchTerm" placeholder="Cerca un titolo">
                    <button type="button" class="btn btn-primary ms-2 btn-sm" @click="$emit('search', searchTerm)">Cerca</button>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped></style>