<template>
    <section id="talents" class="talents">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>{{ $t('talents.title') }}</h2>
                <p>{{ $t('talents.description') }}</p>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <img src="@/assets/images/talents_skills.png" class="img-fluid" alt="">
                </div>

                <div class="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>{{ $t('talents.subtitle') }}</h3>

                    <p class="fst-italic">
                        {{ $t('talents.project_title') }}
                    </p>

                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
</script>