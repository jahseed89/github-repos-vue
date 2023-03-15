<template>
  <nav>
    <div class="title-logo">
      <img src="./assets/github-logo.png" alt="git-logo" class="git-logo" />
      <h2>Github App</h2>
    </div>
    <div class="links-holder">
      <router-link to="/">Home</router-link> |
      <router-link to="/repos">Repositories</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: rgb(49 72 94);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
}

.git-logo {
  width: 100px;
  height: 65px;
}
nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.links-holder {
  width: 10%;
  display: flex;
  justify-content: space-between;
}

.title-logo {
  display: flex;
}

.logo-holder img {
  object-fit: cover;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
