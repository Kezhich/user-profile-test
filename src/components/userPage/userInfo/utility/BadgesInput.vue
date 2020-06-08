<template>
  <div class="badges-input-container">
    <div class="input-block">
      <div class="input-badge" v-for="item in allItems" :key="item">
        <span>{{item}}</span>
        <img
          src="@/assets/images/icons/utility/delete-cross.svg"
          class="delete-cross"
          alt="удалить"
          @click="deleteItem(item)"
        />
      </div>
      <input
        class="input-badge__input"
        type="text"
        ref="suggestionInput"
        @keyup="searchSuggestions"
        v-model="suggestionInput"
      />
      <ul class="suggestions-list">
        <li
          class="suggestions-list_item"
          v-for="suggestion of suggestionsList"
          :key="suggestion"
          @click="addItem(suggestion)"
        >{{suggestion}}</li>
        <li
          class="suggestions-list_item"
          v-if="!suggestionsList.length && suggestionInput"
          @click="addItem(suggestionInput)"
        >Добавить интерес “{{suggestionInput}}” в общий список</li>
      </ul>
    </div>
    <div class="buttons-block">
      <div class="button" @click="$emit('onConfirm', {newItems, removedItems})">
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
  name: "BadgesInput",
  props: {
    selectedItems: {
      type: Array
    },
    listToSearchIn: {
      type: Array
    }
  },
  data: () => ({
    newItems: [],
    removedItems: [],
    suggestionInput: "",
    oldItems: [],
    suggestionsList: []
  }),
  computed: {
    allItems() {
      return [...this.oldItems, ...this.newItems];
    }
  },
  methods: {
    searchSuggestions() {
      const suggestionsArr = [];
      if (this.suggestionInput) {
        let filter = this.suggestionInput.toUpperCase();

        for (const item of this.listToSearchIn) {
          if (~item.toUpperCase().indexOf(filter)) {
            suggestionsArr.push(item);
          }
        }
      }
      this.suggestionsList = suggestionsArr;
    },
    deleteItem(item) {
      const indexInNewItems = this.newItems.indexOf(item);
      if (~indexInNewItems) {
        this.newItems.splice(indexInNewItems, 1);
      } else {
        const indexInState = this.oldItems.indexOf(item);
        this.oldItems.splice(indexInState, 1);
        this.removedItems.push(item);
      }
    },
    addItem(item) {
      if (!~this.allItems.indexOf(item)) {
        this.newItems.push(item);
      }
      this.suggestionInput = "";
      this.$refs.suggestionInput.focus();
    }
  },
  created() {
    this.oldItems = [...this.selectedItems];
  },
  mounted() {
    this.$refs.suggestionInput.focus();
  }
};
</script>

<style lang="scss">
.badges-input-container {
  width: 100%;
  display: flex;
}

.input-block {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  border: 1px solid #071ac3;
  background-color: #fff;
  padding: 0 15px;
}

.input-badge {
  display: flex;
  padding: 4px 8px 4px 15px;
  background-color: #bababa;
  margin: 8px 0;
  margin-right: 8px;
  border-radius: 34px;
  font-size: 12px;
  line-height: 16px;

  &__input {
    border: none;
    padding: 4px 8px;
    &:focus {
      outline: none;
    }
  }
}

.delete-cross {
  margin-left: 8px;
  cursor: pointer;
  transition: opacity 0.6s;

  &:hover {
    opacity: 0.5;
  }
}

.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  background-color: #fff;
  z-index: 10;

  &_item {
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.6s;
    color: #071ac3;
    &:hover {
      background-color: #eee;
    }
  }
}

.buttons-block {
  width: 45px;
  min-width: 45px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button {
    cursor: pointer;
  }
}
</style>