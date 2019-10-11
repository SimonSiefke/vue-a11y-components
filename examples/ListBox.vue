<template>
  <list-box>
    <list-box-button>Select</list-box-button>
    <list-box-options :options="['a', 'b', 'c']" />
  </list-box>
</template>

<script>
import ListBox from "../components/ListBox/ListBox.vue";
import ListBoxButton from "../components/ListBox/ListBoxButton.vue";
import ListBoxOptions from "../components/ListBox/ListBoxOptions.vue";

export default {
  components: {
    ListBox,
    ListBoxButton,
    ListBoxOptions
  }
};
</script>

<style>
li[aria-selected='true']{
  background: red
}
</style>