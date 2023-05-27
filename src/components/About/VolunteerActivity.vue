<template>
    <section data-aos="fade-up">
        <div class="flex flex-col subsection-title mb-2">
            <h1 class="subtitle text-uppercase">{{ $t('volunteer.section_title') }}</h1>
        </div>

        <ul class="gr-list">
            <li>
                <i class="bi bi-chevron-right"></i> {{ $t('volunteer.volunteer1') }}
            </li>
            <li>
                <i class="bi bi-chevron-right"></i> {{ $t('volunteer.volunteer2') }}
            </li>
            <li>
                <i class="bi bi-chevron-right"></i> {{ $t('volunteer.volunteer3') }}
            </li>
            <li>
                <i class="bi bi-chevron-right"></i> {{ $t('volunteer.volunteer4') }}
            </li>
            <li>
                <i class="bi bi-chevron-right"></i> {{ $t('volunteer.volunteer5') }}
            </li>
        </ul>
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

.gr-list {
    margin-left: 0;
    padding-right: 0;
}

ul.gr-list li {
    margin: 5px;
}
</style>