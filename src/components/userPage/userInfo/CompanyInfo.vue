<template>
    <div class="company-info">
        <div class="company-info-block company-info-block-left">
            <div class="entry">
                <img
                    class="entry-icon icon-gray"
                    src="@/assets/images/icons/company/company.svg"
                    alt="Информация о компании"
                />
                <div class="entry-description">
                    <span>{{ jobName + ' в ' }}</span>
                    <a :href="'/companies' + company.link">{{
                        company.name
                    }}</a>
                </div>
            </div>
            <div class="entry">
                <img
                    class="entry-icon icon-gray"
                    src="@/assets/images/icons/company/department.svg"
                    alt="Информация о должности"
                />
                <div class="entry-description">
                    <a :href="department.link">{{ department.name }}</a>
                    <br />
                    <span>
                        <span class="dark-gray-text">Руководитель </span>
                        <a :href="'/persons/' + superior.id">{{
                            superior.name
                        }}</a>
                    </span>
                </div>
            </div>
        </div>
        <div class="company-info-block company-info-block-right">
            <div class="entry">
                <span>
                    <span class="text-light-gray"
                        >Работает в {{ company.shortName }}</span
                    >
                    {{ calculateDate(hiredTime) }} с
                    {{ toLocaleShortString(hiredTime) }}</span
                >
            </div>
            <div class="entry flex-end">
                <img src="@/assets/images/icons/company/person-filler.svg" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import calculateDate from '@/mixins/calculateDate'
export default {
    name: 'CompanyInfo',
    mixins: [calculateDate],
    computed: {
        ...mapState('user', [
            'jobName',
            'department',
            'company',
            'superior',
            'hiredTime',
        ]),
    },
    methods: {
        toLocaleShortString(date) {
            return new Date(date).toLocaleDateString('ru', {
                day: 'numeric',
                month: '2-digit',
                year: '2-digit',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.company-info {
    width: 100%;
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 25px;
    height: 185px;

    &-block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        &-left {
            max-width: 60%;
        }
    }
}

.entry {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    &.flex-end {
        justify-content: flex-end;
    }

    &-icon {
        margin-right: 10px;
    }
}
</style>
