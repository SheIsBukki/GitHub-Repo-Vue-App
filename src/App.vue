<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  components: {
    'navigation-bar': NavigationBar
  }
}
</script>

<template>
  <div>
    <navigation-bar />
    <router-view></router-view>
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
  /*  background-color: #dfdf00;*/
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
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
