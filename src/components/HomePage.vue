<!-- COMPOSITION API VERSION -->
<script setup>
import RepoCards from './RepoCards.vue'
import ErrorBoundary from './ErrorBoundary.vue'
</script>

<!--  -->
<!-- OPTIONS API VERSION -->
<!-- <script>
import RepoCards from './RepoCards.vue'
import ErrorBoundary from './ErrorBoundary.vue'

export default {
  components: {
    'repo-cards': RepoCards,
    errorBoundary: ErrorBoundary
  }
}
</script> -->

<template>
  <ErrorBoundary>
    <repo-cards />
  </ErrorBoundary>
</template>
