<script setup>
import mainMenu from '@/models/mainMenu.js';
import MenuItem from '@/components/MenuItem.vue';
</script>

<template>
    <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>

    <header id="header" class="d-flex flex-column justify-content-center">
        <nav id="navbar" class="navbar nav-menu">
            <ul>
                <MenuItem
                    v-for="(item, index) in mainMenu"
                    :key="index"
                    :item="item"
                />

<!--
                <li><router-link to='/' class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></router-link></li>
                <li><router-link to='/about' class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></router-link></li>
                <li><router-link to='/resume' class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></router-link></li>
                <li><router-link to='/services' class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></router-link></li>
                <li><router-link to='/contacts' class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contacts</span></router-link></li>
-->
            </ul>
        </nav>
    </header>
</template>