<template>
  <footer>
    <p>&copy; Noah Lissner</p>
  </footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
</style>
