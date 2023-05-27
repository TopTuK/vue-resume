<template>
    <section 
        id="services"
        class="services section-content"
        :class="{main: menuStore.isMenuVisible}"
    >
        
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>{{ $t('services.title') }}</h2>
                <p>{{ $t('services.description') }}</p>
            </div>

            <div class="row">
                <ServiceCard
                    v-for="project in projects"
                    :service="project"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useMenuStore } from "@/store/menuStore";
import projects from "@/models/projects";
import ServiceCard from "@/components/Services/ServiceCard.vue";

const menuStore = useMenuStore();
</script>