<template>
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in" data-aos-delay="100">
            <h1>{{ $t('hero.name') }}</h1>

            <p>{{ $t('hero.me') }}  <span ref="typing"></span></p>
        </div>
    </section>
</template>

<script setup>
import Typed from 'typed.js'
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

// https://github.com/Orlandster/vue-typed-js/issues/41
const typing = ref(null);

const i18n = useI18n();
const typingMessages = [
    i18n.t('hero.project'),
    i18n.t('hero.product'),
    i18n.t('hero.analyst'),
    i18n.t('hero.developer'),
];

onMounted(() => {
    new Typed(
        typing.value, {
            strings: typingMessages,
            typeSpeed: 80,
            backSpeed: 60,
            loop: true
        }
    )
});
</script>

<style scoped>
#hero {
    width: 100%;
    height: 100vh;
    background: url("/images/hero-bg.jpg") top center;
    background-size: cover;
}

#hero:before {
    content: "";
    background: rgba(5, 13, 24, 0.3);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

#hero .hero-container {
    position: relative;
    z-index: 2;
    min-width: 300px;
}

#hero h1 {
    margin: 0 0 10px 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
}

#hero p {
    color: #fff;
    margin-bottom: 50px;
    font-size: 26px;
    font-family: "Poppins", sans-serif;
}

#hero p span {
    color: #fff;
    padding-bottom: 4px;
    letter-spacing: 1px;
    border-bottom: 3px solid #149ddd;
}

@media (min-width: 1024px) {
    #hero {
        background-attachment: fixed;
    }
}

@media (max-width: 768px) {
    #hero h1 {
        font-size: 28px;
        line-height: 36px;
    }

    #hero h2 {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}
</style>