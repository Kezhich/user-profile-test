<template>
  <div class="edit-input-container">
    <div class="edit-input-block">
      <input type="text" v-model="inputValue" v-mask="'+7(###)###-##-##'" />
    </div>
    <div class="buttons-block">
      <div class="button" @click="$emit('onConfirm', inputValue)">
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
  name: "EditPhoneInput",
  data: () => ({
    inputValue: ""
  }),
  props: {
    type: {
      type: String,
      required: true
    },
    defaultInput: {
      type: String,
      default: ""
    }
  },
  computed: {},
  created() {
    this.inputValue = this.defaultInput;
  }
};
</script>

<style lang="scss" scoped>
.edit-input-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.edit-input-block {
  input {
    width: 100%;
    padding: 10px 16px;
    min-width: 220px;
    height: 40px;
    border: 1px solid #071ac3;
  }
}

.buttons-block {
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
