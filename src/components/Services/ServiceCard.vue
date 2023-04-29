<template>
    <div 
        class="col-lg-4 col-md-6 d-flex align-items-stretch"
        :class="props.service.class"
        data-aos="zoom-in" 
        :data-aos-delay="props.service.delay"
    >
        <div 
            class="icon-box"
            :class="props.service.iconBox"
        >
            <div class="icon">
                <img
                    :src="props.service.icon"
                    width="128"
                    height="128"
                    style="padding: 5px;"
                    alt="">
            </div>

            <h4><a :href="props.service.url">{{ $t(props.service.title) }}</a></h4>
            
            <p>{{ $t(props.service.description) }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    service: {
        type: Object,
        required: true,
    },
});
</script>