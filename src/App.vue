<template>
  <nav>
    <h2>Github App</h2>
    <div class="links-holder">
      <router-link to="/">Home</router-link> |
      <router-link to="/repos">Repositories</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  
}

.links-holder {
  width: 10%;
  display: flex;
  justify-content: space-between;

}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
