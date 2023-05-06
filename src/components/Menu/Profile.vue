<template>
    <div class="profile">
        <img src="@/assets/images/profile.jpg" alt="" class="img-fluid rounded-circle" />

        <h1 class="text-light"><router-link to="/">{{ $t('common.name') }}</router-link></h1>

        <div class="social-links mt-3 text-center">
            <a 
                v-for="link in socialLinks"
                :href="link.link"
                :class="link.class"
            >
                <i class="bx" :class="link.iconClass" />
            </a>
        </div>
    </div>
</template>

<script setup>
import socialLinks from '@/models/socialLinks.js';
</script>

<style scoped>
.profile img {
    margin: 15px auto;
    display: block;
    width: 120px;
    border: 8px solid #2c2f3f;
}
.profile h1 {
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    -moz-text-align-last: center;
    text-align-last: center;
    font-family: "Poppins", sans-serif;
}

.profile h1 a,
.profile h1 a:hover {
    color: #fff;
    text-decoration: none;
}

.profile .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #212431;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
}

.profile .social-links a:hover {
    background: #149ddd;
    color: #fff;
    text-decoration: none;
}
</style>