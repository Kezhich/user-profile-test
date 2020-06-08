<template>
    <div class="description-container" v-if="about || isCurrentUser">
        <div class="hobbies-header" :class="{ hoverable: isCurrentUser }">
            <span class="subheader">О себе</span>
            <edit-button
                v-if="this.isCurrentUser && !editMode"
                @clickEvent="toggleEdit"
            />
        </div>
        <div class="user-description" v-if="!editMode">
            <span v-if="about && about.length">{{ about }}</span>
            <div v-else class="hobbie" @click="toggleEdit">Заполнить</div>
        </div>
        <text-area-input
            v-else
            @onCancel="toggleEdit"
            @onConfirm="confirmChanges"
            :text="about"
        />
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import EditButton from './utility/EditButton'
import TextAreaInput from './utility/TextAreaInput'
export default {
    name: 'UserDescription',
    components: { EditButton, TextAreaInput },
    data: () => ({
        editMode: false,
    }),
    computed: {
        ...mapState('auth', ['isCurrentUser']),
        ...mapState('user', ['about']),
    },
    methods: {
        ...mapMutations('user', ['setDescription']),
        toggleEdit() {
            if (!this.isCurrentUser) return
            this.editMode = !this.editMode
        },
        confirmChanges(description) {
            this.setDescription(description)
            this.toggleEdit()
        },
    },
}
</script>

<style lang="scss">
.description-container {
    padding: 24px;
}
.hobbie {
    cursor: pointer;
    display: inline-block;
    color: #071ac3;
    margin: 0 16px 10px 0;
}
</style>
