<script>
import { store } from '../data/store'
import CardBlogsComp from './CardBlogsComp.vue';

export default {
    name: "BlogComp",
    components: {
    CardBlogsComp
},
    data() {
        return {
            store
        };
    },
}

</script>

<template>
    <section id="PriceList" class="PriceList">
        <div class="container" data-aos="fade-up">
            <div class="d-flex justify-content-center">
                <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up">
                    <div class="content text-center">
                        <h6 data-aos="fade-up" data-aos-delay="200">Blog</h6>
                        <h1 data-aos="fade-up" data-aos-delay="400"><strong>Latest</strong> Posts</h1>
                        <p data-aos="fade-up" data-aos-delay="600">
                            When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row pt-5" data-aos="zoom-out" data-aos-delay="600">
                <div v-for="(post, index) in store.blogLists" :key="index"
                    :class="post.img ? 'col-12 col-xl-6 mb-4' : 'col-6 col-xl-3'">
                    <CardBlogsComp :post="post" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss"
 scoped>
 @import "../scss/partials/header.scss";
 @import "../scss/main.scss";
 
 .container {
     .content {
         color: black;
 
         h1 {
             font-size: 50px;
         }
 
         h6 {
             color: $text-accent;
             font-weight: 700;
         }
 
         p {
             font-size: 16px;
             font-weight: 400;
             width: 600px;
         }
     }
 }
 </style>
