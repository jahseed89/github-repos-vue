<template>
  <div  class="container" >
    <h1 class="title">Welcome to {{users.login}}'s Github Page</h1>
    <div class="descriptions">
      <div :key="users.id">
        <img v-bind:src="users.avatar_url" alt="mapic" class="ma-pic" />
        <p class="name">{{ users.name }}</p>
        <p>{{ users.login }}</p>
        <p class="bio">{{ users.bio }}</p>
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
      users: {},
    };
  },

   mounted() {
     axios.get("https://api.github.com/users/jahseed89").then((resp) => {
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
.name {
  font-size: 1.5rem;
}
.bio {
  font-style: italic;
}

/* On media screens */

@media (max-width: 540px) {
  .title {
    font-size: 28px;
  }
  .descriptions {
    flex-direction: column;
  }

  .ma-pic {
    width: 90%;
  }
  .get-repos {
    margin-top: 3rem;
  }
}
</style>
