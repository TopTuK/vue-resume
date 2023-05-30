<template>
    <section class="mb-5 p-2 me-1">
        <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
            {{ $t('resume.interests_title') }}
        </h2>
        <div class="resume-section-content">
            <ul class="list-unstyled">
                <li
                    class="ps-1 mb-2"
                    v-for="interest in interestsList"
                >
                    <i class="bi bi-chevron-right"></i> {{ $t('interests.'+interest) }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import interestsList from '@/models/interestsList';
</script>