<script>

export default {
    name: "CardPriceComp",
    props: {
        product: Object,
        color: String
    },
    components: {
        
    }
}
</script>

<template>
    <div class="card-pricing">
        <div class="title mb-3">
            <h2 class="fs-1 fw-bold">{{ product.name }}</h2>
            <h4 class=" fw-normal">{{ product.type.toUpperCase() }}</h4>
        </div>
        <div class="price mb-3">
            <h2 class="fw-bold pt-2"><span class="fw-semibold">$</span>{{ product.price }}</h2>
            <p class="fs-6 fw-ligth">Per Month</p>
        </div>
        <div class="description">
            <ul>
                <li v-for="(item, index) in product.descriptionList" :key="index">
                    <h3 class="fs-6">{{ item.title }} <span class="fw-normal">{{ item.description }}</span></h3>
                </li>
            </ul>
        </div>
        <div class="background">
            <span>{{ product.price }}</span>
        </div>
        
        <button href="#" class="btn-red btn btn-hero button">Order Now <i class="fa-solid fa-arrow-right"></i></button>

    </div>
</template>

<style lang="scss" scoped>
@import '../scss/main.scss';
@import '../scss/partials/_variables';

.card-pricing {
    min-height: 400px;
    min-width: 300px;
    max-width: 500px;
    text-align: center;
    padding: 1.5em;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 6px 5px 21px 0px rgba(0, 0, 0, 0.48);
    color: $black;
    background-color: $background-white;
    transition: all .2s ease-out;

    &:hover {
        background: linear-gradient(90deg, #f9636b 0%, #b6246e 100%);
        color: $white;
        .description {li {span {
                color: $white;
            }}}
    }

    &:hover .button {
        background: $background-white;
        color: $text-accent!important;
    }

    .title {
        position: relative;
        z-index: 10;

        h4 {
            font-size: .8rem;
        }
    }

    .price {
        position: relative;
        z-index: 10;

        h2 {
            font-size: 6rem;
            position: relative;

            span {
                font-size: 1rem;
                position: absolute;
                top: 0;
                left: 30%;
            }
        }
    }

    .description {
        padding: .8em -0;

        li {
            margin: 0.5 0;
            margin-left: -2rem; //fix data-v-1ebe45bb padding-left: 2rem
            list-style: none;

            h3{
                font-weight: 800;
            }
            span{
                color: $text-secondary;
                transition: all .2s ease-out;
            }            
        }
    }

    .background {
        position: absolute;
        top: -85px;
        right: -10px;
        font-weight: bold;
        font-size: 200px;
        color: #d4d4d4;
        opacity: .3;

        span {
            z-index: 0;
        }
    }
}
</style>