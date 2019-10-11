# ListBox

A listbox widget presents a list of options and allows a user to select one or more of them. A listbox that allows a single option to be chosen is a single-select listbox; one that allows multiple options to be selected is a multi-select listbox.

```vue
<template>
  <list-box>
    <list-box-button>Select</list-box-button>
    <list-box-options :options="['a', 'b', 'c']" />
  </list-box>
</template>

<style>
li[aria-selected='true'] {
  background: red;
}
</style>
```
