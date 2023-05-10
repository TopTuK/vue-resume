<template>
    <nav id="navbar" class="nav-menu navbar">
        <ul>
            <MenuItem
                v-for="(item, index) in mainMenu"
                :key="index"
                :item="item"
            />
        </ul>
    </nav>
</template>

<script setup>
import mainMenu from '@/models/mainMenu';
import MenuItem from '@/components/Menu/MenuItem.vue';
</script>
