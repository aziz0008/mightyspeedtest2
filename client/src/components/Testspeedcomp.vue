<script lang="ts">


export default {
    name : 'Testspeedcomp',
  
  data () {
    return {
      downloadSpeed: 0
    }
  },
  methods: {
    async calculspeed () {
      
      const start = Date.now()
      //fetching a random 5 mb generated file from server
      //(i used an online file generator)
      const response = await fetch('http://localhost:8081/files/1')
      const file = await response.blob()
      const end = Date.now()
      //calculating time defizit
      const duration = ((end - start) / 1000)
      //convertion
      const size = (file.size / (1024*1024))
      //result in Mbps
      this.downloadSpeed = (size / duration)
    }},mounted(){this.calculspeed()}

  }

//$router.push('TestSpeed')
</script>

<template>
  <main>
    
    
    <p v-if="downloadSpeed">Your Download speed: {{ downloadSpeed }} Mbps</p>
  </main>
</template>
