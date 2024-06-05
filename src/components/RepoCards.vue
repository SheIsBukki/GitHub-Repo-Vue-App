<script>
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/vue'

export default {
  components: { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
  data() {
    return {
      repos: [],
      currentPage: 1,
      reposPerPage: 2,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      displayBlock: {
        display: 'block'
      },
      displayGrid: {
        display: 'grid',
        'grid-template-columns': '1fr 1fr'
      }
    }
  },
  methods: {
    async fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/sheisbukki/repos')
        this.repos = await response.json()
      } catch (error) {
        console.log('Error fetching repositories:', error)
        throw error
      }
    },
    previousPageButton() {
      if (this.currentPage !== 1) this.currentPage--
    },
    nextPageButton() {
      if (this.currentPage !== Math.ceil(this.repos.length / this.reposPerPage)) this.currentPage++
    },
    paginationNumbers(pageNumber) {
      this.currentPage = pageNumber
    },
    handleWindowSizeChange() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  },
  mounted() {
    this.fetchRepos()
    window.addEventListener('resize', this.handleWindowSizeChange)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  },
  computed: {
    paginatedRepos() {
      const indexOfLastRepo = this.currentPage * this.reposPerPage
      const indexOfFirstRepo = indexOfLastRepo - this.reposPerPage
      return this.repos.slice(indexOfFirstRepo, indexOfLastRepo)
    },
    pageNumbers() {
      const pageNumbers = []
      for (let i = 1; i <= Math.ceil(this.repos.length / this.reposPerPage); i++) {
        pageNumbers.push(i)
      }
      return pageNumbers
    }
  }
}
</script>

<template>
  <main>
    <p v-if="!repos">Loading...</p>
    <div v-else>
      <section :style="windowWidth > 768 ? displayGrid : displayBlock" class="repoCardsContainer">
        <ion-card class="repoCard" color="dark" v-for="repo in paginatedRepos" :key="repo.id">
          <ion-card-header>
            <ion-card-title>{{ repo.name }}</ion-card-title>
            <ion-card-subtitle> Main language: {{ repo.language }} </ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>{{ repo.description }}</ion-card-content>
          <ion-button fill="clear">
            <router-link :to="`/singleRepo/${repo.name}`">View more</router-link>
          </ion-button>
        </ion-card>
      </section>

      <section class="reposPagination">
        <ul class="paginationButtonsContainer">
          <ion-button
            class="paginationButton"
            araia-label="Previous page"
            fill="outline"
            shape="round"
            @click="previousPageButton"
            >&laquo;</ion-button
          >

          <li class="paginationButton" v-for="number in pageNumbers" :key="number">
            <ion-button fill="outline" shape="round" @click="paginationNumbers(number)">{{
              number
            }}</ion-button>
          </li>

          <ion-button
            class="paginationButton"
            aria-label="Next page"
            fill="outline"
            shape="round"
            @click="nextPageButton"
            >&raquo;</ion-button
          >
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped>
/*RepoCards styling*/
main {
  max-width: 960px;
  width: 100%;
  margin: 8rem auto;
}

ion-card-header,
ion-card-content {
  padding: 10px;
}

ion-card {
  background-color: #f070a1;
  border: solid 2px #f070a1;
  color: #000;
  padding: 5px;
  margin: 10px;
}

.repoCardsContainer ion-button:hover {
  box-shadow: 2px 4px 8px 4px;
}

/*  Pagination styling*/
section.reposPagination {
  margin-block: 20px;
  text-align: center;
}

ul.paginationButtonsContainer {
  display: flex;
  justify-content: center;
  list-style-type: none;
  flex-wrap: wrap;
  gap: 5px;
}

ion-button {
  --border-color: #f070a1;
  --color: #000;
}

section.reposPagination ion-button:hover {
  background-color: #f070a1;
  box-shadow: 2px 4px 8px;
  border-radius: 40%;
}

a {
  text-decoration: none;
  font-size: 16px;
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
}
</style>
