<template>
  <div class="hobbies-and-skills-container">
    <hobbies v-if="isCurrentUser || hobbies.length" />
    <skills v-if="isCurrentUser || skills.length" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Hobbies from "./hobbiesAndSkills/Hobbies";
import Skills from "./hobbiesAndSkills/Skills";
export default {
  name: "HobbiesAndSkills",
  components: {
    Hobbies,
    Skills
  },
  computed: {
    ...mapState("auth", ["isCurrentUser"]),
    ...mapState("user", ["hobbies", "skills"])
  }
};
</script>

<style lang="scss">
.hobbies-and-skills-container {
  display: flex;
  align-items: flex-start;
  padding: 24px;
}
</style>