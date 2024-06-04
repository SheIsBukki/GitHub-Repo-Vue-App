<!-- <script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const repo = ref(null)
const route = useRoute()

const fetchIndividualRepo = function () {
  fetch(`https://api.github.com/repos/sheisbukki/${route.params.name}`)
    .then((response) => response.json())
    .then((data) => {
      repo.value = data
    })
    .catch((error) => {
      console.error(error)
    })
}

fetchIndividualRepo()

const regularDate = (dateValue) => {
  return new Date(dateValue).toLocaleDateString('en-uk', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script> -->

<script>
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonItem,
  IonList
} from '@ionic/vue'
import ErrorBoundary from './ErrorBoundary.vue'

export default {
  components: {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonLabel,
    IonItem,
    IonList,
    errorBoundary: ErrorBoundary
  },
  data() {
    return {
      repo: null
    }
  },
  methods: {
    fetchSingleRepo() {
      fetch(`https://api.github.com/repos/sheisbukki/${this.$route.params.name}`)
        .then((response) => response.json())
        .then((data) => {
          this.repo = data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    // async fetchSingleRepo() {
    //   try {
    //     const response = await fetch(
    //       `https://api.github.com/repos/sheisbukki/${this.$route.params.name}`
    //     )
    //     this.repo = await response.json()
    //   } catch (error) {
    //     console.log('Error fetching repositories:', error)
    //     throw error
    //   }
    // },
    regularDate(dateValue) {
      return new Date(dateValue).toLocaleDateString('en-uk', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  },
  mounted() {
    this.fetchSingleRepo()
  }
}
</script>

<template>
  <errorBoundary>
    <main>
      <p v-if="!repo">Loading...</p>
      <div v-else>
        <section>
          <ion-card color="dark">
            <ion-card-header>
              <ion-card-title>{{ repo.name }}</ion-card-title>
              <ion-card-subtitle>
                <strong>Main language:</strong> {{ repo.language }}
              </ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              {{ repo.description }}
            </ion-card-content>

            <ion-card-content>
              <ion-list>
                <ion-item>
                  <em>Created on: </em>
                  <ion-label> {{ regularDate(repo.created_at) }}</ion-label>
                </ion-item>
                <ion-item>
                  <em>Pushed on: </em>
                  <ion-label> {{ regularDate(repo.pushed_at) }}</ion-label>
                </ion-item>
                <ion-item>
                  <em>Last updated on: </em>
                  <ion-label>{{ regularDate(repo.updated_at) }}</ion-label>
                </ion-item>
              </ion-list>
            </ion-card-content>

            <ion-button color="tertiary">
              <a :href="repo.html_url">View source code</a>
            </ion-button>
            <em v-if="!repo.homepage">No live site</em>
            <ion-button color="tertiary" v-else>
              <a :href="repo.homepage">Visit live site</a>
            </ion-button>
          </ion-card>
        </section>
        <footer :style="{ 'text-align': 'center' }">
          <ion-button fill="outline" shape="round" size="small"
            ><router-link to="/">Go back</router-link></ion-button
          >
        </footer>
      </div>
    </main>
  </errorBoundary>
</template>

<style scoped>
*,
*::before,
*::after {
  color: #000;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

section {
  padding: 5px;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
}
ion-card {
  border: 2px solid #f070a1;
}

ion-card-header,
ion-card-content,
ion-label,
ion-item > em {
  padding: 10px;
}

ion-button {
  --border-color: #f070a1;
  --color: #000;
  font-size: 16px;
  list-style-type: none;
}

a {
  text-decoration: none;
  font-size: 16px;
  color: #000;
}
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
