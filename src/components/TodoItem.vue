<template>
  <li class="todo" :class="todo.done && 'card-active'">
    <p :class="todo.done && 'text-active'">{{ todo.text }}</p>
    <div class="todo__buttons">
      <span class="btn completed" @click="$emit('update', todo.id)"
        >Completed</span
      >
      <span class="btn delete" @click="$emit('delete', todo.id)">Delete</span>
    </div>
  </li>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Todo } from "../models/Todo";

@Options({
  props: {
    todo: Todo,
  },
})
export default class TodoItem extends Vue {
  handleClick(id: number) {
    this.$emit("id", id);
  }
}
</script>

<style lang="scss" scoped>
.todo {
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  background-color: var(--c-dark-blue);
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo__buttons {
  display: flex;
  gap: 10px;

  & .btn {
    padding: 5px 10px;
    border-radius: 10px;
    font-size: var(--font-sm);
    cursor: pointer;
    transition: 0.2s;
  }

  & .delete {
    background-color: red;

    &:hover {
      background-color: rgb(255, 58, 58);
    }
  }

  & .completed {
    background-color: green;

    &:hover {
      background-color: rgb(2, 163, 2);
    }
  }
}

.text-active {
  text-decoration: line-through;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s;
}

.card-active {
  background-color: rgba(20, 29, 46, 0.7);
  transition: 0.2s;
}
</style>
