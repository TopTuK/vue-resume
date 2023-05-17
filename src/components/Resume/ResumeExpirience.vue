<template>
    <section class="mb-5 p-2">
        <h2 class="resume-section-title text-uppercase pb-3 mb-3">Work Experience</h2>

        <div class="resume-section-content">
            <div class="resume-timeline position-relative">
                <ResumeTimeline />
                <ResumeTimeline />
            </div>
        </div>
    </section>
</template>

<script setup>
import ResumeTimeline from '@/components/Resume/ResumeTimeline.vue';
</script>

<style scoped>
.resume-timeline {
    padding-left: 3rem;
}
</style>