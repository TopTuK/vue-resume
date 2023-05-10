<template>
    <!-- ======= Mobile nav toggle button ======= -->
    <i 
        class="bi bi-list mobile-nav-toggle d-xl-none"
        @click="menuClick"
    />

    <header id="header" :style="menuVisible">
        <div class="d-flex flex-column">
            <Profile />
            <MainMenu />

            <div class="mt-3 align-self-center">
                <va-button-toggle
                    v-model="lang"
                    preset="secondary"
                    border-color="primary"
                    :options="[
                        { label: 'RU', value: 'ru' },
                        { label: 'EN', value: 'en' },
                    ]"
                />
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMenuStore } from '@/store/menuStore';
import Profile from '@/components/Menu/Profile.vue';
import MainMenu from '@/components/Menu/MainMenu.vue';

const menuStore = useMenuStore();

// const isMenuVisible = ref(false);

const menuVisible = computed(() => {
    //const res = isMenuVisible.value ? 'overflow: hidden; left: 0;' : '';
    const res = menuStore.isMobileMenuVisible ? 'overflow: hidden; left: 0;' : '';
    return res;
});

const menuClick = (event) => {
    // isMenuVisible.value = !isMenuVisible.value;
    menuStore.toggleMenuVisible();

    /*
    const section = document.querySelector('section.content');
    if (section != null) {
        section.classList.toggle('main');
    }
    */

    event.target.classList.toggle('bi-list');
    event.target.classList.toggle('bi-x');
};

const i18n = useI18n();
const lang = ref(i18n.locale);

watch(lang, () => {
    i18n.locale = lang.value;
});
</script>

<style scoped>
#header {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    transition: all 0.5s;
    padding: 0 15px;
    background: #040b14;
    overflow-y: auto;
}

@media (max-width: 1199px) {
    #header {
        left: -300px;
    }
}
</style>