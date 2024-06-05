<!-- The error returned from the build rejected -->

error during build: [vite]: Rollup failed to resolve import "vue-router" from
"/Users/bukolaogunleye/Documentss/Practice/altsch/github-repo-vue-app/node_modules/@ionic/vue/dist/index.js".
This is most likely unintended because it can break your application at runtime. If you do want to
externalize this module explicitly add it to `build.rollupOptions.external` at viteWarn
(file:///Users/bukolaogunleye/Documentss/Practice/altsch/github-repo-vue-app/node_modules/vite/dist/node/chunks/dep-BKbDVx1T.js:68818:27)
at onRollupWarning
(file:///Users/bukolaogunleye/Documentss/Practice/altsch/github-repo-vue-app/node_modules/vite/dist/node/chunks/dep-BKbDVx1T.js:68846:9)
at onwarn
(file:///Users/bukolaogunleye/Documentss/Practice/altsch/github-repo-vue-app/node_modules/vite/dist/node/chunks/dep-BKbDVx1T.js:68529:13)
at
file:///Users/bukolaogunleye/Documentss/Practice/altsch/github-repo-vue-app/node_modules/rollup/dist/es/shared/node-entry.js:18514:13
at Object.logger [as onLog]
(file:///Users/bukolaogunleye/Documentss/Practice/altsch/github-repo-vue-app/node_modules/rollup/dist/es/shared/node-entry.js:20162:9)
at ModuleLoader.handleInvalidResolvedId
(file:///Users/bukolaogunleye/Documentss/Practice/altsch/github-repo-vue-app/node_modules/rollup/dist/es/shared/node-entry.js:19104:26)
at
file:///Users/bukolaogunleye/Documentss/Practice/altsch/github-repo-vue-app/node_modules/rollup/dist/es/shared/node-entry.js:19062:26

<!--  -->
Back Up for Composition for API Code FOR REPOCARDS COMPONENT

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

FOR SINGLEREPO COMPONENT
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

FOR NAVIGATIONBAR COMPONENT -- Just started writing this...
<!-- <script setup>
import { IonIcon } from '@ionic/vue'
import {ref, o}  
</script> -->
