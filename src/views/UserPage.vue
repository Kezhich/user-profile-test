<template>
  <div class="container">
    <Header />
    <div class="user-info-container">
      <avatar-block />
      <info-block />
    </div>
    <slide-transition v-if="isCurrentUser">
      <edit-avatar-block v-if="showAvatarEditBlock" />
    </slide-transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/userPage/Header";
import AvatarBlock from "@/components/userPage/AvatarBlock";
import InfoBlock from "@/components/userPage/InfoBlock";
import EditAvatarBlock from "@/components/userPage/EditAvatarBlock";
import SlideTransition from "@/components/transitions/SlideTransition";

export default {
  name: "userPage",
  components: {
    Header,
    AvatarBlock,
    InfoBlock,
    EditAvatarBlock,
    SlideTransition
  },
  computed: {
    ...mapState("auth", ["isCurrentUser"]),
    ...mapState("user", ["showAvatarEditBlock"])
  }
};
</script>

<style lang="scss">
.user-info-container {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
}
</style>
