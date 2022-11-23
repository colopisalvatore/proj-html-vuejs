<script>
import { store } from '../data/store'
import SliderComp from './SliderComp.vue';

export default {
    name: "PortfolioComp",
    components: {
    SliderComp
},
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section id="portfolio">
        <div class="container pt-5">
            <div class="d-flex justify-content-center">
                <div class="col-lg-12 d-flex" data-aos="fade-up">
                    <div class="content">
                        <h6 data-aos="fade-up" data-aos-delay="200">Portfolio</h6>
                        <h1 data-aos="fade-up" data-aos-delay="400"><strong>latest</strong> work</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" data-aos="zoom-in" data-aos-delay="400">
            <SliderComp :projects="store.projectList" />
        </div>
    </section>  
</template>

<style lang="scss" scoped>
@import '../scss/main.scss';
@import '../scss/partials/_variables';

section {
    overflow-x: hidden;
    padding-bottom: 3rem;
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

    p {
        font-size: 16px;
        font-weight: 400;
    }
}
</style>
