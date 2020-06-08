<template>
  <div class="hobbies-container">
    <div class="hobbies-header" :class="{ hoverable: isCurrentUser }">
      <span class="subheader">Интересы</span>
      <edit-button v-if="this.isCurrentUser && !editMode" @clickEvent="toggleEdit" />
    </div>
    <ul v-if="!editMode" class="hobbies-list">
      <div v-if="hobbies.length">
        <li v-for="hobbie of hobbies" :key="hobbie" class="hobbie">{{hobbie}}</li>
      </div>
      <li class="hobbie" v-if="!hobbies.length" @click="toggleEdit">Заполнить</li>
    </ul>
    <badges-input
      v-else
      :selectedItems="hobbies"
      :listToSearchIn="hobbiesList"
      @onConfirm="confirmChanges"
      @onCancel="toggleEdit"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import EditButton from "../utility/EditButton";
import BadgesInput from "../utility/BadgesInput";

export default {
  name: "Hobbies",
  components: { EditButton, BadgesInput },
  data: () => ({
    editMode: false
  }),
  computed: {
    ...mapState("user", ["hobbies"]),
    ...mapState("auth", ["isCurrentUser"]),
    ...mapState("storage", ["hobbiesList"])
  },
  methods: {
    ...mapMutations("user", ["addHobbies", "removeHobbies"]),
    toggleEdit() {
      if (!this.isCurrentUser) return;
      this.editMode = !this.editMode;
    },
    confirmChanges({ newItems, removedItems }) {
      this.addHobbies(newItems);
      this.removeHobbies(removedItems);
      this.toggleEdit();
    }
  }
};
</script>

<style lang="scss">
.hobbies-container {
  display: flex;
  flex-direction: column;
  margin-right: 3%;
  width: 31%;
}
.hobbies-header {
  display: flex;
  margin-bottom: 8px;
}

.hobbies-list {
  display: flex;
  flex-wrap: wrap;
}

.hobbie {
  cursor: pointer;
  display: inline-block;
  color: #071ac3;
  margin: 0 16px 10px 0;
}
</style>