<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <h1>Not Found</h1>
      <p style="margin-top: 20px">
        The requested URL was not found on this server.
      </p>
    </div>
    <div v-else>
      <h1>An error occurred</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title: this.error.statusCode === 404 ? '404 Not Found' : 'Error'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 677px;
  padding: 30px;
  margin: 0 auto;
}
h1 {
  font-size: 32px;
}
p {
  font-size: 16px;
}
</style>
