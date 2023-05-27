<template>
    <section>
        <div class="flex flex-col subsection-title mb-2">
            <h1 class="subtitle text-uppercase">{{ $t('hobby.section_title') }}</h1>
        </div>

        <div class="flex flex-col">
            <p class="p-title">
                Подходы и методология управления проектами. Разработка ПО: Scrum, Lean, проектный подход.
            </p>
            
            <p class="m-2">
                <blockquote class="mb-2">
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

                    <footer>
                        <cite>Том Демарко. Роман об управлении проектами</cite>
                    </footer>
                </blockquote>
            </p>

            <p class="p-title">
                Архитектура и разработка программного обеспечения.
            </p>

            <p>
                <ul class="gr-list">
                    <li>
                        <i class="bi bi-chevron-right"></i> Обладаю навыком и опытом разработки ПО с использованием .Net (C#), Dart, Python, JavaScript. 
                    </li>
                    <li>
                        <i class="bi bi-chevron-right"></i> Имею практический опыт в создании и обучении нейросетей (NEAT,  MNIST, CNN)
                    </li>
                    <li>
                        <i class="bi bi-chevron-right"></i> Понимание архитектурных паттернов разработки. Мне знакомы и не чужды такие термины и аббревиатуры, как IoC, Dependacy Injection, Closure, SOLID, Fabric Method, Service Locator, Singleton.
                    </li>
                    <li>
                        <i class="bi bi-chevron-right"></i> Понимаю приципы микросервисной архитектуры. Обладаю практическим  опытом в CI/CD. Понимаю приципы DevOps: Docker, K8S.
                    </li>
                </ul>
            </p>

            <div class="p-1 d-flex align-items-center justify-content-center">
                <img src="@/assets/images/developing.png" class="img-fluid img-container" alt="">
            </div>

            <p class="p-title mt-2 mb-2">
                Создал и развиваю музыкальную группу KAVёr. Играю на бас-гитаре.
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
                Занимаюсь активными видами спорта, летом на море, зимой в горах.
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