<script setup>
</script>

<template>
    <section id="about" class="main about">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>{{ $t('about.title') }}</h2>
                <p>{{ $t('about.description') }}</p>
            </div>

            <div class="row">
                <div class="col-lg-4" data-aos="fade-right">
                    <img src="@/assets/images/profile.jpg" class="img-fluid" alt="">
                </div>

                <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
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

<style scoped>
.about .content h3 {
    font-weight: 700;
    font-size: 26px;
    color: #173b6c;
}

.about .content ul {
    list-style: none;
    padding: 0;
}

.about .content ul li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.about .content ul strong {
    margin-right: 10px;
}

.about .content ul i {
    font-size: 16px;
    margin-right: 5px;
    color: #149ddd;
    line-height: 0;
}

.about .content p:last-child {
    margin-bottom: 0;
}
</style>