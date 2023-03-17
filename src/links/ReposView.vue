<template>
  <div class="header">
    <h2>Repository Name</h2>
    <h2>Repository Link</h2>
  </div>
      <div v-for="repo in users" :key="repo.id" class="repos">
      <p>{{ repo.name }}</p>
      <span
        ><a v-bind:href="repo.html_url" target="_blank">{{
          repo.html_url
        }}</a></span
      >
    </div>
  <!-- <PaginationView :data="pageNumber"  /> -->

</template>

<script>
import axios from "axios";
// import PaginationView from "../components/PaginationView.vue";

export default {
  // components: {
  //   PaginationView,
  // },
  data() {
    return {
      users: [],
    };
  },

   mounted() {
     axios.get(`https://api.github.com/users/jahseed89/repos`).then((resp) => {
      this.users = resp.data;
      console.warn(this.users);
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
.pagination-holder {
  width: 20%;
  margin: 0 auto;
}

/* On media screens */
@media (max-width: 540px) {
  .header {
    width: 100%;
    padding: 10px;
  }
  .header h2 {
    font-size: 24px;
  }
  .repos {
    width: 100%;
    padding: 0 20px;
  }
  .repos p {
    font-size: 14px;
    width: 30%;
    text-align: left;
    margin-left: -0.8rem;
  }
  .repos a {
    font-size: 14px;
    width: 50%;
  }
}
</style>
