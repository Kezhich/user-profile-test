<template>
    <div class="header">
        <h4 class="header-title">{{ name }}</h4>
        <span class="header-vacation">
            <img
                class="text-icon-left"
                src="@/assets/images/icons/heading/info.svg"
                alt="Ближвйший отпуск"
            />
            Запланирован отпуск с
            {{ closestVacationTime.start | dateFilter }} по
            {{ closestVacationTime.finish | dateFilter }}
        </span>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import dateFilter from '@/filters/dateFilter'
export default {
    name: 'UserHeader',
    filters: {
        dateFilter,
    },
    computed: {
        ...mapState('user', ['name']),
        ...mapGetters('user', ['closestVacationTime']),
    },
}
</script>

<style lang="scss">
.header {
    width: 100%;

    &-title {
        font-size: 34px;
        text-align: center;
        line-height: 46px;
        font-weight: 500;
        margin: 20px 0;
    }

    &-vacation {
        display: block;
        text-align: center;
        color: #757575;
    }
}

.text-icon-left {
    vertical-align: bottom;
}
</style>
