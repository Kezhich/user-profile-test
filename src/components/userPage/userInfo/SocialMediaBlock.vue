<template>
  <div class="social-media-block">
    <a
      v-if="!existentSocialMedia.length && isCurrentUser"
      href="#"
      class="add-media"
      @click.prevent="toggleEdit"
    >
      <span>Добавить ссылки</span>
      <br />
      <span>на внешние аккаунты</span>
    </a>

    <div
      v-if="existentSocialMedia.length"
      v-show="!editMode"
      class="social-media-list"
      :class="{ hoverable: isCurrentUser }"
    >
      <edit-button v-if="isCurrentUser" position="left" @clickEvent="toggleEdit" />
      <div class="social-media-icon" v-for="media of existentSocialMedia" :key="media.name">
        <a :href="media.link" target="_blank">
          <img
            class="entry-icon"
            :src="require(`@/assets/images/icons/social-media/${media.name}.svg`)"
            :alt="media.name"
          />
        </a>
      </div>
    </div>

    <edit-social-media v-if="editMode" :list="socialMedia" @onCancel="toggleEdit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import EditButton from "./utility/EditButton";
import EditSocialMedia from "./utility/EditSocialMedia";
export default {
  name: "SocialMediaBlock",
  components: { EditButton, EditSocialMedia },
  data: () => ({
    editMode: false
  }),
  computed: {
    ...mapState("user", ["socialMedia"]),
    ...mapState("auth", ["isCurrentUser"]),
    existentSocialMedia() {
      return this.socialMedia.filter(media => media.link);
    }
  },
  methods: {
    toggleEdit() {
      this.editMode = !this.editMode;
    }
  }
};
</script>

<style lang="scss">
.social-media-list {
  display: flex;
}
.add-media {
  display: block;
  text-align: right;
}
.social-media-icon {
  display: inline-block;
  transition: opacity 0.6s;
  &:not(:first-child) {
    margin-left: 22px;
  }
  &:hover {
    opacity: 0.6;
  }
}
</style>
