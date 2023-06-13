<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Testspeedcomp from '../components/Testspeedcomp.vue'
import Header from '../components/Header.vue'

export default {components:{TheWelcome,Testspeedcomp,Header},
data() { return {visibility:true, diditstart:false}},
methods:{getbool(val: any){ this.visibility=val, this.diditstart=true}
}

}


//$router.push('TestSpeed')
</script>

<template>
  <main>
    <Header></Header>
    <TheWelcome v-if="visibility" 
    :getval="getbool" />
  
   <Testspeedcomp v-if="diditstart"/>

  </main>
</template>
