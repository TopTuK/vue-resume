import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useMenuStore = defineStore('menuStore', () => {
    const minWidth = 1199;

    const windowWidth = ref(window.innerWidth);

    const isMobileMenuVisible = ref(false);
    const isMenuVisible = computed(() => {
        return (windowWidth.value > minWidth) || (isMobileMenuVisible.value);
    });

    const toggleMenuVisible = () => {
        isMobileMenuVisible.value = !isMobileMenuVisible.value;
    };

    const onWidthChange = () => {
        windowWidth.value = window.innerWidth;
    };

    return {
        isMenuVisible,
        isMobileMenuVisible,
        toggleMenuVisible,
        onWidthChange,
    }
});