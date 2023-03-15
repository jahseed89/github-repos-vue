<template>
  <div  class="container" >
    <h1 class="title">Welcome tos Github Page</h1>
    <div class="descriptions">
      <div>
        <!-- <img v-bind:src="user.avatar_url" alt="mapic" />
        <p>{{ user.name }}</p>
        <p>{{ user.login }}</p>
        <p>{{ user.bio }}</p> -->
      </div>
      <div class="get-repos">
        <router-link to="/repos">Get Repos</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "GitDashboard",
  data() {
    return {
      users: null,
    };
  },

  async mounted() {
    await axios.get("https://api.github.com/users/jahseed89").then((resp) => {
      this.users = resp.data;
      console.warn(this.users);
    });
  },
};
</script>

<style>
.title {
  margin: 3rem auto;
}
.descriptions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.get-repos a {
  border: 2px solid #42b983;
  background-color: #42b983;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 8px;
}
.get-repos a:hover {
  background-color: #fff;
  color: #42b983;
}
</style>
