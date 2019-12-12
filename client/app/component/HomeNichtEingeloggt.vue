<template>
    <div id="buttons">

        <button>Registrieren</button> 
        <button>Anmelden</button>
        <HomeText></HomeText>
        <Results></Results>

    </div>

</template>

<script>
import HomeText from './HomeText'


export default {

    components: {
        'HomeText': HomeText,
        
    },
    name: 'buttons',
    data () {
        return {
   
    }
  }
}
</script>

<style>

 


</style>