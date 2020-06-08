<template>
  <input
    :style="{backgroundImage: 'url(' + require(`@/assets/images/icons/social-media/${media.name}.svg`) + ')'}"
    type="text"
    placeholder="ссылка на профиль"
    v-model="socialMedia"
  />
</template>

<script>
export default {
  name: "EditSocialMediaInput",
  data: () => ({
    socialMedia: ""
  }),
  props: {
    media: {
      type: Object,
      required: true
    }
  },
  created() {
    this.socialMedia = this.media.link;
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 10px 16px;
  padding-left: 40px;
  min-width: 220px;
  height: 40px;
  border: 1px solid #071ac3;
  background-repeat: no-repeat;
  background-position: 3% center;

  &:not(:first-child) {
    margin-top: 8px;
  }
}
</style>