<template>
    <div class="edit-avatar">
        <h5 class="edit-avatar__header">Редактирование фото</h5>
        <crop-block ref="cropBlock" />
        <div class="edit-avatar__buttons-block">
            <button class="save-btn edit-avatar__btn" @click="saveFile">
                Сохранить
            </button>
            <button
                class="close-btn edit-avatar__btn"
                @click="toggleShowAvatarEditBlock"
            >
                Закрыть
            </button>
        </div>
        <div class="edit-avatar__cancel-btn" @click="toggleShowAvatarEditBlock">
            <img src="@/assets/images/icons/avatar/close-btn.svg" alt />
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CropBlock from './CropBlock'
export default {
    name: 'EditAvatarBlock',
    components: {
        CropBlock,
    },
    methods: {
        ...mapMutations('user', ['toggleShowAvatarEditBlock']),
        saveFile() {
            this.$refs.cropBlock.saveChanges()
        },
    },
}
</script>

<style lang="scss">
.edit-avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    padding-top: 27px;
    padding-bottom: 20px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 57%;
    background-color: #fff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.14);

    &__header {
        font-size: 24px;
        line-height: 140%;
        font-weight: 500;
    }

    &__buttons-block {
        display: flex;
        justify-content: center;
        margin-top: 34px;
    }

    &__cancel-btn {
        cursor: pointer;
        position: absolute;
        top: 35px;
        right: 15%;
    }

    &__btn {
        padding: 12px 16px;
        cursor: pointer;
        border: none;
    }
}

.save-btn {
    color: #fff;
    background-color: #071ac3;
}

.close-btn {
    color: #071ac3;
    background-color: transparent;
}
</style>
