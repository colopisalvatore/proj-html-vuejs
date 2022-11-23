<script>
import HeaderComp from './assets/components/HeaderComp.vue';
import HeroComp from './assets/components/HeroComp.vue';
import OurServices from './assets/components/OurServices.vue';
import GrowComp from './assets/components/GrowComp.vue';
import PortfolioComp from './assets/components/PortfolioComp.vue';
import PriceComp from './assets/components/PriceComp.vue';



export default {
    components: {
    HeaderComp,
    HeroComp,
    OurServices,
    GrowComp,
    PortfolioComp,
    PriceComp
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
</main>  
</template>

<style lang="scss" scoped>
@import './assets/scss/main.scss';

</style>
