<script>

export default {
    name: "GrowComp",
    data() {
        return {

        };
    },
}

</script>

<template>
    <section id="hero" class="d-flex align-items-center">

        <div class="container">
            <div class="row">
                <div class="col-lg-6 order-1 order-lg-1 hero-img" data-aos="zoom-in" data-aos-delay="600">
                    <img src="../img/men-data.png" class="img-fluid" alt="">
                </div>
                <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-2"
                    data-aos="fade-up">
                    <span class="fw-400" id="project" data-aos="fade-right" >Start Your Project</span>
                    <span data-aos="fade-up" data-aos-delay="400">Grow Your Business</span>
                    <span class="fw-400"  data-aos="fade-down" data-aos-delay="600">With Our Strategy</span>
                    <p data-aos="fade-down" data-aos-delay="800">When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .of the
                    impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
                    <div class="d-flex justify-content-center justify-content-lg-start" data-aos="fade-up"
                        data-aos-delay="900">
                        <button href="#about" class="btn-red btn btn-hero scrollto">Try it Now</button>
                        <button href="#" class="glightbox btn btn-hero btn-blue">Explore More</button>
                    </div>
                </div>
                
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";
@import "../scss/partials/hero.scss";

#hero{
        height: 80vh!important;
}

#project{
    font-size: 1.2rem!important;
}

img{
    width: 70%;
}
</style>
