<template>
  <div class="todo-list">
    <ul>
      // JavaScript expressions in Vue are enclosed in double curly brackets.
      <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
      <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
      <p> Test Data: {{this.deletedTodos}}</p>
      <todo
        v-on:delete-todo="deleteTodo"
        v-on:complete-todo = "completeTodo"
        v-for="todo in this.todos"
        v-bind:todo="todo"
        v-bind:key="todo.title">
      </todo>
    </ul>
    <create-todo v-on:add-todo = 'addTodo'/>
  </div>
</template>

<script>
import Todo from './Todo';
import CreateTodo from './CreateTodo';

export default {
  name: 'todo-list',
  components: { Todo, CreateTodo },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
      deletedTodos: 0,
    };
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
      this.deletedTodos = this.deletedTodos + 1;
    },
    addTodo(todo) {
      this.todos.push({
        title: todo.title,
        project: todo.project,
        done: todo.done,
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
  },
};
</script>

<style>

</style>
