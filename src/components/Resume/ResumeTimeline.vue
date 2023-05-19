<template>
    <article class="resume-timeline-item position-relative pb-4">
        <div class="mb-1">
            <div class="d-flex flex-column flex-md-row">
                <h3 class="resume-position-title mb-2">{{ $t('props.job.position_title') }}</h3>
                <div class="resume-company-name ms-auto">{{ props.job.company_name }}</div>
            </div>

            <div class="resume-position-time mb-3">{{ props.job.job_period }}</div>

            <div class="resume-timeline-item-desc">
                <p class="mb-3">{{ props.job.job_description }}</p>

                <h4 class="resume-timeline-item-desc-heading mb-2">{{ $t('resume.achievements_title') }}</h4>

                <p class="mb-1">{{ props.job.achievements_title }}</p>
                <ul class="mb-3">
                    <li 
                        class="list-item"
                        v-for="achievement in props.job.achievements"
                    >
                        {{ achievement }}
                    </li>

                </ul>

                <h4 class="resume-timeline-item-desc-heading mb-1">{{ $t('resume.tags_title') }}</h4>
                <ul class="list-inline">
                    <li 
                        class="list-inline-item"
                        v-for="tag in props.job.tags"
                    >
                        <span class="badge bg-secondary badge-pill">{{ tag }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    job: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.resume-timeline-item:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -32px;
    top: 3px;
    width: 15px;
    height: 15px;
    border: 4px solid #58677c;
    background: white;
    border-radius: 50%;
}

.resume-position-title {
    font-size: 1.125rem;
    color: #434E5E;
}

.resume-company-name {
    color: #58677c;
    font-weight: 500;
}

.resume-position-time {
    color: #aab4c3;
}

.resume-timeline-item-desc-heading {
    font-size: 1rem;
}

.list-item {
    font-size: 14px;
    margin-left: 10px;
    list-style-type: circle;
}

.list-inline {
    padding-left: 0;
    list-style: none;
}

.list-inline-item {
    display: inline-block;
}
</style>