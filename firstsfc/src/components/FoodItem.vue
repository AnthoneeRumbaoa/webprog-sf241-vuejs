<template>
  <div> class="jampong">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Ramen, Takoyaki, Fries',
      message: 'I like ramen, takoyaki, and fries'
    }
  }
};
</script>

<style>  
  .jampong {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: orange;
  }
</style>