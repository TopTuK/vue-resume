<template>
    <article class="resume-timeline-item position-relative pb-5">
        <div class="mb-2">
            <div class="d-flex flex-column flex-md-row">
                <h3 class="resume-position-title mb-2">Super Lead</h3>
                <div class="resume-company-name ms-auto">Kaspersky Lab</div>
            </div>

            <div class="resume-position-time mb-3">2011 - Present</div>

            <div class="resume-timeline-item-desc">
                <p class="mb-3">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>

                <h4 class="resume-timeline-item-desc-heading mb-1">Achievements:</h4>
                <p class="mb-1">Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <ul>
                    <li class="list-item">Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                    <li class="list-item">At vero eos et accusamus et iusto odio dignissimos.</li>
                    <li class="list-item">Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                    <li class="list-item">Maecenas tempus tellus eget.</li>
                </ul>

                <h4 class="resume-timeline-item-desc-heading mb-1">Technologies used:</h4>
                <ul class="list-inline mb-2">
                    <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Angular</span></li>
                    <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Python</span></li>
                    <li class="list-inline-item"><span class="badge bg-secondary badge-pill">jQuery</span></li>
                    <li class="list-inline-item"><span class="badge bg-secondary badge-pill">Webpack</span></li>
                    <li class="list-inline-item"><span class="badge bg-secondary badge-pill">HTML/SASS</span></li>
                    <li class="list-inline-item"><span class="badge bg-secondary badge-pill">PostgresSQL</span></li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script setup>
</script>

<style scoped>
.resume-timeline-item:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -32px;
    top: 3px;
    width: 15px;
    height: 15px;
    border: 4px solid #58677c;
    background: white;
    border-radius: 50%;
}

.resume-position-title {
    font-size: 1.125rem;
    color: #434E5E;
}

.resume-company-name {
    color: #58677c;
    font-size: 0.875rem;
    font-weight: 500;
}

.resume-position-time {
    font-size: 0.875rem;
    color: #aab4c3;
}

.resume-timeline-item-desc-heading {
    font-size: 1rem;
}

.list-item {
    font-size: 14px;
    margin-left: 10px;
    list-style-type: circle;
}

.list-inline {
    padding-left: 0;
    list-style: none;
}

.list-inline-item {
    display: inline-block;
}
</style>