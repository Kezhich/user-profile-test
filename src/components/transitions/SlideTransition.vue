<template>
    <transition name="slide">
        <slot />
    </transition>
</template>

<script>
export default {
    name: 'SlideTransition',
}
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
    transition: bottom 0.8s ease-out;
}
.slide-enter,
.slide-leave-to {
    bottom: -57%;
}

.slide-enter-to,
.slide-leave {
    bottom: 0px;
}
</style>
