<script>
export default {
    name: "SliderCard",
    props: {
        project: Object
    },
    methods: {
        getImage(imagePath) {
            return new URL(imagePath, import.meta.url).href
        }
    },
}
</script>

<template>
    <a :href="project.href" class="project-card">
        <img :src="getImage(`../img/${project.img}.jpg`)" :alt="project.name">
        <div class="project-card-description">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
        </div>
    </a>
</template>

<style lang="scss" scoped>
@import '../scss/main.scss';
@import '../scss/partials/_variables';

.project-card {
    display: inline-block;
    width: 600px;
    background-color: $white;
    border-radius: 20px;
    box-shadow: 5px 5px 11px 4px rgba(0, 0, 0, 0.24);
    margin-top: 80px;
    cursor: pointer;

    img {
        max-width: 100%;
        border-radius: 20px;
    }

    &-description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.2em 1em;

        h3 {
            font-size: 1rem;
            margin-bottom: 0;
            color: $black;
        }

        p {
            font-size: .8rem;
            margin-bottom: 0;
            color: $text-secondary;
        }
    }

    &:hover {
        background: linear-gradient(90deg, #f9636b 0%, #b6246e 100%);
        color: $white;
        transition: all .2s ease-in-out;
    }
}
</style>