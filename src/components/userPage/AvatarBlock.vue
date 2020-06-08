<template>
    <div class="left-block">
        <div
            class="avatar-container"
            :class="{ 'avatar-hoverable': isCurrentUser }"
            @click="toggleShowAvatar"
        >
            <img class="avatar" :src="avatar" alt="аватар пользователя" />
            <div class="avatar-edit-btn">
                <img
                    v-if="isCurrentUser"
                    height="17.5px"
                    width="17.5px"
                    src="@/assets/images/icons/avatar/edit-btn.svg"
                    alt="редактировать аватар"
                />
            </div>
        </div>
        <div class="left-block-info" v-if="isCurrentUser || showBirthDay">
            <div class="left-block-info-entry">
                <img
                    class="icon-left icon-gray"
                    src="@/assets/images/icons/avatar/birthday.svg"
                    alt="день рождения пользователя"
                />
                {{ birthDay | dateFilter }}
                <img
                    class="toggler"
                    v-if="isCurrentUser"
                    @click="toggleVisibility"
                    :src="
                        showBirthDay
                            ? require(`@/assets/images/icons/avatar/eye-crossed.svg`)
                            : require(`@/assets/images/icons/avatar/eye.svg`)
                    "
                    v-tooltip.bottom="showBirthDay ? 'скрыть' : 'показать'"
                />
            </div>
            <div class="left-block-info-entry" v-if="isCurrentUser">
                <img
                    class="icon-left icon-gray"
                    src="@/assets/images/icons/avatar/vacation.svg"
                    alt
                />
                {{ vacationDaysAvailable | declensionFilter(daysNameStrings) }}
                отпуска
            </div>
        </div>
        <button v-if="isCurrentUser" class="left-block-button">
            Мое развитие
        </button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import dateFilter from '@/filters/dateFilter'
import declensionFilter from '@/filters/declensionFilter'
export default {
    name: 'AvatarBlock',
    filters: {
        dateFilter,
        declensionFilter,
    },
    data: () => ({
        daysNameStrings: ['день', 'дня', 'дней'],
    }),
    computed: {
        ...mapState('auth', ['isCurrentUser']),
        ...mapState('user', [
            'vacationDaysAvailable',
            'birthDay',
            'avatar',
            'showBirthDay',
            'showAvatarEditBlock',
        ]),
    },
    methods: {
        ...mapMutations('user', [
            'toggleShowBirthday',
            'toggleShowAvatarEditBlock',
        ]),
        toggleVisibility() {
            if (!this.isCurrentUser) return
            this.toggleShowBirthday(!this.showBirthDay)
        },
        toggleShowAvatar() {
            if (!this.isCurrentUser) return
            this.toggleShowAvatarEditBlock()
        },
    },
}
</script>

<style lang="scss">
.left-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-info {
        width: 100%;
        margin-top: 24px;
        padding: 20px;
        background-color: #eee;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        &-entry {
            color: #212121;
            width: 100%;

            &:hover > .toggler {
                opacity: 1;
            }

            &:not(:first-child) {
                margin-top: 25px;
            }

            .icon-left {
                margin-right: 10px;
                width: 20px;
                height: 20px;
                vertical-align: sub;
            }
            .toggler {
                cursor: pointer;
                visibility: none;
                opacity: 0;
                height: 20px;
                width: 20px;
                margin-left: 12px;
                vertical-align: bottom;
                transition: opacity 0.6s;
            }
        }
    }

    &-button {
        margin-top: 24px;
        background-color: #071ac3;
        border: none;
        padding: 12px 33px;
        color: #fff;
        width: 100%;
    }
}
.avatar-container {
    display: flex;
    position: relative;
}
.avatar {
    width: 184px;
    height: 184px;
    transition: filter 0.6s;
}
.avatar-hoverable:hover {
    cursor: pointer;
    & > .avatar-edit-btn {
        opacity: 1;
    }
    & > .avatar {
        filter: grayscale(100%);
    }
}

.avatar-edit-btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    bottom: 0;
    width: 47px;
    height: 40px;
    display: flex;
    opacity: 0;
    transition: opacity 0.6s;
    background: #071ac3;
}
</style>
