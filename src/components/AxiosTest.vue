<template>
  <div>
    <button @click="getMembers">axios test</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'AxiosTest',
  methods:{
    getMembers(){
      axios({
        url:"/api/hello",
        method:"GET"
      }).then(res=>{
        console.log(res);
      })
          .catch(err=>{
            console.log(err);
          })
    }
  }

}
</script>

<style>

</style>