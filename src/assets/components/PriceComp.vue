<script>
import { store } from '../data/store'
import CardPriceComp from './CardPriceComp.vue';

export default {
    name: "PriceComp",
    components: {
    CardPriceComp
},
    data() {
        return {
            store
        };
    },
}

</script>

<template>
    <section id="PriceList" class="PriceList">
    
        <div class="container" data-aos="fade-up">
            <div class="d-flex justify-content-center">
                <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up">
                    <div class="content text-center">
                        <h6 data-aos="fade-up" data-aos-delay="200">Price List</h6>
                        <h1 data-aos="fade-up" data-aos-delay="400">Our Pricing</h1>
                        <p data-aos="fade-up" data-aos-delay="600">
                            When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .
                        </p>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-3 pt-5">
                <div class="col d-flex align-items-center justify-content-center d-lg-block mb-5 mb-lg-0"
                    v-for="(product, index) in store.productList" :key="index">
                    <CardPriceComp :product="product" :color="(index % 2) === 0 ? 'white' : 'orange'" />
                </div>
            </div>
        </div>    
    </section>
  
</template>

<style lang="scss"
 scoped>
 @import "../scss/partials/header.scss";
 @import "../scss/main.scss";
 
   #PriceList{
      width: 100%;
       height: 100vh;
       background-color: transparent;
       background-image: linear-gradient(180deg, #0b1953 60%, #FBFBFB 60%);
    }
    .container { 
         .content {
             color: white;
    
             h1 {
                 font-size: 50px;
                 font-weight: 800;
             }
    
             h6 {
                 color: $text-accent;
                 font-weight: 700;
             }
    
             p {
                 font-size: 16px;
                 font-weight: 400;
                 width: 600px;
             }
         }
     }
 </style>
