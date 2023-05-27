<template>
    <section
        id="talents"
        class="talents section-content"
        :class="{main: menuStore.isMenuVisible}"
    >
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>{{ $t('talents.talents_title') }}</h2>
                <p class="fst-italic">{{ $t('talents.description') }}</p>
            </div>

            <div class="row no-gutters d-flex align-items-center justify-content-center">
                <div class="col-lg-4">
                    <img src="@/assets/images/talents_skills.png" class="img-fluid" alt="">
                </div>

                <div class="col-lg-8 pt-4 pt-lg-0 content">                    
                    <p class="mb-2">
                        {{ $t('talents.talents_description') }}
                    </p>

                    <p>
                        {{ $t('talents.project_title') }}
                    </p>

                </div>
            </div>

            <div class="row skills">
                <div class="flex flex-col talent-title">
                    <h1 class="subtitle">{{ $t('talents.hardskills_title') }}</h1>
                    
                    <p style="margin-top: 10px; margin-bottom: 10px;">
                        {{ $t('talents.talents_subtitle') }}: {{ $t('talents.hybrid_title') }}; {{ $t('talents.agile_title') }}.
                    </p>
                    
                    <p>{{ $t('talents.talents_footer') }}</p>
                </div>

                <div class="col-lg-6" data-aos="fade-up">
                    <SkillProgress
                        v-for="skill in skills.slice(0, 3)"
                        :skill="skill"
                    />
                </div>

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <SkillProgress
                        v-for="skill in skills.slice(3, 5)"
                        :skill="skill"
                    />
                </div>

                <div class="flex flex-col talent-title">
                    <h1 class="subtitle">{{ $t('talents.softskills_title') }}</h1>
                </div>

                <div class="flex flex-col">
                    <p>
                        {{ $t('talents.communication_skills') }}
                    </p>

                    <ul class="gr-list" data-aos="fade-up">
                        <li>
                            <i class="bi bi-chevron-right"></i> {{ $t('talents.communication_skill_1') }}
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-chevron-right"></i> {{ $t('talents.communication_skill_2') }}
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-chevron-right"></i> {{ $t('talents.communication_skill_3') }}
                        </li>
                        <li class="list-group-item">
                            <i class="bi bi-chevron-right"></i> {{ $t('talents.communication_skill_4') }}
                        </li>
                    </ul>
                </div>

                <div class="flex flex-col talent-title">
                    <h1 class="subtitle">{{ $t('talents.businessskills_title') }}</h1>
                </div>

                <div class="flex flex-col">
                    <p>
                        {{ $t('talents.businessskills_description') }}
                    </p>
                    <div class="p-1 d-flex align-items-center justify-content-center">
                        <img src="@/assets/images/business_skills.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useMenuStore } from '@/store/menuStore';
import SkillProgress from "@/components/Talents/SkillProgress.vue";
import skills from "@/models/skillsList";

const menuStore = useMenuStore();
</script>

<style scoped>
.talents {
    padding: 15px;
}

.talent-title {
    margin-top: 10px;
    margin-bottom: 10px;
}

.talent-title .subtitle {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    position: relative;
    color: #173b6c;
}

.list-mygroup {
    margin: 10px;
}

.skills .progress {
  height: 60px;
  display: block;
  background: none;
  border-radius: 0;
}

.skills .progress .skill {
  padding: 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #050d18;
}

.skills .progress .skill .val {
  float: right;
  font-style: normal;
}

.skills .progress-bar-wrap {
  background: #dce8f8;
  height: 10px;
}

.skills .progress-bar {
  width: 1px;
  height: 10px;
  transition: 0.9s;
  background-color: #149ddd;
}

.gr-list {
    margin-left: 0;
    padding-right: 0;
}

ul.gr-list li {
    margin: 5px;
}
</style>