<script>
import { store } from '../data/store';

export default {
    name: "ClientComp",
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath(imgUrl) {
            return new URL(imgUrl, import.meta.url).href
        }
    }
}
</script>

<template>
    <section>
        <div class="container pt-5">
            <div class="row row-cols-1 row-cols-lg-5">
                <div class="col mb-5 mb-lg-0" v-for="(client, index) in store.ClientList" :key="index">
                    <img :src="getImagePath(`../img/${client.imgUrl}.png`)" :alt="client.name">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
 @import "../scss/partials/header.scss";
 @import "../scss/main.scss";

section {
    max-height: 200px;
    margin: -60px 0!important;
    .col {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-width: 70%;
        }
    }
}
</style>