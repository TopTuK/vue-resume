<template>
  <MainLayout>
    <!-- slot is current page -->
    <router-view />
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';
</script>
