<script>

export default {
    name: "HeroComp",
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
                <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                    data-aos="fade-up" data-aos-delay="200">
                    <span>Business Planning</span>
                    <span class="fw-400">Digital Technology</span>
                    <span>Modern Solution !</span>
                    <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .</p>
                    <div class="d-flex justify-content-center justify-content-lg-start">
                        <button href="#about" class="btn-red btn btn-hero scrollto">Try it Now</button>
                        <button href="#" class="glightbox btn btn-hero btn-blue">Explore More</button>
                    </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                    <img src="../img/header.png" class="img-fluid animated" alt="">
                </div>
            </div>
        </div>
    
    </section>  
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";
@import "../scss/partials/hero.scss";
</style>
