<template>
  <Header />
  <TodosWrapper />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import TodosWrapper from "./components/TodosWrapper.vue";
import Footer from "./components/Footer.vue";

@Options({
  components: {
    Header,
    TodosWrapper,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --c-dark-blue: #141d2f;
  --c-medium-blue: #1e2a47;
  --c-light-blue: #0079ff;
  --c-blue-hover: #60abff;
  --c-text: #ffffff;
  --font-xxl: 32px;
  --font-xl: 26px;
  --font-l: 18px;
  --font-body: 16px;
  --font-sm: 13px;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  font-family: "Poppins", sans-serif;
  background: var(--c-dark-blue);
  color: var(--c-text);
  padding: 0 20px;
}
</style>
