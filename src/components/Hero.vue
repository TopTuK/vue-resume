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
            <!--
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            -->
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