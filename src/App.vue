<template>
  <div class="container">
    <h1>My todo app</h1>
    <ul>
      <TodoItem
        v-for="item in todoItems"
        v-bind:key="item.id"
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
      todoItems: []
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
    }
  }
}
</script>

<style>
</style>
