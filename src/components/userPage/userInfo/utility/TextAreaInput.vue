<template>
  <div class="text-area-container">
    <textarea v-model="description" class="textarea" ref="textarea" @keyup="resizeTextArea"></textarea>
    <div class="buttons-block">
      <div class="button" @click="$emit('onConfirm', description)">
        <img src="@/assets/images/icons/utility/submit.svg" alt />
      </div>
      <div class="button" @click="$emit('onCancel')">
        <img src="@/assets/images/icons/utility/cancel.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextAreaContainer",
  props: {
    text: {
      type: String
    }
  },
  data: () => ({
    description: ""
  }),
  methods: {
    resizeTextArea() {
      const a = this.$refs.textarea;
      a.style.height = a.scrollHeight + "px";
      a.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  },
  mounted() {
    this.description = this.text;
    this.$refs.textarea.focus();
    this.$nextTick(() => {
      this.resizeTextArea();
    });
  }
};
</script>

<style lang="scss">
.text-area-container {
  display: flex;
}
.textarea {
  resize: none;
  padding: 10px 16px;
  width: 100%;
  overflow: hidden;
  border: 1px solid #071ac3;

  &:focus {
    border: 1px solid #071ac3;
  }
}
</style>