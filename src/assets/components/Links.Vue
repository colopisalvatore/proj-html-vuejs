<script>
export default {
    name: "Links",
    props: {
        links: Object
    }
}
</script>

<template>
    <h4 class="text-light mt-3 fs-5">{{ links.title }}</h4>
    <ul>
        <li class="mb-2" v-for="(link, index) in links.links" :key="index">
            <a v-if="link.href" :href="link.href">{{ link.name }}</a>
            <div v-else class="description">
                <h5 class="text-light fs-6 mb-3">{{ link.name }}: <span>{{ link.description }}</span></h5>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import "../scss/partials/header.scss";
 @import "../scss/main.scss";

.description {
    span {
        font-size: 1rem;
        color: $text-secondary;
    }
        li {
            list-style: none!important;
        }
}
</style>