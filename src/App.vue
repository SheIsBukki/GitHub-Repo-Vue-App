<!-- COMPOSITION API VERSION -->
<script setup>
import NavBar from './components/NavBar.vue'
</script>

<!--  -->
<!-- OPTIONS API VERSION -->

<!-- <script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    'nav-bar': NavBar
  }
}
</script> -->

<template>
  <div>
    <!-- <nav-bar /> -->
    <NavBar />
    <routerView></routerView>
    <!-- <router-view></router-view> -->
  </div>
</template>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-synthesis: none;
  font-size: 20px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  background-color: #16ffbd;
  color: #000;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}

body::-webkit-scrollbar {
  display: none;
}

/*html {
  font-size: 62.5%;
}*/

body {
  font-size: calc(0.75em + 1vmin);
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
