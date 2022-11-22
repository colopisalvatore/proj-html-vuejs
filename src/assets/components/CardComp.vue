<script>

export default {
    name: 'CardComp',
    data() {
        return {
            WeDo: [
                {
                    "img": "Group-247.png",
                    "job": "Data Analysis",
                    "description": "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper."
                },
                {
                    "img": "Group-567.png",
                    "job": "SEO Optimization",
                    "description": "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper."
                },
                {
                    "img": "Group-538.png",
                    "job": "Security Data",
                    "description": "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper."
                },
                {
                    "img": "Group-566.png",
                    "job": "Branding Strategy",
                    "description": "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper."
                }
            ]
        }
    },
}

</script>

<template>
<div class="container" data-aos="fade-up">
    <div class="row">
        <div class="my-card col-3" v-for="item, index in WeDo" :key="index" data-aos="fade-up" data-aos-delay="800">
            <div class="img-contain">
                <img :src="(`../src/assets/img/` + item.img)" alt="">
            </div>
                <h5>{{ item.job }}</h5>
                <p>{{ item.description }}</p>
        </div>
    </div>
</div>
</template>

<style lang= "scss" scoped>
@import '../scss/main.scss';

.my-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    color: $black;

    .img-contain{
        height: 210px;
        width: 215px;

        img {
            object-fit: cover;
            width: 100%;
                padding: 2rem;
            }
    }    

    h5 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 1rem 0;
    }

    p {
        max-width: 242px;
        color: rgba(0, 0, 0, .9)!important;
        font-weight: 400;
        text-align: center;
        padding-top: 1.5rem;
        line-height: 1.5em;
    }
}
</style>
