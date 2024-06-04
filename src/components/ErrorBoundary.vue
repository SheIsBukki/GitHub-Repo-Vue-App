<template>
  <div>
    <div v-if="error">
      <h1>Something went wrong...</h1>
      <pre>{{ error }}</pre>
      <pre>{{ errorInstance }}</pre>
      <pre>{{ errorInfo }}</pre>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
</script>
