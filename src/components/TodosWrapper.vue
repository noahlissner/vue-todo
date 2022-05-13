<template>
  <main>
    <form class="form" @submit.prevent="onSubmit">
      <input
        type="text"
        class="form__input"
        placeholder="What do you need to do?"
        v-model="inputValue"
      />
      <button class="form__btn">Add</button>
    </form>
    <div v-if="todos.length > 0" class="container">
      <button class="sort" @click="handleSort">Sort By Name</button>
      <button class="sort sort__reset" @click="getFromLocalStorage">
        Reset
      </button>
      <ul class="container__list">
        <TodoItem
          @delete="handleDelete($event)"
          @update="handleUpdate($event)"
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
        />
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoItem from "../components/TodoItem.vue";
import { Todo } from "../models/Todo";
import { ITodo } from "../models/ITodo";

@Options({
  components: {
    TodoItem,
  },
})
export default class TodosWrapper extends Vue {
  inputValue = "";
  todos: ITodo[] = [];

  mounted() {
    this.getFromLocalStorage();
  }

  onSubmit() {
    const todo = new Todo(this.inputValue);
    this.todos.unshift(todo);
    this.inputValue = "";
    this.saveToLocalStorage();
  }

  handleDelete(id: number) {
    this.todos = this.todos.filter((e) => e.id !== id);
    this.saveToLocalStorage();
  }

  handleUpdate(id: number) {
    this.todos.forEach((el) => {
      if (el.id === id) {
        el.done = !el.done;
      }
    });
    this.saveToLocalStorage();
  }

  handleSort() {
    this.todos.sort(function (a, b) {
      let nameA = a.text.toUpperCase();
      let nameB = b.text.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  getFromLocalStorage() {
    const text: string | null = localStorage.getItem("todos");

    if (text) {
      const parsed = JSON.parse(text);
      this.todos = parsed;
    }
  }
}
</script>

<style lang="scss">
main {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
}

.form {
  background-color: var(--c-medium-blue);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px 40px;
  border-radius: 10px;

  &__input {
    flex: 1;
    font-size: var(--font-body);
    padding: 8px 15px;
    /* border: 1px solid #fff; */
    border: none;
    border-radius: 5px;
    color: var(--c-text);
    background: var(--c-dark-blue);
    outline: none;
    font-family: inherit;
  }

  &__btn {
    padding: 10px 25px;
    border-radius: 5px;
    border-color: var(--c-light-blue);
    color: #fff;
    font-weight: bold;
    background-color: var(--c-light-blue);
  }
}

.container {
  width: 100%;
  background-color: var(--c-medium-blue);
  border-radius: 10px;
  margin-top: 20px;

  &__list {
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 20px 40px;
  }

  & .sort {
    background-color: var(--c-light-blue);
    color: var(--c-text);
    border: none;

    padding: 10px 8px;
    border-radius: 5px;
    margin-left: 40px;
    margin-top: 20px;
  }

  & .sort__reset {
    background-color: red;
    margin-left: 10px;
  }
}
</style>
