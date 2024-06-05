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
      ionIconStyle: {
        fontSize: '64px',
        color: '#000',
        '--ionicon-stroke-width': '16px'
      }
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
        <li><router-link class="navButton" to="/error404">Test NotFound</router-link></li>
        <li>
          <router-link class="navButton" to="/errorBoundary">Test ErrorBoundary</router-link>
        </li>
      </ul>
    </nav>

    <nav v-else class="smallViewportNav">
      <header>
        <h1>GitHub Repo Explorer</h1>
        <ion-icon
          @click="isOpen = !isOpen"
          src="/menu-outline.svg"
          aria-label="MenuBar"
          aria-hidden="true"
          size="large"
          name="'menu-outline'"
          :style="ionIconStyle"
        ></ion-icon>
      </header>
      <transition name="fade" appear>
        <ul v-if="isOpen" class="navMenuItems">
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
      </transition>
    </nav>
  </div>
</template>

<style scoped>
div.navBarContainer {
  padding: 8px 5px;
  margin-block: 8px;
}

/*Small Viewport Navigation Menu Bar Styling*/
nav.largeViewportNav {
  display: flex;
  justify-content: space-between;
  padding-inline: 16px;
  width: 100%;
  word-wrap: break-word;
}

.largeViewportNav h1 {
  color: #f070a1;
  font-size: 30px;
  letter-spacing: 5px;
  word-spacing: -0.2ch;
}

.largeViewportNav > ul.navLink {
  display: inline-flex;
  list-style-type: none;
  padding-block: 24px;
}

ul.navLink > li {
  padding-inline-end: 16px;
  font-size: 24px;
}

/*Large Viewport Navigation Menu Bar Styling*/
nav.smallViewportNav > header {
  display: flex;
  justify-content: space-between;
}

.smallViewportNav h1 {
  color: #f070a1;
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 5px;
}

ul.navMenuItems > li {
  text-align: right;
  padding: 10px;
  list-style-type: none;
  transition: 5s;
}

/*Router Link Styling*/
a {
  font-size: 20px;
  color: #000;
  text-decoration: none;
}
a:hover,
a.router-link-active {
  color: #f070a1;
}

@media screen and (max-width: 440px) {
  .smallViewportNav h1 {
    letter-spacing: 1px;
  }
  ul.navMenuItems > li {
    font-size: 16px;
  }
}
</style>
