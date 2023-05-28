<template>
    <section>
        <div class="flex flex-col subsection-title mb-2">
            <h1 class="subtitle text-uppercase">{{ $t('hobby.section_title') }}</h1>
        </div>

        <div class="flex flex-col">
            <p class="p-title">
                {{ $t('hobby.hobby_title1') }}
            </p>
            
            <p class="m-2">
                <blockquote class="mb-2">
                    <p class="fst-italic">
                        {{ $t('hobby.roman_title') }}
                    </p>

                    <ul class="fst-italic">
                        <li>{{ $t('hobby.roman_1') }}</li>
                        <li>{{ $t('hobby.roman_2') }}</li>
                        <li>{{ $t('hobby.roman_3') }}</li>
                        <li>{{ $t('hobby.roman_4') }}</li>
                    </ul>
                    
                    <p class="fst-italic">
                        {{ $t('hobby.roman_summary') }}
                    </p>

                    <footer>
                        <cite>{{ $t('hobby.roman_footer') }}</cite>
                    </footer>
                </blockquote>
            </p>

            <p class="p-title">
                {{ $t('hobby.hobby_title2') }}
            </p>

            <p>
                <ul class="gr-list">
                    <li>
                        <i class="bi bi-chevron-right"></i> {{ $t('hobby.hobby_dev1') }}
                    </li>
                    <li>
                        <i class="bi bi-chevron-right"></i> {{ $t('hobby.hobby_dev2') }}
                    </li>
                    <li>
                        <i class="bi bi-chevron-right"></i> {{ $t('hobby.hobby_dev3') }}
                    </li>
                    <li>
                        <i class="bi bi-chevron-right"></i> {{ $t('hobby.hobby_dev4') }}
                    </li>
                </ul>
            </p>

            <div class="p-1 d-flex align-items-center justify-content-center">
                <img src="@/assets/images/developing.png" class="img-fluid img-container" alt="">
            </div>

            <p class="p-title mt-2 mb-2">
                {{ $t('hobby.hobby_title3') }}
            </p>

            <div class="p-1 d-flex align-items-center justify-content-center">
                <iframe
                    class="img-container"
                    src="https://www.youtube.com/embed/5bhj5WB_T9c?feature=oembed"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    llowfullscreen=""
                    title="KAVёr Coffee live at Kaspersky Lab summer Party 2018"
                    id="fitvid2444">
                </iframe>
            </div>

            <p class="p-title mt-2 mb-2">
                {{ $t('hobby.hobby_title4') }}
            </p>

            <div class="p-1 d-flex align-items-center justify-content-center">
                <img src="@/assets/images/snowboarding.png" class="img-fluid img-container" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.subsection-title {
    margin-top: 10px;
}

.subsection-title .subtitle {
    font-size: 24px;
    font-weight: bold;
    position: relative;
    color: #173b6c;
}

.p-title {
    font-size: 18px;
    font-weight: bold;
    position: relative;
    color: #06367a;
}

blockquote {
    margin: 0;
    background: #F0F0F1;
    color: #333334;
    padding: 5px 10px;
    position: relative;
    border-left: 35px solid #DFDEDE;
}

blockquote:before {
    content: "";
    position: absolute;
    left: -29px;
    top: 5px;
    color: #BCBCBC;
    text-shadow: 1px 2px 0 white;
}

blockquote p {
    margin: 0 0 16px;
}

blockquote cite {
    font-style: normal;
    font-weight: 300;
    letter-spacing: .05em;
}

.gr-list {
    margin-left: 0;
    padding-right: 0;
}

ul.gr-list li {
    margin: 5px;
}

.img-container {
    width: 760px;
    height: 580px;
}
</style>