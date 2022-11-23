<script>
import { store } from '../data/store'

export default {
    name: "CardTestimonialsComp",
    data() {
        return {
            store
        };
    },
    props: {
        testimonial: Object
    },
    methods: {
        getImagePath(imgUrl) {
            return new URL(imgUrl, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="testimonial-card">
        <div class="testimonial-inner" data-aos="zoom-out" data-aos-delay="200">
            <div class="testimonial-inner-photo" data-aos="fade-up" data-aos-delay="300">
                <img :src="getImagePath(`../img/${testimonial.urlImg}.png`)" :alt="testimonial.fullName">
            </div>
            <div class="testimonial-inner-rating" data-aos="fade-up" data-aos-delay="400">
                <span class="stars" v-for="number in 5" :key="number">
                    <i class="fa-solid fa-star" v-if="testimonial.rating >= number"></i>
                    <i class="fa-regular fa-star" v-else></i>
                </span>
                <div class="background">
                    <i class="fa-solid fa-angles-left"></i>
                </div>
            </div>
            <div class="testimonial-inner-comment" data-aos="fade-up" data-aos-delay="500">
                <p>{{ testimonial.comment }}</p>
            </div>
            <div class="testimonial-inner-description">
                <h2 class="fs-6 fw-bold">{{ testimonial.fullName }}</h2>
                <h5 class="fs-6 fw-normal">{{ testimonial.employment }}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../scss/main.scss';
@import '../scss/partials/_variables';

.testimonial-card {
    padding: 1em 1.5em;
    color: $black;

    .testimonial-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        &-photo {
            max-width: 100px;
            border-radius: 50%;
            border: 5px solid $border-profile;
            margin-bottom: 1.5em;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-rating {
            padding-bottom: 1em;
            position: relative;
            color: $border-profile;

            .background {
                font-size: 150px;
                color: black;
                opacity: .1;

                i {
                    position: absolute;
                    top: -25px;
                    left: -20px;
                }
            }
        }

        &-comment {
            background-color: $white;
            z-index: 2;
            padding-top: 1.5em;
            padding-bottom: 1em;
            font-size: 1rem;
            max-width: 350px;
        }

        &-description {

            h5 {
                    letter-spacing: .1em;
                }
        }
    }
    .testimonial-inner:hover {
        border-radius: 30px;
        box-shadow: 6px 5px 50px 0px rgba(0, 0, 0, 0.2);
        transition: all .2s ease-out;
    }
}
</style>