<template>
    <section class="ms-3">
        <div class="flex flex-col subsection-title mb-2">
            <h1 class="subtitle text-uppercase">{{ $t('hobby.section_title') }}</h1>
        </div>

        <div class="flex flex-col">
            <p>Подходы и методология управления проектами, разработки уникальных продуктами: проектный подход, Agile.</p>
            
            <p class="m-2">
                <blockquote>
                    <p class="fst-italic">
                        Для руководства нужны сердце, нутро, душа и нюх. Так что:
                    </p>

                    <ul class="fst-italic">
                        <li>- руководить надо сердцем;</li>
                        <li>- чувствовать нутром;</li>
                        <li>- вкладывать в команду и проект душу;</li>
                        <li>- иметь нюх на всякую ерунду и бессмыслицу.></li>
                    </ul>
                    
                    <p class="fst-italic">
                        Главнокомандующий на поле битвы, как метафора управления проектами. К началу сражения работа главнокомандующего уже закончена.
                    </p>
                    <footer>- <cite>Роман об управлении проектами</cite></footer>
                </blockquote>
            </p>
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
</style>