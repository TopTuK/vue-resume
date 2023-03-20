<script setup>
import MainLayout from '@/layout/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <router-view />
    <!--
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    -->
  </MainLayout>
</template>
