<template>
    <div id="buttons">

        <button @click="component='SignUp'">Registrieren</button> 
        <button @click="component='SignIn'">Anmelden</button>

        <component v-bind:is="component"></component>


        
        <Results></Results>

    </div>

</template>

<script>
import HomeText from './HomeText';
import SignIn from './SignIn';
import SignUp from './SignUp';


export default {

    components: {
        'HomeText': HomeText,
        'SignIn': SignIn,
        'SignUp': SignUp
        
    },
    name: 'buttons',
    data () {
        return {
            component: 'HomeText'
   
    }
  }
}
</script>

<style>

 


</style>