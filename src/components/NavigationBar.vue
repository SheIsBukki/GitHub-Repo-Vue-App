<script>
import { IonIcon } from '@ionic/vue'

export default {
  components: {
    IonIcon
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isOpen: false,
      ionIconStyle: { fontSize: '64px', color: '#000', '--ionicon-stroke-width': '16px' }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  },
  methods: {
    handleWindowSizeChange() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  }
}
</script>

<template>
  <div class="navBarContainer">
    <nav v-if="windowWidth > 768" class="largeViewportNav">
      <header>
        <h1>GitHub Repo Explorer</h1>
      </header>
      <ul class="navLink">
        <li><router-link class="navButton" to="/">Home</router-link></li>
        <li><router-link class="navButton" to="/error404">Test Not Found</router-link></li>
        <li>
          <router-link class="navButton" to="/errorBoundary">Test Error Boundary</router-link>
        </li>
      </ul>
    </nav>

    <nav v-else class="smallViewportNav">
      <h1>GitHub Repo Explorer</h1>
      <!-- <div class="navMenu"> -->
      <ion-icon
        src="/menu-outline.svg"
        @click="isOpen = !isOpen"
        aria-label="MenuBar"
        aria-hidden="true"
        size="large"
        name="'menu-outline'"
        :style="ionIconStyle"
      ></ion-icon>
      <!-- </div> -->
      <ul v-if="isOpen" name="" id="">
        <li>
          <router-link class="navButton" to="/">Home</router-link>
        </li>

        <li>
          <router-link class="navButton" to="`/error404`">Test Not Found</router-link>
        </li>

        <li>
          <router-link class="navButton" to="/errorBoundary">Test Error Boundary</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
div.navBarContainer {
  padding: 10px 5px;
  margin-block: 15px;
}

nav.largeViewportNav {
  display: flex;
  justify-content: space-between;
  padding-inline: 15px;
}

.largeViewportNav h1 {
  color: #f070a1;
  font-size: 30px;
  letter-spacing: 5px;
  word-spacing: -0.2ch;
}

ul.navLink {
  color: #000;
  display: inline-flex;
  justify-content: space-evenly;
  list-style-type: none;
}

ul.navLink > li {
  color: #000;
  padding-inline: 8px;
}

nav.smallViewportNav {
  display: flex;
  justify-content: space-between;
}

.smallViewportNav h1 {
  color: #f070a1;
  font-size: 20px;
  letter-spacing: 3px;
  word-spacing: -0.2ch;
}
a {
  /*display: flex;
  justify-content: space-between;
  background-color: #000;
  border: solid 1px black;*/
  color: #000;
  /*padding: 5px;
  margin: 10px;*/
  text-decoration: none;
}
/*a:hover,
a.router-link-active {
    background-color: rgb(110, 79, 13);
}*/
</style>
