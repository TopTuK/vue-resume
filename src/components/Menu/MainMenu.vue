<template>
    <i 
        class="bi bi-list mobile-nav-toggle d-lg-none"
        :click="mobileNavClick"
    />

    <header id="header" class="d-flex flex-column justify-content-center">
        <nav id="navbar" class="navbar nav-menu">
            <ul>
                <MenuItem
                    v-for="(item, index) in mainMenu"
                    :key="index"
                    :item="item"
                />
            </ul>
        </nav>
    </header>
</template>

<script setup>
import {ref, computed} from 'vue';
import mainMenu from '@/models/mainMenu';
import MenuItem from '@/components/Menu/MenuItem.vue';

const mobileNavClick = () => {
    console.log('Hello world!');
    //document.body.classList.toggle('mobile-nav-active');
};

/*
on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
})
*/
</script>