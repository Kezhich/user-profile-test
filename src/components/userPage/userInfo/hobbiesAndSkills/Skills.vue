<template>
  <div class="skills-container">
    <div class="hobbies-header" :class="{ hoverable: isCurrentUser }">
      <span class="subheader">Профессиональные навыки</span>
      <edit-button v-if="this.isCurrentUser && !editMode" @clickEvent="toggleEdit" />
    </div>
    <ul v-if="!editMode" class="hobbies-list">
      <div v-if="skills.length">
        <li v-for="skill of skills" :key="skill" class="hobbie">{{skill}}</li>
      </div>
      <li class="hobbie" v-if="!skills.length" @click="toggleEdit">Заполнить</li>
    </ul>
    <badges-input
      v-else
      :selectedItems="skills"
      :listToSearchIn="skillsList"
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
  name: "Skills",
  components: { EditButton, BadgesInput },
  data: () => ({
    editMode: false
  }),
  computed: {
    ...mapState("user", ["skills"]),
    ...mapState("auth", ["isCurrentUser"]),
    ...mapState("storage", ["skillsList"])
  },
  methods: {
    ...mapMutations("user", ["addSkills", "removeSkills"]),
    toggleEdit() {
      if (!this.isCurrentUser) return;
      this.editMode = !this.editMode;
    },
    confirmChanges({ newItems, removedItems }) {
      this.addSkills(newItems);
      this.removeSkills(removedItems);
      this.toggleEdit();
    }
  }
};
</script>

<style lang="scss">
.skills-container {
  display: flex;
  flex-direction: column;
}

.hobbies-list {
  display: flex;
  flex-wrap: wrap;
}
.hobbies-header {
  display: flex;
  margin-bottom: 8px;
}
.hobbie {
  cursor: pointer;
  display: inline-block;
  color: #071ac3;
  margin: 0 16px 10px 0;
}
</style>