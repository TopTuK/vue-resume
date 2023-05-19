<template>
    <section class="mb-5 p-2 me-1">
        <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
            {{ $t('resume.education_title') }}
        </h2>

        <div class="resume-section-content">
            <ul class="list-unstyled">
                <li
                    class="mb-2 ps-4 position-relative"
                    v-for="education in educationList"
                >
                    <i class="resume-degree-icon bi bi-mortarboard position-absolute"></i>
                    <div class="resume-degree font-weight-bold mb-2">{{ education.name }}</div>
                    <div class="resume-degree-org mb-1">{{ education.title }}</div>
                    <div class="resume-degree-time mb-1">{{ education.period }}</div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import educationList from '@/models/educationList';
</script>

<style scoped>
.resume-degree-icon {
    left: 0;
    top: 4px;
    color: #aab4c3;
}

.resume-section-content {
    color: #58677c;
}

.resume-degree {
    font-weight: bold;
    color: #434E5E;
}

.resume-degree-org {
    font-size: 0.875rem;
}

.resume-degree-time {
    color: #434E5E;
    font-size: 0.875rem;
}
</style>