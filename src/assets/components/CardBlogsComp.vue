<script>

export default {
    name: "CardBlogsComp",
    props: {
        post: Object,
    },
    components: {
        
    },
    methods: {
        getImagePath(imgUrl) {
            return new URL(imgUrl, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="card-blog"
        :class="{ 'background-blue flex-column justify-content-between': !post.img }, { 'align-items-end': post.img }">
        <div class="card-blog__text" :class="{ 'ms_w-70': post.img }">
            <div class="last-date d-flex align-items-center">
                <h5 class="fw-light">{{ post.message.date }}</h5>
                <span class="mb-1 px-2"> • </span>
                <h5 class="fw-light"> by {{ post.name }} </h5>
            </div>
            <div class="title-message" :class="{ 'my-4 p-2 fs-5': !post.img }">
                <h3 class="fs-4 fw-bold">{{ post.message.title }}</h3>
            </div>
            <div class="description-message" :class="{ 'p-2': !post.img }">
                <p>{{ post.message.description }}</p>
            </div>
        </div>
        <div class="card-blog__button" :class="{ 'ms_w-30 justify-content-end': post.img }">
            <button href="#" class="btn btn-white btn-hero button" data-aos="fade-up" data-aos-delay="3000">Read More</button>
        </div>
        <div class="background-card" v-if="post.img">
            <img :src="getImagePath(`../img/${post.img}.jpg`)" alt="">
            <div class="background-card__opacity"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/partials/header.scss";
 @import "../scss/main.scss";

.card-blog {
    width: 100%;
    min-height: 400px;
    padding: 2em 1.5em;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    z-index: 10;
    display: flex;
    box-shadow: 6px 5px 21px 0px rgba(0, 0, 0, 0.48);

    &__text {
        color: $white;
        position: relative;
        z-index: 10;
        .last-date {
            h5 {
                font-size: .8rem;
            }
        }

        .description-message {
            max-height: 50px;

            p {
                margin: 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    &__button {
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 10;
    }
    

    .background-card {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: left;
        }

        &__opacity {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            background-color: rgba(#000000, .5);
        }
    }

    &.background-blue {
        background: linear-gradient(137deg, #020230 45%, #183372 99%);
    }
}

.ms_w-30 {
    width: 30%;
}

.ms_w-70 {
    width: 70%;
}
</style>