<template>
    <section
      id="resume" class="resume"
      :class="{main: menuStore.isMenuVisible}"
    >
        <article class="text-center position-relative">
            <div class="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                <ResumeHeader />

                <div class="p-5">
                    <ResumeSummary />
                </div>
                
                <div class="row">
                    <div class="col-lg-9">
                      <ResumeExpirience />
                    </div>

                    <div class="col-lg-3">

                    </div>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import { useMenuStore } from '@/store/menuStore';
import ResumeHeader from '@/components/Resume/ResumeHeader.vue';
import ResumeSummary from '@/components/Resume/ResumeSummary.vue';
import ResumeExpirience from '@/components/Resume/ResumeExpirience.vue';

const menuStore = useMenuStore();
</script>

<style>
/* https://laracasts.com/discuss/channels/vue/proper-way-of-adding-css-file-in-vuejs-application */
@import '@/assets/css/resume-base.css';

.resume-wrapper {
  padding-top: 30px;
  padding-bottom: 60px;
}

.resume-wrapper-inner {
  max-width: 1199px;
}

.resume-section-title {
  font-size: 1.25rem;
  position: relative;
  color: #434E5E;
}

.resume-section-title:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.5px;
  background: #8d9aad;
}

.resume-section-content {
  color: #58677c;
}
</style>
