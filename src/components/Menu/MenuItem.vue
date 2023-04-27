<template>
    <li>
        <router-link :to="item.path" class="nav-link scrollto" :class="activeClass">
            <i class="bx" :class="item.iconClass"></i> <span>{{ $t('menu.' + item.title) }}</span>
        </router-link>
    </li>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

const route = useRoute();
const activeClass = computed(() => {
    return route.name == props.item.title
        ? "active"
        : '';
});
</script>