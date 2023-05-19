<template>
    <section class="mb-5 p-2 me-1">
        <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
            {{ $t('resume.skills_title') }}
        </h2>
        
        <div class="resume-section-content">

            <div class="mb-1">
                <ul class="list-unstyled mb-2">
                    <ResumeTalent
                        v-for="skill in skills"
                        :skill="skill"
                    />
                </ul>
            </div>
            
            <div class="mt-1">
                <ul class="list-inline">
                    <li
                        v-for="skill in additionalSkillsList"
                        class="list-inline-item"
                    >
                        <span class="badge badge-light">{{ $t('skills.'+skill) }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import ResumeTalent from './ResumeTalent.vue';
import skills from '@/models/skillsList.js';
import additionalSkillsList from '@/models/additionalSkillsList.js';
</script>

<style scoped>

.list-inline-item {
    display: inline-block;
}

.badge-light {
    color: #58677c;
    background: #F7F8FA;
}
</style>