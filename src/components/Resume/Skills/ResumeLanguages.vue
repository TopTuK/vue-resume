<template>
    <section class="mb-5 p-2 me-1">
        <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
            {{ $t('resume.language_title') }}
        </h2>

        <div class="resume-section-content">
            <ul class="list-unstyled">
                <li
                    class="mb-2 ps-4 position-relative"
                    v-for="lang in languagesList"
                >
                    <i class="resume-lang-icon bi bi-translate position-absolute"></i>
                    <div class="resume-lang font-weight-bold pt-2">{{ lang }}</div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import languagesList from '@/models/languagesList';
</script>

<style scoped>
.resume-lang-icon {
    left: 0;
    top: 4px;
    color: #aab4c3;
}

.resume-lang {
    font-weight: bold;
    color: #434E5E;
}
</style>