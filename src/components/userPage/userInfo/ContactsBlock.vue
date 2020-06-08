<template>
  <div class="contacts-block">
    <div class="contacts-list">
      <div class="vertical-block">
        <div class="entry">
          <img
            class="entry-icon icon-gray"
            src="@/assets/images/icons/contacts/placemark.svg"
            alt="локация"
          />
          <div class="description">
            <a :href="'/places' + contacts.location.placeNumber">
              <span v-if="contacts.location.floor">{{ contacts.location.floor }} этаж,</span>
              <span>место {{ contacts.location.placeNumber }}</span>
            </a>
            <span class="small-gray-text">
              {{
              contacts.location.officeName
              }}
            </span>
          </div>
        </div>
        <div class="entry">
          <img
            class="entry-icon icon-gray"
            src="@/assets/images/icons/contacts/phone-ip.svg"
            alt="офисный телефон"
          />
          <div class="description">
            <a :href="'tel:' + contacts.ipPhone">{{ contacts.ipPhone }}</a>
          </div>
        </div>
        <div v-if="contacts.jobPhone" class="entry">
          <img
            class="entry-icon icon-gray"
            src="@/assets/images/icons/contacts/phone-regular.svg"
            alt="рабочий телефон"
          />
          <div class="description">
            {{ contacts.jobPhone }}
            <span class="small-gray-text">Рабочий</span>
          </div>
        </div>
        <div
          v-if="contacts.personalPhone || isCurrentUser"
          v-show="!editMode"
          class="entry"
          :class="{ hoverable: isCurrentUser }"
        >
          <img
            class="entry-icon icon-gray"
            src="@/assets/images/icons/contacts/phone-regular.svg"
            alt="рабочий телефон"
          />
          <div class="description">
            <span v-if="contacts.personalPhone">
              {{
              contacts.personalPhone
              }}
            </span>
            <a v-else href="#" @click.prevent="toggleEdit">Заполнить</a>
            <span class="small-gray-text">Личный</span>
          </div>
          <edit-button v-if="isCurrentUser && contacts.personalPhone" @clickEvent="toggleEdit" />
        </div>
        <edit-phone-input
          v-if="editMode"
          type="text"
          :defaultInput="contacts.personalPhone"
          @onConfirm="setPhone"
          @onCancel="toggleEdit"
        />
      </div>
      <div class="vertical-block">
        <div class="entry">
          <img
            class="entry-icon icon-gray"
            src="@/assets/images/icons/contacts/email.svg"
            alt="Электронная почта"
          />
          <div class="description">
            <a :href="'mailto:' + contacts.email">{{ contacts.email }}</a>
          </div>
        </div>
        <div class="entry">
          <img class="entry-icon" src="@/assets/images/icons/contacts/skype.svg" alt="скайп" />
          <div class="description">
            <a :href="'skype:' + contacts.skype + '?chat'">Skype for business</a>
          </div>
        </div>
        <div class="entry">
          <img class="entry-icon" src="@/assets/images/icons/contacts/teams.svg" alt="teams" />
          <div class="description">
            <a :href="'/' + contacts.teams">Teams</a>
          </div>
        </div>
      </div>
    </div>
    <social-media-block />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import EditButton from "./utility/EditButton";
import EditPhoneInput from "./utility/EditPhoneInput";
import SocialMediaBlock from "./SocialMediaBlock";
export default {
  name: "ContactsBlock",
  components: {
    EditButton,
    EditPhoneInput,
    SocialMediaBlock
  },
  data: () => ({
    editMode: false
  }),
  computed: {
    ...mapState("user", ["contacts"]),
    ...mapState("auth", ["isCurrentUser"])
  },
  methods: {
    ...mapMutations("user", ["setContact"]),
    toggleEdit() {
      if (!this.isCurrentUser) return;
      this.editMode = !this.editMode;
    },
    setPhone(val) {
      this.setContact({ key: "personalPhone", val });
      this.toggleEdit();
    }
  }
};
</script>

<style lang="scss" scoped>
.contacts-block {
  display: flex;
  justify-content: space-between;
  padding: 25px;
  height: 250px;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
}

.contacts-list {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vertical-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.entry {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 25%;

  &-icon {
    margin-right: 10px;
  }

  .description {
    display: flex;
    flex-direction: column;
  }
}
</style>
