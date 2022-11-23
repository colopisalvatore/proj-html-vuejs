<script>
import { store } from '../data/store'

export default {
    name: "FooterBottComp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
        <div class="container pt-3 pb-2 d-flex justify-content-between">
            <div class="corporate">
                <h4>2020 Phlox. All Higths Reserved.</h4>
            </div>
            <div class="social-links">
                <a v-for="(social, index) in store.socialLinks" :key="index" :href="social.href" :class="social.name">
                    <i :class="`fa-brands fa-${social.name}`"></i>
                </a>
            </div>
        </div>
</template>

<style lang="scss" scoped>
@import "../scss/partials/header.scss";
 @import "../scss/main.scss";

.corporate {
    h4 {        
        font-size: 1rem;
        color: $text-secondary;
    }
}

.social-links {
    a {
        color: #fff;
        margin: 0 .5rem;

        &.instagram:hover {
            color: $text-accent;
        }

        &.linkedin-in:hover,
        &.facebook-f:hover {
            color: #0a66c2;
        }

        &.twitter:hover {
            color: #1da1f2;
        }
    }
}
</style>