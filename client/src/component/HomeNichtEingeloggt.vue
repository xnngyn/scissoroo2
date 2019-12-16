<template>
    <div id="buttons">

        <button class="btn btn-secondary mr-sm-2" @click="this.$store.commit('changeComponent','SignUp')">Registrieren</button> 
        <button class="btn btn-secondary" @click="this.$store.mutations.change('changeComponent','SignIn')">Anmelden</button>
        <button class="btn btn-secondary" @click="component='Results'">View Results</button>

        <component v-bind:is="$store.getters.componentState"></component>


        
        

    </div>

</template>

<script>
import HomeText from './HomeText';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyProfile from './MyProfile';
import Results from './Results';



export default {

    components: {
        'HomeText': HomeText,
        'SignIn': SignIn,
        'SignUp': SignUp,
        'MyProfile': MyProfile,
        'Results': Results
        
    },
    name: 'buttons',
    data () {
        return {

            component:'HomeText'
            
            
   
    }
  }
}
</script>

<style>

 


</style>