import declensionFilter from '@/filters/declensionFilter'
export default {
    filters: {
        declensionFilter,
    },
    data: () => ({
        yearStrings: ['год', 'года', 'лет'],
        monthStrings: ['месяц', 'месяца', 'месяцев'],
        dayStrings: ['день', 'дня', 'дней'],
    }),
    methods: {
        calculateDate(date) {
            const sdt = new Date(date)
            const difdt = new Date(new Date() - sdt)
            const years = difdt.toISOString().slice(0, 4) - 1970
            const months = difdt.getMonth()
            const days = difdt.getDate()

            if (years) {
                return this.$options.filters.declensionFilter(
                    years,
                    this.yearStrings
                )
            }

            if (months) {
                return this.$options.filters.declensionFilter(
                    months,
                    this.monthStrings
                )
            }

            if (days) {
                return this.$options.filters.declensionFilter(
                    days,
                    this.dayStrings
                )
            }

            return 'с сегодняшнего дня'
        },
    },
}
