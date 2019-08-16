<template>
  <div>
    <h1>Page Not Found</h1>
    <h3>The link that you entered never existed or doesn't work anymore</h3>
    <h3>Click <router-link :to="{ name: 'About' }">here</router-link> to go back to the home page</h3>
  </div>
</template>

<script>
export default {
  name: "Error"
}
</script>