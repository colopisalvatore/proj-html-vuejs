<script>

export default {
    name: "HeaderComp",
    data() {
        return {
            
        };
    },
}

</script>

<template>
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

        <a href="index.html" class="logo me-auto"><img src="../img/white-logo-2.png" alt="" class="img-fluid"></a>

        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" href="#services">Services</a></li>
                <li><a class="nav-link scrollto" href="#portfolio">Blog</a></li>
                <li><a class="nav-link scrollto" href="#team">Contact</a></li>
                <li><a class="nav-link scrollto" href="#team">Portfolio</a></li>
                <li><button class="btn signin btn-blue scrollto" href="#about">Sign In</button></li>
            </ul>
        </nav><!-- .navbar -->

    </div>
</header>
</template>

<style lang="scss" scoped>
@import "../scss/partials/header.scss";
@import "../scss/main.scss"

</style>
