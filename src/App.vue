<script setup>
import GrowComp from './assets/components/GrowComp.vue';
import HeaderCompVue from './assets/components/HeaderComp.vue';
import HeroComp from './assets/components/HeroComp.vue';
import OurServices from './assets/components/OurServices.vue';


</script>

<template>
<HeaderCompVue />
<HeroComp />
<main>
    <OurServices />
    <GrowComp />
</main>  
</template>

<style lang="scss" scoped>
@import './assets/scss/main.scss';

</style>
