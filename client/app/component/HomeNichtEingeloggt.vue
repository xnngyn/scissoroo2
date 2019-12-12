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
import Results from './Results'

export default {

    components: {
        'HomeText': HomeText,
        'Results': Results
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