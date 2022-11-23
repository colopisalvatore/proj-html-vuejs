<script>
import HeaderComp from './assets/components/HeaderComp.vue';
import HeroComp from './assets/components/HeroComp.vue';
import OurServices from './assets/components/OurServices.vue';
import GrowComp from './assets/components/GrowComp.vue';
import PortfolioComp from './assets/components/PortfolioComp.vue';
import PriceComp from './assets/components/PriceComp.vue';
import BlogComp from './assets/components/BlogComp.vue';
import TestimonialsComp from './assets/components/TestimonialsComp.vue';
import ClientComp from './assets/components/ClientComp.vue'; 
import SubscribeComp from './assets/components/SubscribeComp.vue'; 
import FooterComp from './assets/components/FooterComp.vue'; 





export default {
    components: {
    HeaderComp,
    HeroComp,
    OurServices,
    GrowComp,
    PortfolioComp,
    PriceComp,
    BlogComp,
    TestimonialsComp,
    ClientComp,
    SubscribeComp,
    FooterComp
},
}


</script>

<template>
<HeaderComp />
<HeroComp />
<main>
    <OurServices />
    <GrowComp />
    <PortfolioComp />
    <PriceComp />
    <BlogComp />
    <TestimonialsComp />
    <ClientComp />
    <SubscribeComp />
    <FooterComp />
</main>  
</template>

<style lang="scss" scoped>
@import './assets/scss/main.scss';

</style>
