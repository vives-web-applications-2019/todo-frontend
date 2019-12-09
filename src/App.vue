<template>
  <div class="container">
    <h1>My todo app</h1>
    <form v-on:keyup.enter.prevent="addNewTask">
      <input type="text" v-model="newTask" placeholder="Add new task">
      <input hidden>
    </form>
    <ul>
      <TodoItem
        v-for="item in todoItems"
        v-bind:key="item.id"
        v-bind:id="item.id"
        v-bind:title="item.title"
        v-bind:state="item.state"
      />
    </ul>
  </div>
</template>

<script>

import TodoItem from './components/TodoItem'
import axios from 'axios'

export default {
  components: {
    TodoItem
  },
  data: function () {
    return {
      todoItems: [],
      newTask: null
    }
  },
  mounted: function () {
    this.getTodoItems()
  },
  methods: {
    getTodoItems: function () {
      axios('http://localhost:3000/todoitem')
        .then(reponse => {
          this.todoItems = reponse.data
        })
    },
    addNewTask: function () {
      const newTask = {
        title: this.newTask,
        description: '',
        state: false
      }
      axios.post('http://localhost:3000/todoitem', newTask)
        .then(response => {
          this.todoItems.push(newTask)
        })
    }
  }
}
</script>

<style>
</style>
