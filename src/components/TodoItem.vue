<template>
    <li class="card blue-grey white-text">
        <div class="row">
            <div class="col s10"> {{ title }}</div>
            <div class="col s2"> {{ state }}</div>
        </div>
    </li>
</template>

<script>
export default {
  props: ['title', 'state']
}
</script>

<style scoped>
li {
  padding: 10px;
}

div.row {
  margin-bottom: 0px;
}
</style>
