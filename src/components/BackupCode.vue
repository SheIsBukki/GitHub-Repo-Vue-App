Back Up

<!-- <script setup>
import { ref } from 'vue'

const repos = ref(null)

const fetchRepos = async function () {
  try {
    const response = await fetch('https://api.github.com/users/sheisbukki/repos')
    repos.value = await response.json()
  } catch (error) {
    console.log('Error fetching repositories:', error)
    throw error
  }
}

fetchRepos()
</script> -->

I used this in the mounted Hook

<!-- fetch('https://api.github.com/users/sheisbukki/repos')
      .then((response) => response.json())
      .then((data) => {
        this.repos = data
      })
      .catch((error) => {
        console.error(error)
      }) -->
