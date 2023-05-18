<template>
    <header class="resume-header pt-md-0">
        <div class="row">

            <div class="col-md-auto text-center text-md-start">
                <img class="picture" src="@/assets/images/profile.jpg" alt="">
            </div>

            <div class="col">
                <div class="row p-2 justify-content-center justify-content-md-between">
                    <div class="col-auto">
                        <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                            Sergey Sidorov
                        </h1>

                        <div class="title mb-3">Project Manager</div>

                        <ul class="list-unstyled list-info">
                            <li class="mb-2"><a class="text-link" href="#"><i class="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>Steve.Doe@website.com</a></li>
                            <li><a class="text-link" href="#"><i class="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>0123 456 78900</a></li>
                        </ul>

                        <div class="mt-4" data-html2canvas-ignore="true">
                            <va-button @click="exportToPdf">Download PDF</va-button>
                        </div>
                    </div>

                    <div class="secondary-info col-auto mt-5 me-5" data-html2canvas-ignore="true">
                        <ul class="resume-social list-unstyled">
                            <li class="mb-3"><a class="text-link" href="#"><span class="fa-container text-center me-2"><i class="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/stevedoe</a></li>
                            <li class="mb-3"><a class="text-link" href="#"><span class="fa-container text-center me-2"><i class="fab fa-github-alt fa-fw"></i></span>github.com/username</a></li>
                            <li class="mb-3"><a class="text-link" href="#"><span class="fa-container text-center me-2"><i class="fab fa-codepen fa-fw"></i></span>codepen.io/username/</a></li>
                            <li><a class="text-link" href="#"><span class="fa-container text-center me-2"><i class="fas fa-globe"></i></span>yourwebsite.com</a></li>
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
</style>