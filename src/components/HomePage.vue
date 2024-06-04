<template>
  <errorBoundary>
    <repo-cards />
  </errorBoundary>
</template>

<script>
import RepoCards from './RepoCards.vue'
import ErrorBoundary from './ErrorBoundary.vue'

export default {
  components: {
    'repo-cards': RepoCards,
    errorBoundary: ErrorBoundary
  }
}
</script>
