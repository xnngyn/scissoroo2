<template>
    <div id="buttons">

        <button class="btn btn-secondary mr-sm-2" @click="component='SignUp'">Registrieren</button> 
        <button class="btn btn-secondary" @click="component='SignIn'">Anmelden</button>

        <component v-bind:is="component"></component>


        
        <Results></Results>

    </div>

</template>

<script>
import HomeText from './HomeText';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyProfile from './MyProfile';



export default {

    components: {
        'HomeText': HomeText,
        'SignIn': SignIn,
        'SignUp': SignUp,
        'MyProfile': MyProfile
        
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

 buttons{
    float:right;
 }


</style>