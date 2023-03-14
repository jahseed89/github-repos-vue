<template>
  <div class="header">
    <h2>Repository Name</h2>
    <h2>Repository Link</h2>
  </div>
  <div v-for="repo in repos" :key="repo.id" class="repos">
    <p>{{ repo.url.slice(39) }}</p>
    <a v-bind:href="repo.html_url " target="_blank">{{ repo.html_url }}</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReposView",
  data() {
    return {
      repos: null,
    };
  },

  mounted() {
    axios.get("https://api.github.com/users/jahseed89/repos").then((resp) => {
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

  }

  .repos {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  }
  .repos a {
    text-decoration: none;
    color: #000;
  }
</style>
