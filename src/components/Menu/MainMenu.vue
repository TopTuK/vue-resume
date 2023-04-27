<template>
    <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>

    <header id="header" class="d-flex flex-column justify-content-center">
        <nav id="navbar" class="navbar nav-menu">
            <ul>
                <MenuItem
                    v-for="(item, index) in mainMenu"
                    :key="index"
                    :item="item"
                />
            </ul>
        </nav>
    </header>
</template>

<script setup>
import mainMenu from "@/models/mainMenu";
import MenuItem from '@/components/Menu/MenuItem.vue';
</script>