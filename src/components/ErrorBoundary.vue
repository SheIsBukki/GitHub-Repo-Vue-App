<!-- COMPOSITION API VERSION -->

<script setup>
import { ref, onErrorCaptured } from 'vue'

const error = ref(null)
const errorInfo = ref('')
const errorInstance = ref(null)

onErrorCaptured((error, instance, info) => {
  error.value = error
  errorInfo.value = info
  errorInstance.value = instance
  console.log('error: ', error)
  console.log('component Instance: ', instance)
  console.log('errorSrcType: ', info)
  return false
})
</script>

<!--  -->
<!-- OPTIONS API VERSION -->

<!-- <script>
export default {
  data() {
    return {
      error: null,
      errorInfo: '',
      errorInstance: null
    }
  },
  errorCaptured(error, instance, info) {
    this.error = error
    this.errorInfo = info
    this.errorInstance = instance
    console.log('error: ', error)
    console.log('component Instance: ', instance)
    console.log('errorSrcType: ', info)
    return false
  }
}
</script> -->

<template>
  <main>
    <div v-if="error">
      <h1>Something went wrong...</h1>
      <pre>{{ error }}</pre>
      <pre>{{ errorInstance }}</pre>
      <pre>{{ errorInfo }}</pre>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}
</style>
