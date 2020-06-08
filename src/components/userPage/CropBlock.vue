<template>
    <div class="crop">
        <label>
            <div class="crop__load-btn">
                <img
                    src="@/assets/images/icons/avatar/load-img-button.svg"
                    alt="загрузить изображение"
                />
                <p>Загрузить новое фото</p>
            </div>
            <input
                if="file-upload"
                ref="file"
                type="file"
                @change="loadFile"
                accept="image/jpeg,image/png"
            />
        </label>

        <vue-cropper
            class="crop__cropper"
            ref="cropper"
            :src="editImg"
            preview=".crop__preview"
            :aspect-ratio="1"
        />
        <div class="crop__preview"></div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
export default {
    name: 'CropBlock',
    components: { VueCropper },
    data: () => ({
        editImg: '',
    }),
    computed: {
        ...mapState('user', ['avatar']),
    },
    methods: {
        ...mapMutations('user', ['setAvatar', 'toggleShowAvatarEditBlock']),
        loadFile() {
            const fileInputValue = this.$refs.file.files
            if (fileInputValue.length) {
                const file = fileInputValue[0]
                const fileReader = new FileReader()

                fileReader.onload = event => {
                    this.editImg = event.target.result
                    this.$refs.cropper.replace(this.editImg, true)
                }
                fileReader.readAsDataURL(file)
            }
        },
        saveChanges() {
            this.setAvatar(this.$refs.cropper.getCroppedCanvas().toDataURL())
            this.toggleShowAvatarEditBlock()
        },
    },
    created() {
        this.editImg = this.avatar
    },
}
</script>

<style lang="scss">
.crop {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 36px;

    &__load-btn {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 184px;
        height: 184px;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2),
            0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);

        img {
            margin-bottom: 10px;
        }

        p {
            color: #071ac3;
        }
    }

    &__preview {
        width: 48px;
        height: 48px;
        margin-left: 16px;
        overflow: hidden;
        align-self: flex-start;
    }

    &__cropper {
        margin-left: 24px;
    }

    input[type='file'] {
        display: none;
    }
}

.cropper-point.point-s,
.cropper-point.point-n,
.cropper-point.point-w,
.cropper-point.point-e {
    display: none;
}
.cropper-line {
    display: none;
}

.cropper-point {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fff;
}
.cropper-dashed {
    display: none;
}
.cropper-center {
    display: none;
}

.cropper-view-box {
    outline: none;
}
</style>
