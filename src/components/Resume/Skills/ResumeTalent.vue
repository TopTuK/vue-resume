<template>
    <li class="mb-2">
        <div class="resume-skill-name mb-2">{{ props.skill.title }}</div>
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

<style>
</style>