<template>
  <div class="edit-btn" :class="position" @click="$emit('clickEvent')">
    <img src="@/assets/images/icons/utility/edit-btn.svg" alt="редактировать" />
  </div>
</template>

<script>
export default {
  name: "EditButton",
  props: {
    position: {
      type: String,
      default: "right"
    }
  }
};
</script>

<style lang="scss">
.edit-btn {
  display: flex;
  cursor: pointer;
  opacity: 0;
  transform: translate(20%, -20%);
  transition: opacity 0.6s, background-color 0.6s;
  width: 40px;
  height: 40px;
  justify-content: center;
  border-radius: 50%;

  &.right {
    right: -55px;
  }

  &.left {
    left: -30px;
    top: -25%;
  }

  &:hover {
    background-color: #e2e4f5;
  }
}
</style>
