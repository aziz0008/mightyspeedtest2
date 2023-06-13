<script  lang="ts">
export default {
name : 'TheWelcome',methods:{
hide(){this.visibility=false }}, 
data(){ return{visibility:true}},

props: {getval: {type:Function , required:true}}
}

</script>

<template>
  <div>
<h3>welcome to the mighty Speedtest</h3>
<button v-on:click="hide(),getval(visibility)" 
>Start</button>


  </div>
    
     
</template>
