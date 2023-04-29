<script setup>
</script>

<template>
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>{{ $t('about.title') }}</h2>
                <p>{{ $t('about.description') }}</p>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <img src="@/assets/images/profile.jpg" class="img-fluid" alt="">
                </div>

                <div class="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>{{ $t('about.profession') }}</h3>

                    <p class="fst-italic">
                        {{ $t('about.profession_desccription') }}
                    </p>

                    <div class="row">
                        <div class="col-lg-6">
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>{{ $t('about.birthday_titie') }}</strong> <span>{{ $t('about.birthday_date') }}</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>{{ $t('about.phone_title') }}</strong> <span>{{ $t('common.phone_number') }}</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>{{ $t('about.website_title') }}</strong> <span>{{ $t('common.website') }}</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>{{ $t('about.city_title') }}</strong> <span>{{ $t('about.city') }}</span></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>{{ $t('about.age_title') }}</strong> <span>{{ $t('common.age') }}</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>{{ $t('about.degree_title') }}</strong> <span>{{ $t('about.degree') }}</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>{{ $t('about.email_title') }}</strong> <span>{{ $t('common.email') }}</span></li>
                            </ul>
                        </div>
                    </div>

                    <p>
                        {{ $t('about.talents') }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>