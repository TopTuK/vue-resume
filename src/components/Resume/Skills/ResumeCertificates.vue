<template>
    <section class="mb-5 p-2 me-1">
        <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
            {{ $t('resume.certificates_title') }}
        </h2>

        <div class="resume-section-content">
            <ul class="list-unstyled">
                <li
                    class="mb-2 ps-4 position-relative"
                    v-for="cert in certificates"
                >
                    <i class="resume-award-icon bi bi-trophy position-absolute"></i>
                    <div class="resume-award-name">{{ $t('certificates.' + cert.name) }}</div>
                    <div class="resume-award-desc">{{ $t('certificates.' + cert.description) }}</div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import certificates from '@/models/certificatesList.js';
</script>

<style scoped>
.resume-award-icon {
    left: 0;
    top: 4px;
    color: #aab4c3;
}

.resume-award-name {
    font-weight: bold;
    color: #434E5E;
}

.resume-award-desc {
    font-size: 0.875rem;
}
</style>