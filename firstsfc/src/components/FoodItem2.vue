<template>
  <div> class="carbon">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Carbonara and a large 2 liters coke',
      message: 'Only for me hehe'
    }
  }
};
</script>

<style>
  .carbon {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
</style>