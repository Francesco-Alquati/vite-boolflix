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
    <div class="container">
        <div class="row">
            <div class="col-12 p-3">
                <div class="d-flex align-items-center justify-content-center">
                    <input type="search">
                    <button type="button" class="btn btn-primary btn-sm">search</button>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped></style>