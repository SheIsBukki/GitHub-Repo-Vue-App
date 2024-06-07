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
    ////THIS WORKS, JUST DECIDED TO USE THE ONE ABOVE
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
        <h1>Repository</h1>
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

            <div class="cardFooter">
              <ion-button fill="clear">
                <a :href="repo.html_url">View source code</a>
              </ion-button>
              <em v-if="!repo.homepage">No live site</em>
              <ion-button v-else fill="clear">
                <a :href="repo.homepage">Visit live site</a>
              </ion-button>
            </div>
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
main {
  margin: 8rem auto;
}

h1 {
  text-align: center;
  color: #f070a1;
  letter-spacing: 16px;
  font-size: 32px;
  /*  line-height: 40px;*/
}

section {
  padding: 8px;
  max-width: 768px;
  width: 100%;
  margin: 0 auto 16px;
}

ion-card {
  border: 2px solid #f070a1;
  padding: 16px;
}

ion-list,
ion-item {
  --background: #f070a1;
  background-color: #f070a1;
  padding-block: 2px;
}

ion-card-header,
ion-card-content,
ion-label,
ion-item > em {
  padding: 8px;
}

ion-button {
  --border-color: #f070a1;
  --color: #000;
  list-style-type: none;
  padding-inline: 8px;
}

div.cardFooter {
  text-align: center;
}

a {
  text-decoration: none;
  /*  font-size: 16px;*/
  color: #000;
}

a:hover,
a:active {
  color: #f070a1;
}

@media screen and (max-width: 768px) {
  main {
    margin: 2rem auto;
  }

  h1 {
    font-size: 24px;
  }
}
</style>
