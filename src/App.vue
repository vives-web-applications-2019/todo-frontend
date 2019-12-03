<template>
  <div class="container">
    <h1>My todo app</h1>
    <ul>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  </div>
</template>

<script>

import TodoItem from './components/TodoItem'

export default {
  components: {
    TodoItem
  }
}
</script>

<style>
</style>
