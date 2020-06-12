<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Type text to see the input box grow its width, even when IME is on.</p>
    <p>
      <input type="text" class="demo" />
    </p>
    <p>Note that the minimum width of the above is 100px specified by CSS.</p>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.demo {
  min-width: 100px;
}
</style>
