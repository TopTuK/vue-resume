<template>
    <header class="resume-header pt-md-0">
        <div class="row">

            <div class="col-md-auto text-center text-md-start">
                <img class="picture" src="@/assets/images/profile.jpg" alt="">
            </div>

            <div class="col">
                <div class="row p-2 justify-content-center justify-content-md-between">
                    <div class="col-auto">
                        <h1 class="name mt-0 mb-1 text-white text-uppercase">
                            {{ $t('common.name') }}
                        </h1>

                        <div class="title mb-3">{{ $t('resume.work_title') }}</div>

                        <ul class="list-info">
                            <li class="mb-2"><i class="bi bi-envelope"></i> {{ $t('common.email') }}</li>
                            <li><i class="bi bi-phone"></i>{{ $t('common.phone_number') }}</li>
                        </ul>

                        <div class="mt-4" data-html2canvas-ignore="true">
                            <va-button @click="exportToPdf">
                                {{ $t('resume.download_pdf') }}
                            </va-button>
                        </div>
                    </div>

                    <div class="col-auto mt-5 me-5" data-html2canvas-ignore="true">
                        <ul class="resume-social">
                            <li class="mb-3"><a class="text-link" :href="$t('resume.linkedin_web')"><span class="text-center me-2"><i class="bi bi-linkedin"></i></span>{{ $t('resume.linkedin_web') }}</a></li>
                            <li class="mb-3"><a class="text-link" :href="$t('resume.github_web')"><span class="text-center me-2"><i class="bi bi-github"></i></span>{{ $t('resume.github_web') }}</a></li>
                            <li class="mb-3"><a class="text-link" :href="$t('resume.personal_web')"><span class="text-center me-2"><i class="bi bi-file-person"></i></span>{{ $t('resume.personal_web') }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>

<script setup>
import { useMenuStore } from '@/store/menuStore';
import html2pdf from "html2pdf.js";

const menuStore = useMenuStore();

const exportToPdf = (event) => {
    html2pdf(document.getElementById("resume"), {
        margin: menuStore.isMenuVisible ? [1, -78, 1, 1] : 1,
        filename: "my_resume.pdf",
    });
}
</script>

<style scoped>
.fa-fw {
    text-align: center;
    width: 1.25em; 
}

.col-auto {
    flex: 0 0 auto;
    width: auto;
}

.list-info {
    display: block;
    margin-block-start: 1em;
}

.pt-md-0 {
    padding-top: 0 !important;
  }
.col-md-auto {
    flex: 0 0 auto;
    width: auto;
}

.resume-header {
  background: #434E5E;
  color: rgba(255, 255, 255, 0.9);
  height: 220px;
}

.resume-header .picture {
  width: 220px;
}

.resume-header .name {
  font-size: 2.25rem;
  letter-spacing: 0.175rem;
  font-weight: 900;
}

.resume-header .title {
  font-size: 1.5rem;
}

.resume-header a {
  color: rgba(255, 255, 255, 0.6);
}

.resume-header a:hover {
  color: white;
}

.resume-social .fa-container {
    font-size: 1rem;
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 0.125rem;
    background: white;
    color: #434E5E;
}

a.text-link {
    text-decoration: none;
}

a.text-link:hover {
    text-decoration: underline;
}
</style>