<template>
  <div class="info-block">
    <company-info />
    <contacts-block />
    <hobbies-and-skills />
    <user-description />
  </div>
</template>

<script>
import CompanyInfo from "./userInfo/CompanyInfo";
import ContactsBlock from "./userInfo/ContactsBlock";
import HobbiesAndSkills from "./userInfo/HobbiesAndSkills";
import UserDescription from "./userInfo/UserDescription";
export default {
  name: "InfoBlock",
  components: {
    CompanyInfo,
    ContactsBlock,
    HobbiesAndSkills,
    UserDescription
  }
};
</script>

<style lang="scss">
.info-block {
  margin-left: 24px;
  width: 100%;
}
</style>
