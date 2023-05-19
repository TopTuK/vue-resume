<template>
    <li class="mb-3">
        <div class="resume-skill-name mb-2">{{ $t('talents.'+props.skill.title) }}</div>
        <div class="progress resume-progress">
            <va-progress-bar :model-value="props.skill.val"/>
        </div>
    </li>
</template>

<script setup>
const props = defineProps({
    skill: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.resume-skill-name {
    font-size: 0.8125rem;
    color: #434E5E;
}

.progress {
    vertical-align: baseline;
}

.resume-progress {
    height: 0.6rem;
}
</style>