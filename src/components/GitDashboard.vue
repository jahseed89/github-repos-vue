<template>
    <div v-for="repo in repos" :key="repo.id" class="container">
        <div>
            <img v-bind:src="repo.owner.avatar_url" alt="mapic" />
            <p>Samosn Ocran</p>
            <p>{{ repo.owner.login }}</p>
            <p>Web Developer</p>
        </div>
        <div class="get-repos">
            <router-link to="/repos">Get Repos</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

    export default {
        name: "GitDashboard",
        data(){
            return{
                repos: null,
            }
        },

        mounted()

        {
            axios.get("https://api.github.com/users/jahseed89/repos").then((resp) => {
                this.repos = resp.data.slice(0,1);
            })
           
        },
    
    }
</script>

<style>
    .container {
        padding-top: 5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .get-repos a {
        border: 2px solid #42b983;
        text-decoration: none;
        color: black;
        padding: 10px 15px;
        border-radius: 8px;
    }
</style>