<template>
  <ul
    :id="listBox.listId"
    :aria-labelledby="listBox.buttonId"
    :aria-activedescendant="`option-${options[activeIndex]}`"
    @keydown="handleKeyDown"
    tabindex="-1"
    role="listbox"
    style="display:none"
  >
    <!-- eslint-disable-next-line -->
    <li
      v-for="(option, index) in options"
      :key="option"
      :aria-selected="index === activeIndex"
      @click="selectOption(index)"
      :id="`option-${option}`"
      role="option"
    >
      <slot :option="option">
        {{ option }}
      </slot>
    </li>
  </ul>
</template>

<script>
// @ts-nocheck
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    selectOption(index) {
      this.$el.style.display = "none";
      this.$emit("update:activeIndex", index);
      this.$emit("selectOption", this.options[index]);
    },
    handleKeyDown(event) {
      switch (event.key) {
        case "Escape":
        case "Enter":
        case "Return":
          this.selectOption(this.activeIndex);
          break;
        case "ArrowUp":
          if (this.activeIndex !== 0) {
            this.$emit("update:activeIndex", this.activeIndex - 1);
          }
          break;
        case "ArrowDown":
          if (this.activeIndex !== this.options.length - 1) {
            this.$emit("update:activeIndex", this.activeIndex + 1);
          }
          break;
        case "Home":
          event.preventDefault();
          this.$emit("update:activeIndex", 0);
          break;
        case "End":
          event.preventDefault();
          this.$emit("update:activeIndex", this.options.length - 1);
          break;
        default:
          break;
      }
    }
  },
  inject: ["listBox"]
};
</script>
