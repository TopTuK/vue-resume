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

<style scoped>
.services .icon-box {
    margin-bottom: 20px;
}

.services .icon {
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    background: #149ddd;
    border-radius: 50%;
    transition: 0.5s;
    border: 1px solid #149ddd;
}

.services .icon i {
    color: #fff;
    font-size: 24px;
    line-height: 0;
}

.services .icon-box:hover .icon {
    background: #fff;
}

.services .icon-box:hover .icon i {
    color: #149ddd;
}

.services .title {
    margin-left: 80px;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
}

.services .title a {
    color: #343a40;
}

.services .title a:hover {
    color: #149ddd;
}

.services .description {
    margin-left: 80px;
    line-height: 24px;
    font-size: 14px;
}
</style>