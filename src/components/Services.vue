<template>
    <section id="services" class="main services">
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
import projects from "@/models/projects";
import ServiceCard from "@/components/Services/ServiceCard.vue";
</script>