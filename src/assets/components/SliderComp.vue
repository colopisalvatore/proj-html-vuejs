<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import SliderCard from "./SliderCard.vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
    name: "SliderComp",
    props: {
        projects: Object,
        active: Number
    },
    components: {
        Swiper,
        SwiperSlide,
        SliderCard
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        }
    }
}
</script>

<template>
    <swiper :slidesPerView="3" :spaceBetween="40" :rewind="true" :navigation="{
        nextEl: '.next',
        prevEl: '.prev'
    }" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
        <div class="mySwiper-navigation">
            <div class="prev">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="next">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <swiper-slide v-for="(item, index) in projects" :key="index">
            <SliderCard :project="item" />
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
@import '../scss/main.scss';
@import '../scss/partials/_variables';

.mySwiper {
    overflow: visible;
    padding-top: 2rem;
    padding-bottom: 3rem;

    &-navigation {
        position: absolute;
        top: -40px;
        right: 10px;
        display: flex;

        .prev, .next {
            margin: 0 .5rem;
            width: 50px;
            height: 50px;
            border: 1px solid $text-accent;
            color: $text-accent;
            border-radius: 50%;
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
        }
                 .prev:hover,
                 .next:hover {
                     background: linear-gradient(90deg, #f9636b 0%, #b6246e 100%);
                     color: $white;
                     transition: all .2s ease-in-out;
                 }
    }       

    .swiper-slide {
        display: flex;
        justify-content: center;
    }
}
</style>