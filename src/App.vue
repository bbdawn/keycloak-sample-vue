<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Keycloak sample</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">

        <router-link to="/">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </router-link>

        <router-link to="/list">
        <a class="nav-link" href="#">List</a>
        </router-link>

        <router-link to="/detail">
        <a class="nav-link" href="#" :blog="blog">Detail</a>
        </router-link>

        <router-link to="/axios-test">
          <a class="nav-link" href="#" >AxiosTest</a>
        </router-link>

      </div>
    </div>
  </div>
</nav>



<div class="mt-4">
<router-view :blog="blog"></router-view>
</div>


</template>

<script>
import blog from './assets/blog.js';

export default {
  name: 'App',
  data(){
    return {
       blog : blog
    }
  },
  components: {
    // List,
  }
}
</script>

<style>  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
