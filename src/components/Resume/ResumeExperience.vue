<template>
    <section class="ms-1 mb-5 p-2">
        <h2 class="resume-section-title text-uppercase pb-3 mb-3">{{ $t('resume.work_experience') }}</h2>

        <div class="resume-section-content">
            <div class="resume-timeline position-relative">
                <ResumeTimeline
                    v-for="job in jobs"
                    :job="job"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import jobs from '@/models/jobList.js';
import ResumeTimeline from '@/components/Resume/ResumeTimeline.vue';
</script>

<style scoped>
.resume-timeline {
    padding-left: 3rem;
}

.resume-timeline:before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 100%;
    background: #aab4c3;
    left: 22px;
    top: 4px;
    position: absolute;
}
</style>