<script>
import CardComp from './CardComp.vue';

export default {
    name: "OurServices",
    data() {
        return {};
    },
    components: { CardComp }
}

</script>

<template>
<section id="OurServices" class="OurServices">

    <div class="container" data-aos="fade-up">
        <div class="d-flex justify-content-center">
            <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up">
                <div class="content text-center">
                    <h6 data-aos="fade-up" data-aos-delay="200">Our Services</h6>
                    <h1 data-aos="fade-up" data-aos-delay="400"><strong>What</strong> We Do</h1>
                    <p data-aos="fade-up" data-aos-delay="600">
                        When, while the lovely valley teems with vapour around meand the
                    </p>
                </div>
            </div>
        </div>
        <div class="card-comp">
            <CardComp />
        </div>

        <div class="d-flex justify-content-center">
            <button class="btn signin btn-red scrollto" href="#about">View All Services</button>
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
            font-weight: 700;
        }
        p{
                font-size: 16px;
                    font-weight: 400;
        }
    }
    }
</style>
