<template>
  <div class="edit-social-media-block">
    <edit-social-media-input
      v-for="media of list"
      :key="media.name"
      ref="input"
      :media="media"
      :style="{backGroundImage: `@/assets/images/icons/social-media/${media.name}.svg`}"
      type="text"
      placeholder="ссылка на профиль"
    />
    <div class="buttons-block">
      <div class="button" @click="setAllSocialMedia">
        <img src="@/assets/images/icons/utility/submit.svg" alt />
      </div>
      <div class="button" @click="$emit('onCancel')">
        <img src="@/assets/images/icons/utility/cancel.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import EditSocialMediaInput from "./EditSocialMediaInput";
export default {
  name: "EditSocialMedia",
  components: {
    EditSocialMediaInput
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations("user", ["setSocialMedia"]),
    setAllSocialMedia() {
      const list = this.$refs.input;

      for (const input in list) {
        this.setSocialMedia({
          index: input,
          value: list[input].socialMedia
        });
      }

      this.$emit("onCancel");
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-social-media-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.buttons-block {
  margin-top: 15px;
  width: 45px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button {
    cursor: pointer;
  }
}
</style>