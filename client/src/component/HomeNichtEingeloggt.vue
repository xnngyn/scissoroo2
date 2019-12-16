<template>
    <div id="buttons">


        <button class="btn btn-secondary mr-sm-2" @click="setSignUp">Registrieren</button> 
        <button class="btn btn-secondary" @click="setSignIn">Anmelden</button>
         <button class="btn btn-secondary" @click="setResults">Results</button>

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
  },
  methods: {
      setSignUp: function() {
          this.$store.state.componentState = 'SignUp';
      },
       setSignIn: function() {
          this.$store.state.componentState = 'SignIn';

  },
   setResults: function() {
          this.$store.state.componentState = 'Results';

  }
}

}
</script>

<style>

 buttons{
    float:right;
 }


</style>