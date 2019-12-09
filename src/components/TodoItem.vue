<template>
    <li class="card blue-grey white-text">
        <div class="row">
            <div class="col s10"> {{ title }}</div>
            <div class="col s2 right-align">
              <span @click="changeState" class="mdi" v-bind:class="stateIcon"></span>
            </div>
        </div>
    </li>
</template>

<script>

import axios from 'axios'

export default {
  props: ['title', 'state', 'id'],
  computed: {
    stateIcon: function () {
      return this.state ? 'mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline'
    }
  },
  methods: {
    changeState: function () {
      const newState = !this.state
      axios.put(`http://localhost:3000/todoitem/${this.id}`,
        {
          state: newState
        })
        .then(response => {
          if (response.status === 200) {
            this.state = newState
          }
        })
    }
  }
}
</script>

<style scoped>
li {
  padding: 10px;
}

div.row {
  margin-bottom: 0px;
}

li {
  font-size: 2em;
}
</style>
