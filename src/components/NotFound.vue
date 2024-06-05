<template>
  <main>
    <h1>Error 404</h1>
    <p>Oops! Go back to <router-link to="/">Home</router-link></p>
  </main>
</template>

<style scoped>
main {
  max-width: 960px;
  width: 100%;
  margin: 10rem auto;
  text-align: center;
}

h1 {
  padding-block: 8px;
  color: #f070a1;
  letter-spacing: 8px;
}

p {
  letter-spacing: 16px;
}

a {
  padding: 8px;
  text-decoration: none;
  border: 2px solid #f070a1;
  color: #000;
}

a:hover,
a:active {
  color: #f070a1;
}

@media screen and (max-width: 600px) {
  p {
    letter-spacing: 8px;
    line-height: 40px;
  }
}
</style>
