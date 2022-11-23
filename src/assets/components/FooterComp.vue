<script>
import FooterTopComp from './FooterTopComp.vue';
import FooterBottComp from './FooterBottComp.vue';

export default {
    name: "FooterComp",
    components: {
        FooterTopComp,
        FooterBottComp
    }
}
</script>

<template>
    <footer>
        <FooterTopComp />
        <FooterBottComp />
    </footer>
</template>

<style lang="scss" scoped>
@import "../scss/partials/header.scss";
@import "../scss/main.scss";

footer {
    background-color: transparent;
    background-image: linear-gradient(180deg, #0b1953 0%, #01012f 100%);
}
</style>