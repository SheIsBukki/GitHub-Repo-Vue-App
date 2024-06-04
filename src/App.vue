<template>
  <div>
    <navigation-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  components: {
    'navigation-bar': NavigationBar
  }
}
</script>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  background-color: #16ffbd;
  color: #000;
  /*  padding: 0;*/
  /*  box-sizing: border-box;*/
  /*  margin: 0;*/
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
  -ms-overflow-style: none;
  scrollbar-width: none;
  /*  font-size: 2rem;*/
}

/*@media screen and (max-width: 768px) {
  *,
  *::before,
  *::after {
    font-size: 18px;
  }
}*/
/*a {
  display: inline-block;
  background-color: #000;
  border: solid 1px black;
  color: #fff;
  padding: 5px;
  margin: 10px;
  text-decoration: none;
}*/
/*a:hover,
a.router-link-active {
  background-color: rgb(110, 79, 13);
}*/
</style>
