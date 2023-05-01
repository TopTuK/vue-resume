<template>
    <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container" data-aos="zoom-in" data-aos-delay="100">
            <h1>{{ $t('hero.name') }}</h1>

            <p>{{ $t('hero.me') }}  <span ref="typing"></span></p>

            <div class="social-links">
                <a 
                    v-for="link in socialLinks"
                    :href="link.link"
                    :class="link.class"
                >
                    <i class="bx" :class="link.iconClass" />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import Typed from 'typed.js'
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import socialLinks from '@/models/socialLinks.js'

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
    background: url("/images/hero-bg.jpg") top right no-repeat;
    background-size: cover;
    position: relative;
}

@media (min-width: 992px) {
    #hero {
    padding-left: 160px;
    }
}

#hero:before {
    content: "";
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

#hero h1 {
    margin: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #45505b;
}

#hero p {
    color: #45505b;
    margin: 15px 0 0 0;
    font-size: 26px;
    font-family: "Poppins", sans-serif;
}

#hero p span {
    color: #0563bb;
    letter-spacing: 1px;
}

#hero .social-links {
    margin-top: 30px;
}

#hero .social-links a {
    font-size: 24px;
    display: inline-block;
    color: #45505b;
    line-height: 1;
    margin-right: 20px;
    transition: 0.3s;
}

#hero .social-links a:hover {
    color: #0563bb;
}

@media (max-width: 992px) {
    #hero {
    text-align: center;
    }

    #hero h1 {
    font-size: 32px;
    line-height: 36px;
    }

    #hero p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 24px;
    }
}
</style>