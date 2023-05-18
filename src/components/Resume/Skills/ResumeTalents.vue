<template>
    <section class="mb-5 p-2 me-1">
        <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills</h2>
        
        <div class="resume-section-content">

            <div>
                <ul class="list-unstyled mb-4">
                    <ResumeTalent
                        v-for="skill in skills"
                        :skill="skill"
                    />
                </ul>
            </div>
            
            <div>
                <h4 class="resume-skills-cat font-weight-bold">Others</h4>
                <ul class="list-inline">
                    <li class="list-inline-item"><span class="badge badge-light">DevOps</span></li>
                    <li class="list-inline-item"><span class="badge badge-light">Code Review</span></li>
                    <li class="list-inline-item"><span class="badge badge-light">Git</span></li>
                    <li class="list-inline-item"><span class="badge badge-light">Unit Testing</span></li>
                    <li class="list-inline-item"><span class="badge badge-light">Wireframing</span></li>
                    <li class="list-inline-item"><span class="badge badge-light">Sketch</span></li>
                    <li class="list-inline-item"><span class="badge badge-light">Balsamiq</span></li>
                    <li class="list-inline-item"><span class="badge badge-light">WordPress</span></li>
                    <li class="list-inline-item"><span class="badge badge-light">Shopify</span></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import ResumeTalent from './ResumeTalent.vue';
import skills from '@/models/skillsList.js';
</script>

<style scoped>
.resume-skills-cat {
    font-size: 1rem;
    color: #434E5E;
}

.list-inline-item {
    display: inline-block;
}

.badge-light {
    color: #58677c;
    background: #F7F8FA;
}
</style>