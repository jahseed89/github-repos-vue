<template>
  <div class="header">
    <h2>Repository Name</h2>
    <h2>Repository Link</h2>
  </div>
  <div v-for="repo in repos" :key="repo.id" class="repos">
    <p>{{ repo.name }}</p>
    <a v-bind:href="repo.html_url" target="_blank">{{ repo.html_url }}</a>
  </div>
  <div>
    <PaginationView  />
  </div>
  
</template>

<script>
import axios from "axios";


export default {
  name: "ReposView",


  data() {
    return {
      repos: [],

    };


  },

  mounted() {
    axios
      .get('https://api.github.com/users/jahseed89/repos')
      .then((resp) => {
        this.repos = resp.data;
      });
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  width: 60%;
  margin: 0 auto;
}

.repos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 60%;
  margin: 0 auto;
  border: 1px dashed #fff;
}
.repos p {
  color: #42b983;
  font-size: 1.2rem;
}
.repos a {
  text-decoration: none;
  color: #42b983;
  font-size: 1.2rem;
}
</style>
