<template>
    <!-- ======= Mobile nav toggle button ======= -->
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

    <header id="header">
        <div class="d-flex flex-column">
            <Profile />
            <MainMenu />
        </div>
    </header>
</template>

<script setup>
import Profile from '@/components/Menu/Profile.vue';
import MainMenu from '@/components/Menu/MainMenu.vue';
</script>

<style scoped>
#header {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    transition: all 0.5s;
    padding: 0 15px;
    background: #040b14;
    overflow-y: auto;
}

@media (max-width: 1199px) {
    #header {
        left: -300px;
    }

    section.main {
        margin-left: -300px;
    }
}
</style>