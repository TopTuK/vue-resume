<template>
    <MenuHeader />
    <slot />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useMenuStore } from '@/store/menuStore';
import MenuHeader from '@/components/MenuHeader.vue';

const menuStore = useMenuStore();
onMounted(() => window.addEventListener('resize', menuStore.onWidthChange))
onUnmounted(() => window.removeEventListener('resize', menuStore.onWidthChange))
</script>