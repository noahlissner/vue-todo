<template>
  <div class="header">
    <h1>Todo App</h1>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

h1 {
  font-size: var(--font-xxl);
}
</style>
