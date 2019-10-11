<template>
  <button :id="listBox.buttonId" aria-haspopup="listbox">
    <slot />
  </button>
</template>

<script>
export default {
  inject: ["listBox"]
};
</script>
