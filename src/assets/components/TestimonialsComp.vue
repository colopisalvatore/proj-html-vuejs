<script>
import CardTestimonialsCom from './CardTestimonialsCom.vue';
import { store } from '../data/store'


export default {
    name: "TestimonialsComp",
    data() {
        return { store };
    },
    components: { CardTestimonialsCom }
}

</script>

<template>
<section id="Testimonials" class="Testimonials">

    <div class="container" data-aos="fade-up">
        <div class="d-flex justify-content-center">
            <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up">
                <div class="content text-center">
                    <h6 data-aos="fade-up" data-aos-delay="200">Testimonial</h6>
                    <h1 data-aos="fade-up" data-aos-delay="400"><strong>What</strong> People Say</h1>
                    <p data-aos="fade-up" data-aos-delay="600">
                        When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .
                    </p>
                </div>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-lg-3 pt-5">
            <div class="col mb-5 mb-lg-0" v-for="(testimonial, index) in store.testimonialList" :key="index">
                <CardTestimonialsCom :testimonial="testimonial" />
            </div>
        </div>
    </div>

</section>
</template>

<style lang="scss" scoped>
@import '../scss/main.scss';
@import '../scss/partials/_variables';

.container{
    .card-comp{
        margin: 80px 0;
    }
    .content {
        color: black;
    
        h1 {
            font-size: 50px;
        }
    
        h6 {
            color: $text-accent;
        }
        p{
                font-size: 16px;
                font-weight: 400;
                width: 600px;
        }
    }
    }
</style>
