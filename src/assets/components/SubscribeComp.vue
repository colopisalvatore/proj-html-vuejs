<script>
export default {
    name: "SubscribeComp",
    components: {
        
    }
}
</script>

<template>
    <section id="contact">
        <div class="container">
            <div class="form-subscribe row align-items-center">
                <div class="col-12 col-lg-7">
                    <h2>We Offer Awesome Services</h2>
                    <p>When, while lovely valley teems with vapour around meand meridian sun strikes the upper surface .</p>
                </div>
                <div class="col-12 col-lg-5 d-flex justify-content-end">
                    <div class="form">
                        <input type="text" placeholder="Enter your Email Address">
                        <button href="#" class="btn-blue btn btn-hero scrollto">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../scss/partials/header.scss";
 @import "../scss/main.scss";
section {
    height: 45vh!important;
    background-color: transparent;
        background-image: linear-gradient(180deg, #FBFBFB 65%, #0b1953 65%);
    .container {
        .form-subscribe {
            padding: 4em 1em;
            background-color: transparent;
            background-image: $background-form;
            border-radius: 20px;
            color: $white;
            transform: translateY(50%);

            h2 {
                font-size: 2.2rem;
            }

            p {
                font-size: 1rem;
            }

            .form {
                position: relative;
                width: 100%;

                input {
                    width: 100%;
                    padding: 1em 1em;
                    border-radius: 35px;
                    border-style: none;

                    &:focus-visible {
                        outline: none;
                    }
                }

                button {
                    position: absolute;
                    top: 50%;
                    right: 5px;
                    transform: translateY(-50%);
                }
            }
        }
    }
}
</style>