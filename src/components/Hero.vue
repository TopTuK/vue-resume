<script setup>
import Typed from 'typed.js'
import { onMounted, ref } from 'vue';

// https://github.com/Orlandster/vue-typed-js/issues/41
const typing = ref(null);

onMounted(() => {
    new Typed(
        typing.value, {
            strings: ['Project manager', 'Product manager', 'System Analyst', 'Developer'],
            typeSpeed: 80,
            backSpeed: 60,
            loop: true
        }
    )
});
</script>

<template>
    <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container" data-aos="zoom-in" data-aos-delay="100">
            <h1>Sergey Sidorov</h1>

            <p>I'm  <span ref="typing"></span></p>

            <div class="social-links">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
    </section>
</template>